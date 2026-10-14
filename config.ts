const clean = (u: string) => u.replace(/\/$/, "");
export const SITE_URL = clean(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000");
export const APP_URL = clean(process.env.NEXT_PUBLIC_APP_URL ?? "");
export const API_URL = clean(process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api");
export const SITE = {
  name: "TunSuite",
  tagline: "L'ERP & CRM conçu pour les entreprises tunisiennes",
  description:
    "TunSuite : ERP et CRM tunisien pour PME. Devis, factures, achats, stock, trésorerie, paie, POS, comptabilité, facturation électronique TTN et déclarations TEJ.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@tunsuite.tn",
};
export const abs = (path = "") => `${SITE_URL}${path}`;
export const LOGIN = `${APP_URL}/login`;
export const SIGNUP = `${APP_URL}/signup`;
export const WINDOWS = {
  url: process.env.NEXT_PUBLIC_WINDOWS_DOWNLOAD_URL ?? "/downloads/tunsuite-windows-setup.exe",
  version: process.env.NEXT_PUBLIC_WINDOWS_VERSION ?? "1.0.0",
};
