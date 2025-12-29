import { useEffect, useRef, useState } from "react"

interface UseCountUpOptions {
  start?: number
  end: number
  duration?: number // ms
  decimals?: number
  startOnView?: boolean
}

export function useCountUp({ start = 0, end, duration = 1200, decimals = 0, startOnView = false }: UseCountUpOptions) {
  const [value, setValue] = useState(start)
  const ref = useRef<HTMLDivElement | null>(null)
  const [hasStarted, setHasStarted] = useState(!startOnView)

  useEffect(() => {
    if (!hasStarted) return
    let startTimestamp: number | null = null
    let frame: number
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const current = start + (end - start) * progress
      setValue(Number(current.toFixed(decimals)))
      if (progress < 1) {
        frame = requestAnimationFrame(step)
      } else {
        setValue(Number(end.toFixed(decimals)))
      }
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [hasStarted, start, end, duration, decimals])

  useEffect(() => {
    if (!startOnView) return
    const node = ref.current
    if (!node) return
    let observer: IntersectionObserver | null = null
    observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer && observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(node)
    return () => observer && observer.disconnect()
  }, [startOnView])

  return { value, ref }
}
