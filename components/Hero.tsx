import { whatsappLink } from "@/data/site";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6 pt-28">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#4F6F52]">
            Importadores directos
          </p>

          <h1 className="max-w-2xl text-5xl font-semibold leading-tight md:text-7xl">
            Diseños que llenan de vida tus espacios.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-black/70">
            Sillas y mesas modernas para hogares, terrazas, restaurantes y proyectos comerciales.
            Enviamos a todo Colombia.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#productos" className="rounded-full bg-[#2E2E2E] px-7 py-4 text-center text-white transition hover:bg-black">
              Ver productos
            </a>

            <a
              href={whatsappLink("Hola, quiero conocer los productos de SILLARTE.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#2E2E2E] px-7 py-4 text-center transition hover:bg-[#2E2E2E] hover:text-white"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>

        <div className="min-h-[520px] rounded-[2rem] bg-[#A67856] p-6">
          <div className="flex h-full min-h-[480px] items-center justify-center rounded-[1.5rem] border border-white/30 bg-[#EDE4CC]/20 text-center text-white">
            <p className="max-w-xs text-lg">
              Aquí irá la fotografía principal de los productos SILLARTE.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
