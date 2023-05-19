import type { Pokemon } from "./models";
import { transformPokemon, transformPokemonNames } from "./transformer";
import api from "$lib/core/services/api-pokemon";

export async function getPokemon(name: string): Promise<Pokemon> {
  const response = await api.get("pokemon/{name}", { params: { name } });
  return transformPokemon(response);
}

export async function getPokemonList(): Promise<string[]> {
  const { results } = await api.get("pokemon", {
    params: {
      limit: 20,
      offset: 0,
    },
  });

  return transformPokemonNames(results);
}
