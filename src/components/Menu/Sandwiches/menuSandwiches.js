import dinamico from "../../../assets/dinamico.jpg";
import barrosLuco from "../../../assets/barros-luco.jpg";
import italiano from "../../../assets/italiano.jpg";
import chacarero from "../../../assets/chacarero.jpg";
import aLoPobre from "../../../assets/a-lo-pobre.jpg";
import clasica from "../../../assets/clasica.jpg";

export const sandwiches = [
  {
    type: "aLoPobre",
    name: "A lo pobre",
    image: aLoPobre,
    ingredients: "Cebolla salteada, huevo frito, papas al hilo.",
    cost: 6200,
  },
  {
    type: "chacarero",
    name: "Chacarero",
    image: chacarero,
    ingredients: "Tomate, porotos verdes, aji verde, mayonesa casera.",
    cost: 5500,
  },
  {
    type: "barrosLuco",
    name: "Barros Luco",
    image: barrosLuco,
    ingredients: "Queso cheddar, queso fundido. mayonesa casera.",
    cost: 5300,
  },
  {
    type: "clasica",
    name: "Clásica",
    image: clasica,
    ingredients:
      "Lechuga, tomate, cebolla salteada, queso fundido, pepinillo, mayonesa casera.",
    cost: 6000,
  },
  {
    type: "italiano",
    name: "Italiano",
    image: italiano,
    ingredients: "Tomate, palta, mayonesa casera.",
    cost: 5500,
  },
  {
    type: "dinamico",
    name: "Dinámico",
    image: dinamico,
    ingredients: "Chucrut, salsa americana, tomate, mayonesa casera.",
    cost: 5200,
  },
];
