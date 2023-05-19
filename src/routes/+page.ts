import { getPokemonList, getPokemon } from "$lib/core/domains/pokemon";
import pokemon from "$lib/core/stores/pokemon";

export const load = async () => {
  const pokemons = await getPokemonList();

  await Promise.all([
    pokemons.map(async (entry) => {
      const response = await getPokemon(entry);
      pokemon.addPokemonToStore(response);
    }),
  ]);
};
