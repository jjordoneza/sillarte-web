// Carrito de compra: sólo guarda la selección del cliente en localStorage
// (no hay backend ni pasarela de pagos). Al final, el cliente envía el
// pedido armado como un mensaje de WhatsApp — el cierre real de la venta
// sigue siendo por chat, igual que el resto del sitio.
export interface ItemCarrito {
  slug: string;
  nombre: string;
  ref: string;
  precio: number;
  imagen: string;
  cantidad: number;
}

const CLAVE_ALMACENAMIENTO = "sillarte-carrito";
const EVENTO_CAMBIO = "carrito:cambio";

export function obtenerCarrito(): ItemCarrito[] {
  try {
    const crudo = window.localStorage.getItem(CLAVE_ALMACENAMIENTO);
    return crudo ? (JSON.parse(crudo) as ItemCarrito[]) : [];
  } catch {
    return [];
  }
}

function guardarCarrito(items: ItemCarrito[]) {
  try {
    window.localStorage.setItem(CLAVE_ALMACENAMIENTO, JSON.stringify(items));
  } catch {
    // Almacenamiento no disponible (modo privado, cuota llena, etc.):
    // el carrito simplemente no persiste entre páginas.
  }
  window.dispatchEvent(new CustomEvent<ItemCarrito[]>(EVENTO_CAMBIO, { detail: items }));
}

export function agregarAlCarrito(item: Omit<ItemCarrito, "cantidad">, cantidad = 1) {
  const items = obtenerCarrito();
  const existente = items.find((i) => i.slug === item.slug);
  if (existente) {
    existente.cantidad += cantidad;
  } else {
    items.push({ ...item, cantidad });
  }
  guardarCarrito(items);
}

export function actualizarCantidad(slug: string, cantidad: number) {
  const items = obtenerCarrito();
  const item = items.find((i) => i.slug === slug);
  if (!item) return;
  if (cantidad <= 0) {
    guardarCarrito(items.filter((i) => i.slug !== slug));
  } else {
    item.cantidad = cantidad;
    guardarCarrito(items);
  }
}

export function quitarDelCarrito(slug: string) {
  guardarCarrito(obtenerCarrito().filter((i) => i.slug !== slug));
}

export function vaciarCarrito() {
  guardarCarrito([]);
}

export function totalCarrito(items: ItemCarrito[]): number {
  return items.reduce((suma, item) => suma + item.precio * item.cantidad, 0);
}

export function contarUnidades(items: ItemCarrito[]): number {
  return items.reduce((suma, item) => suma + item.cantidad, 0);
}

export function alCambiarCarrito(callback: (items: ItemCarrito[]) => void) {
  window.addEventListener(EVENTO_CAMBIO, (evento) => {
    callback((evento as CustomEvent<ItemCarrito[]>).detail);
  });
}

export function formatearPrecio(valor: number): string {
  return `$${new Intl.NumberFormat("es-CO").format(valor)}`;
}

export function mensajeWhatsappCarrito(items: ItemCarrito[]): string {
  const lineas = items.map(
    (item, indice) =>
      `${indice + 1}. ${item.nombre} (Ref. ${item.ref}) — ${item.cantidad} x ${formatearPrecio(item.precio)} = ${formatearPrecio(item.precio * item.cantidad)}`
  );
  return (
    `Hola, quiero hacer un pedido con estas piezas de Sillarte:\n\n` +
    `${lineas.join("\n")}\n\n` +
    `Total estimado: ${formatearPrecio(totalCarrito(items))}\n\n` +
    `¿Me confirman disponibilidad y tiempo de entrega?`
  );
}
