// Clientes reales que ya usan piezas de Sillarte en su negocio.
// NOTA: las entradas de abajo son de ejemplo (placeholder) para maquetar
// la sección mientras llegan las fotos y datos reales de cada cliente
// (nombre del negocio, ciudad y usuario de Instagram).
export type Client = {
  business: string;
  city: string;
  instagram: string;
  image: string;
};

export const clients: Client[] = [
  {
    business: "Casa del Ángel",
    city: "El Retiro, Antioquia",
    instagram: "casa_del_angel_elretiro",
    image: "/clients/casa-del-angel.jpg",
  },
  { business: "Negocio Ejemplo", city: "Bogotá", instagram: "negocio_ejemplo", image: "/clients/cliente-2.jpg" },
  { business: "Negocio Ejemplo", city: "Cali", instagram: "negocio_ejemplo", image: "/clients/cliente-3.jpg" },
];
