import { whatsappLink } from "@/data/site";

export default function Wholesale() {
  return (
    <section id="mayoristas" className="bg-white px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-[#4F6F52] p-10 text-white md:grid-cols-2 md:p-16">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#EDE4CC]">
            Mayoristas
          </p>

          <h2 className="text-4xl font-semibold md:text-5xl">
            Compra por volumen para proyectos y negocios.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-white/80">
            Atendemos restaurantes, cafeterías, decoradores, constructoras, proyectos comerciales
            y clientes que necesitan comprar por volumen. Somos importadores directos y realizamos
            envíos a todo Colombia.
          </p>

          <a
            href={whatsappLink("Hola, quiero una cotización mayorista de SILLARTE.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-7 py-4 text-[#2E2E2E] transition hover:bg-[#EDE4CC]"
          >
            Solicitar cotización
          </a>
        </div>
      </div>
    </section>
  );
}
