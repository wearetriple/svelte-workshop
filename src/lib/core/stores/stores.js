import { writable } from "svelte/store";

export const pokemonInModal = writable(0);
export const isModalOpen = writable(false);
