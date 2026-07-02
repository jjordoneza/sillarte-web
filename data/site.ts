export const siteConfig = {
  name: "SILLARTE",
  slogan: "Diseños que llenan de vida tus espacios.",
  description:
    "Sillas y mesas modernas importadas directamente para hogares, terrazas, restaurantes, cafeterías y proyectos comerciales en Colombia.",
  city: "Colombia",
  whatsappNumber: "573155441165",
  email: "sillarte.co@gmail.com",
  instagram: "https://www.instagram.com/sillarte_/",
  tiktok: "https://www.tiktok.com/@sillarte_",
  facebook: "",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
