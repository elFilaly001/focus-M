import type React from "react"
import type { Metadata } from "next"
import { Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300"], // Add desired weights, e.g., "400"
})

export const metadata: Metadata = {
  title: "FocusTech - Interactive Display Solutions",
  description:
    "Next-generation interactive display technology for businesses and education. Transform your workspace with cutting-edge collaboration tools.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  themeColor: "#dc2626",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
