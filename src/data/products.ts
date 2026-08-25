// Catálogo de la colección 2026.
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
      "Diámetro tablero": "80 cm",
      "Grosor del tablero": "1,8 cm",
      "Peso de la pieza": "8,3 kg",
      "Material tablero": "Piedra sinterizada, acabado marmoleado tono hueso",
      "Material base": "Acero, pedestal único, recubrimiento en polvo negro",
      "Protección de piso": "Sí, borde plástico en la base",
      Ensamble: "Requiere ensamble, herramientas incluidas",
      "Colores disponibles": "Tablero marmoleado hueso / Base negra",
    },
    descripcionCorta:
      "Mesa redonda de pedestal con tablero marmoleado en tono hueso y base en acero negro. Compacta, resistente y lista para combinar con el resto de la familia.",
    descripcionLarga:
      'Redonda, marmoleada, de pedestal — la protagonista compacta de cualquier montaje. Una mesa de líneas limpias pensada para espacios donde cada centímetro cuenta. Su tablero de 80 cm de diámetro con acabado marmoleado en tono hueso se apoya sobre una base pedestal única en acero negro, liberando espacio y facilitando el movimiento a su alrededor. Tablero en piedra sinterizada, resistente a golpes, calor, humedad y manchas. Base en acero con recubrimiento en polvo, antióxido, con protectores de piso que evitan rayones en porcelanato o madera. Ensamble sencillo con herramientas incluidas, lista para usar en minutos.',
  },
  {
    slug: "mesa-marfil",
    name: "Mesa Marfil",
    ref: "SM-02",
    category: "Mesas",
    detail: "Tablero mármol blanco, patas negras con remates dorados",
    // Foto real de producto (fondo blanco); la escena de estudio real
    // (ambientada) se usa para el bloque inmersivo mientras no haya una
    // fotografía propia con fondo cálido de esta pieza.
    image: "/products/mesa-marfil.jpg",
    scene: "/products/mesa-marfil-escena.webp",
    galeria: ["/products/mesa-marfil-escena.webp", "/products/mesa-marfil-medidas.webp"],
    ficha: {
      Largo: "120 cm",
      Ancho: "70 cm",
      Alto: "76 cm",
      Capacidad: "6 personas",
      "Material tablero": "Piedra sinterizada, acabado mármol blanco brillante",
      "Material base": "Metal, patas cónicas negras con remates dorados",
      "Colores disponibles": "Tablero mármol blanco brillante / Base negra con remates dorados",
    },
    descripcionCorta:
      "Mesa rectangular de comedor para 6 personas, con tablero en piedra sinterizada acabado mármol blanco brillante y patas cónicas de metal negro con remates dorados. Elegante, resistente y lista para combinar con el resto de la familia.",
    descripcionLarga:
      "Rectangular, en piedra sinterizada — la mesa central para reunir a todos. Una mesa de comedor para 6 personas, con tablero en piedra sinterizada de acabado mármol blanco brillante, resistente a rayones, calor y manchas: conserva su aspecto de mármol sin los cuidados de la piedra natural. Se sostiene sobre patas cónicas metálicas en negro con remates dorados, que aligeran visualmente su presencia sin restarle estabilidad. Tamaño pensado para comedores de 6 puestos.",
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
      "/products/silla-barril-medidas.jpg",
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
      "Silla de comedor con asiento curvo y respaldo envolvente, tapizada en poliuretano acolchado sobre patas de metal. Cómoda, resistente y lista para combinar con el resto de la familia.",
    descripcionLarga:
      "Asiento curvo, respaldo envolvente: la silueta que le da nombre a su propio estilo. Su asiento ancho se curva hacia arriba en los costados, envolviendo suavemente el cuerpo, mientras el respaldo alto mantiene una postura cómoda durante comidas largas. Tapizada en poliuretano acolchado de tacto suave, resistente al uso diario y fácil de limpiar con un paño húmedo, se sostiene sobre patas de metal delgadas que aportan ligereza visual sin sacrificar estabilidad. El asiento ancho y el respaldo curvo distribuyen el peso de forma cómoda.",
  },
  {
    slug: "silla-concha",
    name: "Silla Concha",
    ref: "SC-03",
    category: "Sillas",
    detail: "Asiento en cuero negro, patas de metal",
    image: "/products/silla-concha.jpg",
    scene: "/products/silla-concha.jpg",
    galeria: ["/products/silla-concha-espalda.jpg"],
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
      "Silla de comedor de líneas limpias, asiento en cuero sobre patas de metal negro. Sobria, versátil y lista para combinar con el resto de la familia.",
    descripcionLarga:
      "Cuero y metal, en su expresión más limpia. Una silla de comedor de líneas depuradas: asiento en cuero sobre una estructura de patas en metal negro, pensada para quienes buscan un mueble sobrio que no pase de moda. Su perfil minimalista la hace igual de versátil en un comedor formal que en una barra o rincón de trabajo. El asiento en cuero es de tacto firme y fácil mantenimiento, y la estructura en metal negro es estable y resistente al uso diario, con un perfil liviano que no sobrecarga visualmente el espacio.",
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
      "Silla de comedor con brazos y respaldo abierto, tapizada en símil cuero negro sobre patas de metal. Cómoda, moderna y lista para combinar con el resto de la familia.",
    descripcionLarga:
      "Respaldo abierto, brazos que abrazan: comodidad con carácter. Sus brazos y respaldo abierto aligeran visualmente cualquier montaje sin renunciar al soporte. Tapizada en símil cuero negro sobre una estructura de patas en metal, combina un perfil moderno con la comodidad de tener dónde apoyar los brazos durante comidas largas. El tapizado en símil cuero es resistente y fácil de limpiar con un paño húmedo, la estructura en metal negro es estable y de bajo mantenimiento, y el diseño con brazos y respaldo abierto aporta comodidad sin verse pesada en el espacio.",
  },
  {
    slug: "silla-alta",
    name: "Silla Alta",
    ref: "SL-05",
    category: "Sillas",
    detail: "Giratoria, con brazos, base beige — set x2",
    image: "/products/silla-alta.jpg",
    scene: "/products/silla-alta.jpg",
    galeria: [
      "/products/silla-alta-frente.jpg",
      "/products/silla-alta-espalda.jpg",
      "/products/silla-alta-base.jpg",
    ],
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
      "Silla alta giratoria con brazos, asiento en vinil piel sobre estructura de madera de pino y base en acero laqueado beige. Set de 2 unidades, lista para combinar con el resto de la familia.",
    descripcionLarga:
      "Giro de 360°, brazos incluidos: la barra nunca se sintió tan cómoda. Pensada para barras de cocina y desayunadores, con asiento en vinil piel relleno de espuma de poliuretano sobre una estructura interna en madera de pino, montada sobre una base de acero con acabado laqueado en beige y pintura epoxi. Su giro de 360° y sus apoyabrazos la hacen especialmente cómoda para sesiones largas en la barra. El asiento en vinil piel es fácil de limpiar y resistente al uso diario, la base en acero con pintura epoxi resiste la corrosión, y soporta hasta 120 kg de peso. Se vende en set de 2 unidades.",
  },
  {
    slug: "silla-trama",
    name: "Silla Trama",
    ref: "ST-06",
    category: "Sillas",
    detail: "Tejido calado blanco, base fija en tijera",
    image: "/products/silla-trama.jpg",
    scene: "/products/silla-trama.jpg",
    galeria: [
      "/products/silla-trama-alt.jpg",
      "/products/silla-trama-perfil.jpg",
      "/products/silla-trama-rojo.jpg",
      "/products/silla-trama-verde.jpg",
      "/products/silla-trama-medidas.jpg",
    ],
    ficha: {
      "Alto total": "80 cm",
      Largo: "45,5 cm",
      Ancho: "48 cm",
      "Alto de asiento": "45 cm",
      "Profundidad de asiento": "43 cm",
      "Ancho superior de respaldo": "63,5 cm",
      "Material asiento/respaldo": "Polipropileno, tejido calado tipo cesta",
      "Material base": "Metal, acabado que simula madera",
      "Colores disponibles": "Blanco (fotografiado); también en rojo y verde",
      Brazos: "Incluidos",
      Base: "Fija, 4 patas en tijera",
      "Peso máximo soportado": "130 kg",
    },
    descripcionCorta:
      "Silla de comedor con asiento y respaldo en polipropileno tejido tipo cesta, brazos incluidos y base fija en metal con acabado madera. Ligera, resistente y lista para combinar con el resto de la familia.",
    descripcionLarga:
      "Polipropileno tejido, base en tijera: textura que se nota antes de sentarse. Su asiento y respaldo en polipropileno calado forman un patrón tejido tipo cesta, con brazos incluidos que aportan comodidad extra. La base fija de cuatro patas en tijera, en metal con acabado que simula madera, le da estabilidad y un aire cálido y natural sin dejar de ser un material de bajo mantenimiento. El polipropileno es resistente, liviano y fácil de limpiar con un paño húmedo, y soporta hasta 130 kg de peso.",
  },
];

// Categorías del segundo nivel de navegación visual.
export const categories = [
  {
    name: "Sillas",
    description: "Barril, Concha, Abanico, Trama y Alta, en la misma paleta.",
    image: "/scenes/categoria-sillas.jpg",
    href: "#destacados",
  },
  {
    name: "Mesas",
    description: "Base sólida, cubierta en piedra sinterizada.",
    image: "/scenes/categoria-mesas.jpg",
    href: "#destacados",
  },
  {
    name: "Cuadros",
    description: "Piezas religiosas para decorar con carácter.",
    image: "/scenes/categoria-cuadros.jpg",
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
    question: "¿Por qué los precios de Sillarte son más bajos?",
    answer:
      "Porque compras directo, sin intermediarios que suban el costo. Eso nos permite ofrecer diseño con acabados premium (mármol, piedra sinterizada, metal, cuero sintético) a precio de fábrica.",
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
