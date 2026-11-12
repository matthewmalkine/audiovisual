import type { Metadata, Viewport } from "next";

import { SmoothScroll } from "@/components/site-effects";

import "./globals.css";

const siteTitle = "Better Films | Diretor Criativo e Cineasta em Nova York";
const siteDescription =
  "Better Films é o portfólio de um diretor criativo e cineasta de Nova York, com publicidade, videoclipes, documentários e curtas-metragens.";

export const metadata: Metadata = {
  metadataBase: new URL("https://better-films.framer.website"),
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: "https://framerusercontent.com/images/bEzL5m8nQ92ADMOeA6F8ec6FKX0.jpg",
  },
  openGraph: {
    type: "website",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "https://framerusercontent.com/images/XW7f0MvGk0brI1TxOEMrhQJ87U.jpg",
        width: 1200,
        height: 630,
        alt: "Better Films",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["https://framerusercontent.com/images/XW7f0MvGk0brI1TxOEMrhQJ87U.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body id="top">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
