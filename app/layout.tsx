import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SectorProvider } from "@/components/sector-context";
import LayoutShell from "@/components/layout-shell";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Focus-M | Écrans Tactiles Interactifs Professionnels 4K UHD",
  description:
    "Découvrez nos écrans tactiles interactifs 4K UHD pour entreprises et établissements scolaires. Touch X2 et Touch Ultra avec technologie multi-touch 20 points. Solutions d'affichage professionnel pour salles de conférence et salles de classe.",
  keywords: [
    "sno7i focusm",
    "écran tactile",
    "écran interactif",
    "écran tactile professionnel",
    "écran tactile 4K",
    "écran tactile entreprise",
    "tableau blanc interactif",
    "écran collaboration",
    "affichage interactif",
    "écran salle de conférence",
    "écran multi-touch",
    "écran tactile éducation",
    "tableau numérique interactif",
    "tni",
    "écran interactif 98 pouces",
  ],
  openGraph: {
    title: "Focus-M | Écrans Tactiles Interactifs Professionnels 4K UHD",
    description:
      "Solutions d'affichage tactile professionnel pour entreprises et établissements scolaires. Touch X2 et Touch Ultra avec technologie multi-touch 20 points.",
    type: "website",
    locale: "fr_FR",
    siteName: "Focus-M",
    images: [
      {
        url: "/modern-tech-display-monitor.jpg",
        width: 1200,
        height: 630,
        alt: "Écran tactile interactif Focus-M Touch X2 4K UHD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus-M | Écrans Tactiles Interactifs Professionnels 4K",
    description:
      "Solutions d'affichage tactile professionnel pour entreprises et établissements scolaires",
    images: ["/modern-tech-display-monitor.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/LOGO/Brandbook-FOCUS-M-1.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/LOGO/Brandbook-FOCUS-M-1.png"
          sizes="192x192"
        />
        <link rel="apple-touch-icon" href="/LOGO/Brandbook-FOCUS-M-1.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="focus-m-theme"
        >
          <SectorProvider>
            <LayoutShell>{children}</LayoutShell>
            <Toaster />
          </SectorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
