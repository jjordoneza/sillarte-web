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
    slug: "silla-barril",
    name: "Silla Barril",
    ref: "SB-02",
    category: "Sillas",
    detail: "Asiento curvo tapizado camel, patas de metal",
    // Foto real de producto (fondo blanco); se usa para ambos bloques
    // mientras no haya fotografía de estudio con fondo cálido.
    image: "/products/silla-barril.jpg",
    scene: "/products/silla-barril.jpg",
    galeria: [
      "/products/silla-barril-camel-alt.jpg",
      "/products/silla-barril-camel-espalda.jpg",
      "/products/silla-barril-camel-detalle.jpg",
      "/products/silla-barril-negro.jpg",
      "/products/silla-barril-negro-espalda.jpg",
      "/products/silla-barril-negro-alt.jpg",
      "/products/silla-barril-negro-base.jpg",
    ],
    ficha: {
      "Alto total": "82 cm",
      Ancho: "51 cm",
      Fondo: "56 cm",
      "Alto de asiento": "44 cm",
      "Fondo de asiento": "44 cm",
      "Alto de respaldo": "38 cm",
      "Material asiento/respaldo": "Poliuretano acolchado (cuero sintético)",
      "Material patas": "Metal",
      "Colores disponibles": "Camel y gris oscuro",
    },
    descripcionCorta:
      "Silla de comedor con asiento curvo y respaldo envolvente, tapizada en poliuretano acolchado sobre patas de metal. Cómoda, resistente y lista para combinar con el resto de la familia Cálida.",
    descripcionLarga:
      "Asiento curvo, respaldo envolvente: la silueta que le da nombre a su propio estilo. Su asiento ancho se curva hacia arriba en los costados, envolviendo suavemente el cuerpo, mientras el respaldo alto mantiene una postura cómoda durante comidas largas. Tapizada en poliuretano acolchado de tacto suave, resistente al uso diario y fácil de limpiar con un paño húmedo, se sostiene sobre patas de metal delgadas que aportan ligereza visual sin sacrificar estabilidad. El asiento ancho y el respaldo curvo distribuyen el peso de forma cómoda. Hace parte de la familia Cálida: combina con la Mesa Perla y el resto de la colección en una misma paleta de hueso, camel, gris, negro y detalles dorados, permitiendo a distribuidores y tiendas ofrecer un conjunto coordinado con una sola referencia. Condiciones especiales de precio por volumen disponibles para reventa.",
  },
  {
    slug: "silla-concha",
    name: "Silla Concha",
    ref: "SC-03",
    category: "Sillas",
    detail: "Asiento en cuero negro, patas de metal",
    image: "/products/silla-concha.jpg",
    scene: "/products/silla-concha.jpg",
    ficha: {
      Alto: "91 cm",
      Ancho: "45 cm",
      Fondo: "42 cm",
      Peso: "5,35 kg",
      "Material asiento": "Cuero",
      "Material patas": "Metal",
      Color: "Negro",
    },
    descripcionCorta:
      "Silla de comedor de líneas limpias, asiento en cuero sobre patas de metal negro. Sobria, versátil y lista para combinar con el resto de la familia Cálida.",
    descripcionLarga:
      "Cuero y metal, en su expresión más limpia. Una silla de comedor de líneas depuradas: asiento en cuero sobre una estructura de patas en metal negro, pensada para quienes buscan un mueble sobrio que no pase de moda. Su perfil minimalista la hace igual de versátil en un comedor formal que en una barra o rincón de trabajo. El asiento en cuero es de tacto firme y fácil mantenimiento, y la estructura en metal negro es estable y resistente al uso diario, con un perfil liviano que no sobrecarga visualmente el espacio. Hace parte de la familia Cálida: combina con la Mesa Perla, la Silla Barril y el resto de la colección en una misma paleta de hueso, camel, gris, negro y detalles dorados, permitiendo a distribuidores y tiendas ofrecer un conjunto coordinado con una sola referencia. Condiciones especiales de precio por volumen disponibles para reventa.",
  },
  {
    slug: "silla-abanico",
    name: "Silla Abanico",
    ref: "SA-04",
    category: "Sillas",
    detail: "Con brazos, tapizado símil cuero negro",
    image: "/products/silla-abanico.jpg",
    // Esta pieza sí tiene fotos de escena reales (ambientadas, no de
    // fondo blanco) — se usa una para los bloques inmersivos.
    scene: "/products/silla-abanico-escena.jpg",
    galeria: [
      "/products/silla-abanico-escena-alt.jpg",
      "/products/silla-abanico-escena-dupla.jpg",
      "/products/silla-abanico-espalda.jpg",
      "/products/silla-abanico-detalle-herraje.jpg",
      "/products/silla-abanico-medidas.jpg",
    ],
    ficha: {
      "Alto total": "77 cm",
      "Ancho (lado a lado)": "49 cm",
      "Fondo (frente a atrás)": "48 cm",
      "Alto de asiento": "46 cm",
      "Material asiento/respaldo": "Símil cuero",
      "Material patas": "Metal",
      Color: "Negro",
      Brazos: "Incluidos",
    },
    descripcionCorta:
      "Silla de comedor con brazos y respaldo abierto, tapizada en símil cuero negro sobre patas de metal. Cómoda, moderna y lista para combinar con el resto de la familia Cálida.",
    descripcionLarga:
      "Respaldo abierto, brazos que abrazan: comodidad con carácter. Sus brazos y respaldo abierto aligeran visualmente cualquier montaje sin renunciar al soporte. Tapizada en símil cuero negro sobre una estructura de patas en metal, combina un perfil moderno con la comodidad de tener dónde apoyar los brazos durante comidas largas. El tapizado en símil cuero es resistente y fácil de limpiar con un paño húmedo, la estructura en metal negro es estable y de bajo mantenimiento, y el diseño con brazos y respaldo abierto aporta comodidad sin verse pesada en el espacio. Hace parte de la familia Cálida: combina con la Mesa Perla, la Silla Barril y la Silla Concha en una misma paleta de hueso, camel, gris, negro y detalles dorados, permitiendo a distribuidores y tiendas ofrecer un conjunto coordinado con una sola referencia. Condiciones especiales de precio por volumen disponibles para reventa.",
  },
  {
    slug: "silla-alta",
    name: "Silla Alta",
    ref: "SL-05",
    category: "Sillas",
    detail: "Giratoria, con brazos, base beige — set x2",
    image: "/products/silla-alta.jpg",
    scene: "/products/silla-alta.jpg",
    ficha: {
      "Alto máximo": "105 cm",
      Ancho: "46 cm",
      Profundidad: "50 cm",
      "Peso (por unidad)": "6,1 kg",
      "Peso máximo soportado": "120 kg",
      "Material asiento": "Vinil piel + espuma de poliuretano, sobre estructura interna en madera de pino",
      "Material estructura": "Acero, acabado laqueado y pintura epoxi",
      Color: "Beige",
      Apoyabrazos: "Sí",
      "Rotación 360°": "Sí",
      Presentación: "Set de 2 unidades",
    },
    descripcionCorta:
      "Silla alta giratoria con brazos, asiento en vinil piel sobre estructura de madera de pino y base en acero laqueado beige. Set de 2 unidades, lista para combinar con el resto de la familia Cálida.",
    descripcionLarga:
      "Giro de 360°, brazos incluidos: la barra nunca se sintió tan cómoda. Pensada para barras de cocina y desayunadores, con asiento en vinil piel relleno de espuma de poliuretano sobre una estructura interna en madera de pino, montada sobre una base de acero con acabado laqueado en beige y pintura epoxi. Su giro de 360° y sus apoyabrazos la hacen especialmente cómoda para sesiones largas en la barra. El asiento en vinil piel es fácil de limpiar y resistente al uso diario, la base en acero con pintura epoxi resiste la corrosión, y soporta hasta 120 kg de peso. Se vende en set de 2 unidades. Cierra la familia Cálida: combina con la Mesa Perla, la Silla Barril, la Silla Concha y la Silla Abanico en una misma paleta de hueso, camel, gris, negro y detalles dorados, permitiendo a distribuidores y tiendas ofrecer la colección completa con una sola referencia. Condiciones especiales de precio por volumen disponibles para reventa.",
  },
  {
    slug: "silla-trama",
    name: "Silla Trama",
    ref: "ST-06",
    category: "Sillas",
    detail: "Tejido calado blanco, base fija en tijera",
    image: "/products/silla-trama.jpg",
    scene: "/products/silla-trama.jpg",
    ficha: {
      "Alto total": "82,5 cm",
      Largo: "45,5 cm",
      Ancho: "48 cm",
      "Profundidad de asiento": "43 cm",
      "Ancho superior de respaldo": "63,5 cm",
      "Material asiento/respaldo": "Polipropileno, tejido calado tipo cesta",
      "Material base": "Metal, acabado que simula madera",
      Color: "Blanco",
      Brazos: "Incluidos",
      Base: "Fija, 4 patas en tijera",
    },
    descripcionCorta:
      "Silla de comedor con asiento y respaldo en polipropileno tejido tipo cesta, brazos incluidos y base fija en metal con acabado madera. Ligera, resistente y lista para combinar con el resto de la familia Cálida.",
    descripcionLarga:
      "Polipropileno tejido, base en tijera: textura que se nota antes de sentarse. Su asiento y respaldo en polipropileno calado forman un patrón tejido tipo cesta, con brazos incluidos que aportan comodidad extra. La base fija de cuatro patas en tijera, en metal con acabado que simula madera, le da estabilidad y un aire cálido y natural sin dejar de ser un material de bajo mantenimiento. El polipropileno es resistente, liviano y fácil de limpiar con un paño húmedo, y soporta hasta 110 kg de peso. Hace parte de la familia Cálida: combina con la Mesa Perla, la Silla Barril, la Silla Concha, la Silla Abanico y la Silla Alta en una misma paleta de hueso, camel, gris, negro y detalles dorados, permitiendo a distribuidores y tiendas ofrecer la colección completa con una sola referencia. Condiciones especiales de precio por volumen disponibles para reventa.",
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
    description: "Barril, Concha, Abanico y Trama, en la misma paleta cálida.",
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
    description: "Silla Alta giratoria, para barras, islas y cafés.",
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
      "Sí. Los 4 tonos y los materiales de la colección fueron pensados para combinarse: puedes mezclar sillas y mesas de distintas referencias sin perder coherencia visual.",
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
