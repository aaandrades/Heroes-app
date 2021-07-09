import { heroes } from "../data/heroes";

export const getHeroById = (id) => {
  return heroes.filter((heroe) => heroe.id === id);
};
