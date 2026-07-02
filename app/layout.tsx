import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: "SILLARTE | Sillas y mesas modernas en Colombia",
  description: siteConfig.description,
  keywords: [
    "SILLARTE",
    "sillas modernas",
    "mesas modernas",
    "mobiliario Colombia",
    "muebles para terraza",
    "sillas para restaurantes",
    "mobiliario importado",
    "mobiliario para cafeterías",
  ],
  openGraph: {
    title: "SILLARTE | Diseños que llenan de vida tus espacios",
    description: siteConfig.description,
    url: "https://sillarte.com.co",
    siteName: "SILLARTE",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
