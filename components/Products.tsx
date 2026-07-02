import { whatsappLink } from "@/data/site";

const products = [
  { name: "Sillas modernas", text: "Diseños versátiles para comedor, terraza y espacios comerciales." },
  { name: "Mesas", text: "Piezas funcionales para complementar ambientes interiores y exteriores." },
  { name: "Combos de terraza", text: "Soluciones listas para crear espacios cómodos y atractivos." },
];

export default function Products() {
  return (
    <section id="productos" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#4F6F52]">Catálogo</p>
            <h2 className="text-4xl font-semibold md:text-5xl">Productos destacados</h2>
          </div>

          <p className="max-w-md text-black/65">
            Conoce nuestras referencias disponibles y solicita información por WhatsApp.
            Te asesoramos según el tipo de espacio y cantidad requerida.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((item) => (
            <article key={item.name} className="rounded-[2rem] bg-white p-6">
              <div className="mb-6 flex h-72 items-center justify-center rounded-[1.5rem] bg-[#EDE4CC] text-black/40">
                Foto del producto
              </div>

              <h3 className="text-2xl font-semibold">{item.name}</h3>

              <p className="mt-3 leading-7 text-black/60">{item.text}</p>

              <a
                href={whatsappLink(`Hola, me interesa ${item.name} de SILLARTE.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-[#4F6F52] px-5 py-3 text-sm text-white transition hover:bg-[#3f5a42]"
              >
                Solicitar información
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
