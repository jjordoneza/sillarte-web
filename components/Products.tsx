import { products } from "@/data/products";
import { whatsappLink } from "@/data/site";

export default function Products() {
  return (
    <section id="productos" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#4F6F52]">
              Catálogo
            </p>
            <h2 className="text-4xl font-semibold md:text-5xl">
              Productos destacados
            </h2>
          </div>

          <p className="max-w-md text-black/65">
            Conoce nuestras referencias disponibles y solicita información por WhatsApp.
            Te asesoramos según el tipo de espacio, uso y cantidad requerida.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <article key={product.name} className="rounded-[2rem] bg-white p-6">
              <div className="mb-6 flex h-80 items-center justify-center rounded-[1.5rem] bg-[#EDE4CC] text-center text-black/40">
                Foto de {product.name}
              </div>

              <div className="mb-4 inline-flex rounded-full bg-[#EDE4CC] px-4 py-2 text-sm text-[#4F6F52]">
                {product.category}
              </div>

              <h3 className="text-3xl font-semibold">{product.name}</h3>

              <p className="mt-4 leading-7 text-black/65">
                {product.description}
              </p>

              <div className="mt-6 space-y-4 rounded-[1.5rem] bg-[#F7F1E2] p-5 text-sm">
                <div>
                  <p className="font-semibold text-[#2E2E2E]">Material</p>
                  <p className="mt-1 text-black/60">{product.material}</p>
                </div>

                <div>
                  <p className="font-semibold text-[#2E2E2E]">Colores</p>
                  <p className="mt-1 text-black/60">{product.colors.join(", ")}</p>
                </div>

                <div>
                  <p className="font-semibold text-[#2E2E2E]">Uso recomendado</p>
                  <p className="mt-1 text-black/60">{product.use}</p>
                </div>

                <div>
                  <p className="font-semibold text-[#2E2E2E]">Medidas</p>
                  <p className="mt-1 text-black/60">{product.measures}</p>
                </div>
              </div>

              <a
                href={whatsappLink(`Hola, me interesa ${product.name} de SILLARTE. ¿Me puedes enviar más información?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-[#4F6F52] px-6 py-3 text-sm text-white transition hover:bg-[#3f5a42]"
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
