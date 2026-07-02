export const siteConfig = {
  name: "SILLARTE",
  slogan: "Diseños que llenan de vida tus espacios.",
  description:
    "Sillas y mesas modernas para hogares, terrazas, restaurantes, cafeterías y proyectos comerciales en Colombia.",
  city: "Cali, Colombia",
  whatsappNumber: "573155441165",
  instagram: "",
  facebook: "",
  tiktok: "",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}