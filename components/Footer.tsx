import { siteConfig, whatsappLink } from "@/data/site";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#EDE4CC] px-6 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-black/10 pt-8 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-semibold tracking-[0.2em]">SILLARTE</h3>
          <p className="mt-3 text-black/60">Diseños que llenan de vida tus espacios.</p>
        </div>

        <div className="text-sm leading-7 text-black/60">
          <p>Importadores directos</p>
          <p>Envíos a todo Colombia</p>
          <p>Atención por WhatsApp</p>
          <p>{siteConfig.email}</p>
        </div>

        <div className="flex flex-col items-start gap-3 text-sm">
          <a
            href={whatsappLink("Hola, vi la página de SILLARTE y quiero más información.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4F6F52] hover:underline"
          >
            WhatsApp
          </a>

          <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="hover:underline">
            Instagram
          </a>

          <a href={siteConfig.tiktok} target="_blank" rel="noopener noreferrer" className="hover:underline">
            TikTok
          </a>
        </div>
      </div>
    </footer>
  );
}
