// Clientes reales que ya usan piezas de Sillarte en su negocio.
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
  {
    business: "Olympus",
    city: "Envigado, Antioquia",
    instagram: "olympusenvigado",
    image: "/clients/olympus-envigado.jpg",
  },
  {
    business: "Jardín del Cielo",
    city: "Cali, Valle del Cauca",
    instagram: "unjardindelcielo",
    image: "/clients/jardin-del-cielo.jpeg",
  },
];
