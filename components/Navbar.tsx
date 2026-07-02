import { whatsappLink } from "@/data/site";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-[#EDE4CC]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="text-2xl font-semibold tracking-[0.2em] text-[#2E2E2E]">
          SILLARTE
        </a>

        <div className="hidden items-center gap-8 text-sm md:flex">
          <a href="#productos" className="transition hover:text-[#4F6F52]">Productos</a>
          <a href="#galeria" className="transition hover:text-[#4F6F52]">Ambientes</a>
          <a href="#mayoristas" className="transition hover:text-[#4F6F52]">Mayoristas</a>
          <a href="#contacto" className="transition hover:text-[#4F6F52]">Contacto</a>
        </div>

        <a
          href={whatsappLink("Hola, vi la página de SILLARTE y quiero más información.")}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#4F6F52] px-5 py-2 text-sm text-white transition hover:bg-[#3f5a42]"
        >
          WhatsApp
        </a>
      </nav>
    </header>
  );
}
