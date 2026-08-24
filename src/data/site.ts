// Datos generales del sitio y helpers de contacto.
// Reutiliza la información real de contacto ya validada por Sillarte.
export const siteConfig = {
  name: "Sillarte",
  year: "2026",
  slogan: "Diseños lujosos, a un precio justo.",
  description:
    "Sillarte: sillas, mesas y bancos de diseño a precio de fábrica, con stock disponible. Venta al por mayor para negocios y al detal para hogares en toda Colombia.",
  whatsappNumber: "573155441165",
  // TODO: confirmar si el correo de mayoreo es distinto al general antes de publicar.
  email: "sillarte.co@gmail.com",
  instagram: "https://www.instagram.com/sillarte_/",
  tiktok: "https://www.tiktok.com/@sillarte_",
  facebook: "",
};

// Genera un enlace de WhatsApp con mensaje precargado.
// NOTA: el número de WhatsApp para mayoreo se define arriba en `whatsappNumber`.
export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// NOTA: reemplazar por el correo real de cotizaciones si es distinto a `siteConfig.email`.
export function mailtoLink(subject: string, body: string) {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
