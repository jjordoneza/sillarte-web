// Catálogo de la colección Cálida 2026.
// `image` referencia el recorte en /public/products (fondo transparente).
// `scene` referencia la foto de estudio en /public/scenes (para bloques inmersivos).
export type Product = {
  slug: string;
  name: string;
  ref: string;
  category: "Mesas" | "Bancos" | "Sillas";
  detail: string;
  image: string;
  scene: string;
  // Ficha técnica y descripciones completas (opcionales): se van llenando
  // pieza por pieza a medida que llega la información real de cada producto.
  // Aún no se muestran en la landing; quedan listas para una futura página
  // de detalle de producto.
  ficha?: Record<string, string>;
  descripcionCorta?: string;
  descripcionLarga?: string;
  // Fotos adicionales de producto (detalle de materiales, ángulos extra).
  // Tampoco se muestran todavía; listas para una galería futura.
  galeria?: string[];
};

export const products: Product[] = [
  {
    slug: "mesa-perla",
    name: 'Mesa "Perla"',
    ref: "SM-01",
    category: "Mesas",
    detail: "Tablero marmoleado hueso, base negra",
    // Foto real de producto (fondo blanco, no recorte transparente ni
    // escena de estudio) — se usa para ambos bloques mientras no haya
    // fotografía de estudio con fondo cálido.
    image: "/products/mesa-perla.jpg",
    scene: "/products/mesa-perla.jpg",
    galeria: [
      "/products/mesa-perla-alt.jpg",
      "/products/mesa-perla-detalle-tablero.jpg",
      "/products/mesa-perla-detalle-base.jpg",
      "/products/mesa-perla-listado.jpg",
    ],
    ficha: {
      Alto: "74 cm",
      "Diámetro tablero": "70 cm",
      "Grosor del tablero": "1,8 cm",
      "Peso de la pieza": "8,3 kg",
      "Material tablero": "MDF de alta densidad, acabado marmoleado tono hueso",
      "Material base": "Acero, pedestal único, recubrimiento en polvo negro",
      "Protección de piso": "Sí, borde plástico en la base",
      Ensamble: "Requiere ensamble, herramientas incluidas",
      "Colores disponibles": "Tablero marmoleado hueso / Base negra",
    },
    descripcionCorta:
      "Mesa redonda de pedestal con tablero marmoleado en tono hueso y base en acero negro. Compacta, resistente y lista para combinar con el resto de la familia Cálida.",
    descripcionLarga:
      'Redonda, marmoleada, de pedestal — la protagonista compacta de cualquier montaje. Una mesa de líneas limpias pensada para espacios donde cada centímetro cuenta. Su tablero de 70 cm de diámetro con acabado marmoleado en tono hueso se apoya sobre una base pedestal única en acero negro, liberando espacio y facilitando el movimiento a su alrededor. Tablero en MDF de alta densidad, resistente a golpes, humedad y deformaciones. Base en acero con recubrimiento en polvo, antióxido, con protectores de piso que evitan rayones en porcelanato o madera. Ensamble sencillo con herramientas incluidas, lista para usar en minutos. Hace parte de la familia Cálida: combina directamente con las banquetas de barra, la banca y las sillas de la colección, permitiendo a distribuidores y tiendas ofrecer un conjunto completo con una sola paleta (hueso, camel, gris, negro y detalles dorados). Disponible con condiciones especiales de precio por volumen para reventa.',
  },
  {
    slug: "banco-alto-calida",
    name: 'Banco alto "Cálida"',
    ref: "SB-01",
    category: "Bancos",
    detail: "Crema/negro, patas con dorado",
    image: "/products/banco-alto-calida.png",
    scene: "/scenes/pieza-banco-alto-calida.jpg",
  },
  {
    slug: "silla-concha-camel",
    name: 'Silla "Concha" Camel',
    ref: "SC-02",
    category: "Sillas",
    detail: "Tapizado camel, base metálica",
    image: "/products/silla-concha-camel.png",
    scene: "/scenes/pieza-silla-concha-camel.jpg",
  },
  {
    slug: "silla-concha-gris",
    name: 'Silla "Concha" Gris',
    ref: "SC-02",
    category: "Sillas",
    detail: "Tapizado gris, base metálica",
    image: "/products/silla-concha-gris.png",
    scene: "/scenes/pieza-silla-concha-gris.jpg",
  },
  {
    slug: "silla-barril-negra",
    name: 'Silla "Barril" Negra',
    ref: "SA-03",
    category: "Sillas",
    detail: "Con brazos",
    image: "/products/silla-barril-negra.png",
    scene: "/scenes/pieza-silla-barril-negra.jpg",
  },
  {
    slug: "silla-abanico-negra",
    name: 'Silla "Abanico" Negra',
    ref: "SF-04",
    category: "Sillas",
    detail: "Respaldo canalado",
    image: "/products/silla-abanico-negra.png",
    scene: "/scenes/pieza-silla-abanico-negra.jpg",
  },
];

// Categorías del segundo nivel de navegación visual.
export const categories = [
  {
    name: "Conjuntos",
    description: "Mesa + sillas coordinadas en un solo tono.",
    image: "/scenes/categoria-conjuntos.jpg",
    href: "#destacados",
  },
  {
    name: "Sillas",
    description: "Concha, Barril y Abanico, en 4 tonos cálidos.",
    image: "/scenes/categoria-sillas.jpg",
    href: "#destacados",
  },
  {
    name: "Mesas",
    description: "Base sólida, cubierta en mármol.",
    image: "/scenes/categoria-mesas.jpg",
    href: "#destacados",
  },
  {
    name: "Bancos altos",
    description: "Para barras, islas y cafés.",
    image: "/scenes/categoria-bancos.jpg",
    href: "#destacados",
  },
];

// Preguntas frecuentes (detal + mayoreo).
export const faq = [
  {
    question: "¿Cuál es la cantidad mínima para precio de mayoreo?",
    answer:
      "Desde 6 unidades de una misma referencia accedes a precios de mayoreo. Para pedidos mixtos (varias piezas de la colección), escríbenos y te armamos una cotización a la medida.",
  },
  {
    question: "¿Hacen envíos a todo el país?",
    answer:
      "Sí, despachamos a todas las ciudades de Colombia. El tiempo y costo de envío dependen del destino y el volumen del pedido; te lo confirmamos en la cotización.",
  },
  {
    question: "¿Las piezas de la colección Cálida combinan entre sí?",
    answer:
      "Sí. Los 4 tonos y los materiales de la colección fueron pensados para combinarse: puedes mezclar sillas, mesas y bancos de distintas referencias sin perder coherencia visual.",
  },
  {
    question: "¿Cuánto tardan en responder una cotización de mayoreo?",
    answer:
      "Nuestro tiempo de respuesta es de máximo 24 horas hábiles a partir de que recibimos tu solicitud por WhatsApp, correo o el formulario de esta página.",
  },
  {
    question: "¿Tienen catálogo con fichas técnicas y precios de mayoreo?",
    answer:
      "Sí, puedes descargar el catálogo PDF con medidas, materiales y estructura de precios de mayoreo desde el botón en la sección Mayoreo.",
  },
];

// Reseñas de ejemplo — NOTA: reemplazar por testimonios reales antes de publicar.
export const testimonials = [
  {
    quote:
      "Amoblamos todo el café con la colección Cálida y el cambio se sintió inmediato: se ve un lugar mucho más costoso de lo que realmente invertimos.",
    author: "Cliente ejemplo",
    role: "Dueño de cafetería, Medellín",
  },
  {
    quote:
      "Compramos por volumen para el restaurante y el proceso con Sillarte fue rápido: cotización clara, envío puntual y las piezas llegaron perfectas.",
    author: "Cliente ejemplo",
    role: "Gerente de restaurante, Bogotá",
  },
  {
    quote:
      "Lo que más me gustó es que todo combina entre sí. No tuve que pensar en armar un ambiente: la colección ya viene coordinada.",
    author: "Cliente ejemplo",
    role: "Diseñadora de interiores, Cali",
  },
];
