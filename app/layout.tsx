import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jasa Pemasangan Trafo & Kontraktor Elektrikal Batam | PT. Veritasindo Citra Abadi",
  description: "Jasa pemasangan trafo, instalasi cubicle LV & MV, dan supplier peralatan listrik terpercaya di Batam. PT. Veritasindo Citra Abadi — kontraktor elektrikal cepat, tanggap, dan profesional.",
  keywords: "jasa pemasangan trafo, pemasangan trafo Batam, kontraktor elektrikal Batam, supplier peralatan listrik, instalasi cubicle LV MV, jasa instalasi listrik Batam, transformator, PT Veritasindo Citra Abadi",
  authors: [{ name: "PT. Veritasindo Citra Abadi" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "PT. Veritasindo Citra Abadi",
    title: "Jasa Pemasangan Trafo & Kontraktor Elektrikal Batam | PT. Veritasindo Citra Abadi",
    description: "Jasa pemasangan trafo, instalasi cubicle LV & MV, dan supplier peralatan listrik terpercaya di Batam.",
    url: "https://veritasindocitraabadi.co.id/",
    images: [
      {
        url: "https://veritasindocitraabadi.co.id/assets/logo-new.webp",
        alt: "PT. Veritasindo Citra Abadi"
      }
    ]
  },
  twitter: {
    card: "summary_large_image"
  },
  other: {
    "theme-color": "#071f33"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" type="image/webp" href="/assets/favicon.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
