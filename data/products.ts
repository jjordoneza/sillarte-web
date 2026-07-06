export type Product = {
  name: string;
  category: string;
  material: string;
  colors: string[];
  use: string;
  measures: string;
  description: string;
};

export const products: Product[] = [
  {
    name: "Silla malla",
    category: "Sillas",
    material: "Patas metálicas con efecto madera y asiento en polipropileno de alta resistencia.",
    colors: ["Blanco", "Negro", "Beige"],
    use: "Restaurantes, discotecas, bares, terrazas y hogares.",
    measures: "85 cm de alto x 58 cm de ancho/profundidad.",
    description:
      "Silla moderna, resistente y versátil, ideal para espacios comerciales y hogares que buscan diseño, comodidad y durabilidad.",
  },
  {
    name: "Mesa redonda",
    category: "Mesas",
    material: "Patas de madera y tabla en polipropileno de alta resistencia.",
    colors: ["Blanco"],
    use: "Restaurantes, discotecas, bares, terrazas y hogares.",
    measures: "72 cm de alto x 80 cm de ancho.",
    description:
      "Mesa redonda funcional y limpia, pensada para complementar ambientes modernos en interiores, terrazas y espacios comerciales.",
  },
];
