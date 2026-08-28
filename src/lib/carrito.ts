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
  // Sólo presente en piezas con más de un color real (ver
  // `Product.colores` en products.ts). Dos líneas del mismo modelo pero
  // con color distinto se tratan como ítems separados: si no, no habría
  // forma de saber cuál color pidió el cliente.
  color?: string;
}

const CLAVE_ALMACENAMIENTO = "sillarte-carrito";
const EVENTO_CAMBIO = "carrito:cambio";

function mismaLinea(a: Pick<ItemCarrito, "slug" | "color">, b: Pick<ItemCarrito, "slug" | "color">): boolean {
  return a.slug === b.slug && (a.color ?? null) === (b.color ?? null);
}

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
  const existente = items.find((i) => mismaLinea(i, item));
  if (existente) {
    existente.cantidad += cantidad;
  } else {
    items.push({ ...item, cantidad });
  }
  guardarCarrito(items);
}

export function actualizarCantidad(slug: string, color: string | undefined, cantidad: number) {
  const items = obtenerCarrito();
  const item = items.find((i) => mismaLinea(i, { slug, color }));
  if (!item) return;
  if (cantidad <= 0) {
    guardarCarrito(items.filter((i) => !mismaLinea(i, { slug, color })));
  } else {
    item.cantidad = cantidad;
    guardarCarrito(items);
  }
}

export function quitarDelCarrito(slug: string, color: string | undefined) {
  guardarCarrito(obtenerCarrito().filter((i) => !mismaLinea(i, { slug, color })));
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
  const lineas = items.map((item, indice) => {
    const colorTexto = item.color ? ` — Color: ${item.color}` : "";
    return `${indice + 1}. ${item.nombre}${colorTexto} (Ref. ${item.ref}) — ${item.cantidad} x ${formatearPrecio(item.precio)} = ${formatearPrecio(item.precio * item.cantidad)}`;
  });
  return (
    `Hola, quiero hacer un pedido con estas piezas de Sillarte:\n\n` +
    `${lineas.join("\n")}\n\n` +
    `Total estimado: ${formatearPrecio(totalCarrito(items))}\n\n` +
    `¿Me confirman disponibilidad y tiempo de entrega?`
  );
}
