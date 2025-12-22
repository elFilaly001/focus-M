import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SectorProvider } from "@/components/sector-context";
import LayoutShell from "@/components/layout-shell";

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
            <LayoutShell>{children}</LayoutShell>
          </SectorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
