export default function About() {
  return (
    <section className="bg-white px-6 py-28">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#4F6F52]">
          Nuestra marca
        </p>

        <h2 className="text-4xl font-semibold md:text-5xl">
          Diseño, funcionalidad y calidez para transformar espacios.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/65">
          SILLARTE es una marca de mobiliario moderno enfocada en sillas y mesas importadas
          directamente. Trabajamos para hogares, terrazas, restaurantes, cafeterías y proyectos
          comerciales que buscan piezas funcionales, estéticas y duraderas.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] bg-[#EDE4CC] p-8">
            <h3 className="text-xl font-semibold">Importación directa</h3>
            <p className="mt-3 text-black/60">Selección cuidada de referencias modernas y versátiles.</p>
          </div>

          <div className="rounded-[2rem] bg-[#EDE4CC] p-8">
            <h3 className="text-xl font-semibold">Atención por WhatsApp</h3>
            <p className="mt-3 text-black/60">Cotizaciones rápidas, asesoría y acompañamiento comercial.</p>
          </div>

          <div className="rounded-[2rem] bg-[#EDE4CC] p-8">
            <h3 className="text-xl font-semibold">Envíos nacionales</h3>
            <p className="mt-3 text-black/60">Despachos a diferentes ciudades de Colombia.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
