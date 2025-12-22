"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { SectorToggle } from "@/components/sector-toggle"
import { NewsletterPopup } from "@/components/newsletter-popup"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface Props {
    children: React.ReactNode
}

export function LayoutShell({ children }: Props) {
    const pathname = usePathname() || ""
    const normalized = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname
    const isHome = normalized === "/home"

    if (isHome) {
        return <>{children}</>
    }

    return (
        <>
            <SectorToggle />
            <Header />
            <NewsletterPopup />
            {children}
            <Footer />
        </>
    )
}

export default LayoutShell
