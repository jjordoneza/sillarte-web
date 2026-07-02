export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#EDE4CC] px-6 py-14">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-black/10 pt-8 md:flex-row">
        <div>
          <h3 className="text-2xl font-semibold tracking-[0.2em]">SILLARTE</h3>
          <p className="mt-3 text-black/60">Diseños que llenan de vida tus espacios.</p>
        </div>
        <div className="text-sm leading-7 text-black/60">
          <p>Cali, Colombia</p>
          <p>WhatsApp: +57 300 123 4567</p>
          <p>Instagram · Facebook · TikTok</p>
        </div>
      </div>
    </footer>
  );
}
