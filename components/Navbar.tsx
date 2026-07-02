export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-[#EDE4CC]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="text-2xl font-semibold tracking-[0.2em] text-[#2E2E2E]">
          SILLARTE
        </a>
        <div className="hidden items-center gap-8 text-sm md:flex">
          <a href="#productos">Productos</a>
          <a href="#galeria">Ambientes</a>
          <a href="#mayoristas">Mayoristas</a>
          <a href="#contacto">Contacto</a>
        </div>
        <a
          href="https://wa.me/573155441165?text=Hola%2C%20vi%20la%20p%C3%A1gina%20de%20SILLARTE%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n."
          target="_blank"
          className="rounded-full bg-[#4F6F52] px-5 py-2 text-sm text-white"
        >
          WhatsApp
        </a>
      </nav>
    </header>
  );
}
