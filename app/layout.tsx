import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SILLARTE | Sillas y mesas modernas en Colombia",
  description:
    "Sillas y mesas modernas para hogares, terrazas, restaurantes, cafeterías y proyectos comerciales. Atención por WhatsApp.",
  keywords: [
    "SILLARTE",
    "sillas modernas",
    "mesas modernas",
    "mobiliario en Cali",
    "muebles para terraza",
    "sillas para restaurantes",
    "mobiliario Colombia",
  ],
  openGraph: {
    title: "SILLARTE | Diseños que llenan de vida tus espacios",
    description:
      "Catálogo de sillas y mesas modernas para hogares, terrazas y proyectos comerciales.",
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