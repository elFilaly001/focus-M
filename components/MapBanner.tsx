"use client"

import React from "react"

interface MapBannerProps {
  className?: string
  src?: string
  title?: string
  height?: number | string
}

export function MapBanner({
  className = "",
  src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9999999999995!2d2.292292615674634!3d48.8583730792876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fddf1b09b0b%3A0x8c0b6e8b8b8b8b8b!2s123%20Avenue%20de%20l'Innovation%2C%20Tech%20City!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr",
  title = "Localisation FocusTech",
  height = 250,
}: MapBannerProps) {
  return (
    <div className={"w-full mt-10 sm:mt-16 px-0 sm:px-4 " + className}>
      <div className="w-full rounded-none overflow-hidden shadow-lg border-t border-border">
        <iframe
          title={title}
          src={src}
          width="100%"
          height={height}
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[250px] sm:h-[350px]"
        ></iframe>
      </div>
    </div>
  )
}
