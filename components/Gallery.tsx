export default function Gallery() {
  return (
    <section id="galeria" className="bg-[#2E2E2E] px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#EDE4CC]">Inspiración</p>
        <h2 className="max-w-3xl text-4xl font-semibold md:text-5xl">
          Ambientes pensados para hogares, terrazas y negocios.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {["Comedor", "Terraza", "Restaurante"].map((item) => (
            <div key={item} className="flex h-80 items-end rounded-[2rem] bg-white/10 p-6">
              <span className="text-2xl font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
