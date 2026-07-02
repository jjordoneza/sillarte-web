export default function Wholesale() {
  return (
    <section id="mayoristas" className="bg-white px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-[#4F6F52] p-10 text-white md:grid-cols-2 md:p-16">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#EDE4CC]">Mayoristas</p>
          <h2 className="text-4xl font-semibold md:text-5xl">
            Compra por volumen para proyectos y negocios.
          </h2>
        </div>
        <div>
          <p className="text-lg leading-8 text-white/80">
            Atendemos restaurantes, cafeterías, decoradores, constructoras y tiendas aliadas.
            Cotizamos por volumen y despachamos a diferentes ciudades de Colombia.
          </p>
          <a
            href="https://wa.me/573001234567?text=Hola%2C%20quiero%20una%20cotizaci%C3%B3n%20mayorista%20de%20SILLARTE."
            target="_blank"
            className="mt-8 inline-block rounded-full bg-white px-7 py-4 text-[#2E2E2E]"
          >
            Solicitar cotización
          </a>
        </div>
      </div>
    </section>
  );
}
