import { pokekemonList } from "./pokemon";

export interface pokedexList {
  count: number;
  next?: string | null;
  previus?: string | null;
  results: pokekemonList[];
}
