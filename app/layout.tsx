import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SectorProvider } from "@/components/sector-context";
import { SectorToggle } from "@/components/sector-toggle";
import { NewsletterPopup } from "@/components/newsletter-popup";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Focus-M | Interactive Touchscreen Solutions",
  description: "Enterprise-grade interactive touchscreen displays",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SectorProvider>
            <SectorToggle />
            <Header />
            <NewsletterPopup />
            {children}
            <Footer />
          </SectorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
