import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE, SITE_URL } from "@/lib/config";
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Figtree({ subsets: ["latin"], variable: "--font-body", display: "swap" });
export const viewport: Viewport = { themeColor: "#0B4F8A" };
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE.name} | ${SITE.tagline}`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: ["ERP Tunisie", "CRM Tunisie", "logiciel de facturation Tunisie", "facture électronique TTN", "TEJ", "gestion de stock", "logiciel de paie Tunisie", "POS Tunisie", "TunSuite"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: SITE.name, locale: "fr_TN", title: SITE.name, description: SITE.description, url: "/" },
  twitter: { card: "summary_large_image", title: SITE.name, description: SITE.description },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body><Header /><main>{children}</main><Footer /></body>
    </html>
  );
}
