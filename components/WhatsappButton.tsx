import { whatsappLink } from "@/data/site";

export default function WhatsappButton() {
  return (
    <a
      href={whatsappLink("Hola, vi la página de SILLARTE y quiero más información.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-[#4F6F52] px-6 py-4 text-sm font-medium text-white shadow-xl transition hover:bg-[#3f5a42]"
    >
      WhatsApp
    </a>
  );
}
