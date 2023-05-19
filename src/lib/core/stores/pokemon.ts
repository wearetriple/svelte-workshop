import { writable } from "svelte/store";
import type { Pokemon } from "$lib/core/domains/pokemon";

type PokemonStore = {
  loading: boolean;
  pokemon: Pokemon[];
};

function createPokemonStore() {
  const { update, subscribe } = writable<PokemonStore>({
    loading: false,
    pokemon: [],
  });

  function addPokemonToStore(pokemon: Pokemon) {
    update((prev) => {
      const currentPokemonIndex = prev.pokemon.findIndex((obj) => {
        return obj.id === pokemon.id;
      });

      const newPokemonArray = prev.pokemon;

      const index =
        currentPokemonIndex < 0 ? newPokemonArray.length : currentPokemonIndex;
      newPokemonArray[index] = pokemon;

      return {
        loading: prev.loading,
        pokemon: newPokemonArray,
      };
    });
  }

  return {
    subscribe,
    addPokemonToStore,
  };
}

const pokemon = createPokemonStore();

export default pokemon;
