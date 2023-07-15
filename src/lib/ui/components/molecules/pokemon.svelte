<script lang="ts">
  import type { Pokemon } from "$lib/core/domains/pokemon";
  import Dropdown from "./dropdown.svelte"
  import {pokemonInModal, isModalOpen} from "$lib/core/stores/stores";
  import { getFullOrderNumber } from "$lib/ui/utils/getFullOrderNumber"
  export let pokemon: Pokemon;

  let showDropdown = false;

  const toggleDropdown = () => {
    showDropdown = !showDropdown;
  }
    
  const setPokemonInModal = (order: number) => {
    let orderNumber = order;
    pokemonInModal.set(orderNumber)
    isModalOpen.set(true);
    showDropdown = false;
  }

</script>

<li class="pokemon">
  <p class="orderNumber">{getFullOrderNumber(pokemon.order)}</p>
  <img src={pokemon.sprites.frontDefault} alt={pokemon.name} class="img" />
  <div class="titleContainer">
    <h2 class="title">{pokemon.name}</h2>
    <img on:click|self={toggleDropdown} on:keydown={toggleDropdown} src="./src/assets/menu.svg" alt="expand">
  </div>
  <Dropdown id={pokemon.order} isVisible={showDropdown} setInModal={() => setPokemonInModal(pokemon.order)}/>
</li>

<style lang="scss">
  @import "../../styling/helpers.module.scss";
  .pokemon {
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-color: var(--pokemon_background_color);
    height: 27rem;
    border-radius: 1rem;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    position: relative;
    margin-bottom: 1rem;
  }
  .orderNumber {
    font-size: 1.2rem;
    padding: .4rem .8rem;
    margin: 0;
    background-color: var(--primary_purple);
    color: var(--white);
    border-radius: .6rem;
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .img {
    height: 22rem;
    width: auto;
  }
.titleContainer {
  width: 22rem;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1.5rem;
  background-color: var(--pokemon_title_background);
  border-radius: 0 0 .6rem .6rem;

  .title {
    margin: 0;
    text-transform: capitalize;
    color: var(--primary_midnight);
    font-family: "Rubik", sans-serif;
    font-weight: 500;
  }
  
  img {
    padding: .6rem;

    &:hover {
      cursor: pointer;
    }
  }
}
  
</style>
