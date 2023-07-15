<script lang="ts">
  import Pokemon from "$lib/ui/components/molecules/pokemon.svelte";
  import pokemonStore from "$lib/core/stores/pokemon";
  import Pokeball from "./../assets/pokeball.svelte";
  import Modal from "$lib/ui/components/organisms/modal.svelte";
  import {pokemonInModal, isModalOpen} from "$lib/core/stores/stores";

  $: allPokemon = $pokemonStore.pokemon;

  let orderNumber: number;
  let openingModal: boolean = false;

  pokemonInModal.subscribe(value => {
    orderNumber = value;
  })

  isModalOpen.subscribe(value => {
    openingModal = value;
  })

  $: currentModalPokemon = $pokemonStore.pokemon.find(pokemon => pokemon.order === orderNumber) || allPokemon[0];

  const closeModal = () => {
    isModalOpen.set(false);
  }
  
</script>

<svelte:head>
  <title>PokeApp</title>
</svelte:head>

<main class="app">
  <div class="view">
    <section class="sidebar">
      <section>
      <img src="./src/assets/logo.png" alt="pokemon logo">
      <input type="text" placeholder="Search" />
      <ul>
        <li class="active">
          <Pokeball/>
          <p>Pokémon</p>
        </li>
        <li>
          <img src="./src/assets/favorite.svg" alt="favorite">
          <p>Favorite</p>
        </li>
      </ul>
      </section>
      <section>
        <p>
          Copyright © 2022 Triple. All rights reserved.<br><br>
          Pokémon and Pokémon character names are trademarks of Nintendo.
        </p>
      </section>
    </section>
    <section>
      <h1>All Pokémon</h1>

      <ul class="list">
        {#each allPokemon as pokemon}
          <Pokemon {pokemon} />
        {/each}
      </ul>
    </section>
    <Modal pokemon={currentModalPokemon} isModalOpen={openingModal} closeModal={closeModal} />
  </div>
</main>

<style lang="scss">
  .view {
    display: grid;
    grid-template-columns: 32rem 1fr;
    gap: 1rem;
    padding: 0 1rem;

    .sidebar {
      width: 100%;
      height: calc(100vh - 4rem);
      border-radius: 1rem;
      background-color: var(--sidebar_background_color);
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);

      section {
        width: 80%;
        margin: 0 auto;
      }
      section:first-of-type {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 5rem;

        input {
          width: 100%;
          margin-top: 5rem;
          padding: 1rem 2rem;
          border-radius: 1rem;
          height: 4rem;
          border: none;
          background-color: var(--offwhite);
          position: relative;
          box-sizing: border-box;
          &:before {
            content: "<img src='./src/assets/search.svg' alt='search'>";
            position: absolute;
            top: 0;
            left: 0;
            width: 10rem;
            height: 22rem;
            color: red;
          }
        }

      ul {
        width: 100%;
        margin-top: 5rem;
        padding: 0;

        li {
          width: 100%;
          display: flex;
          align-items: center;
          padding: 0 2rem;
          border-radius: 1rem;
          cursor: pointer;
          box-sizing: border-box;
          margin-bottom: 2rem;

          img {
            width: 2rem;
            height: 2rem;
            margin-right: 1rem;
          }

          p {
            font-size: 1.6rem;
            color: var(--primary_midnight);
            font-family: "Rubik", sans-serif;
          }
        }
        .active {
          background-color: var(--primary_purple);
          p {
            color: var(--white)
          }
        }
      }
      }
    }

    .list {
      display: grid;
      grid-template-columns: repeat( auto-fit, minmax(24rem, 1fr) );
      gap: 0.5rem;
      overflow-y: auto;
      height: calc(100vh - 4rem);
      padding-top: .6rem;
    }

    section {
      h1 {
        font-size: 3rem;
        color: var(--primary_midnight);
        font-family: "Cabinet Grotesk", sans-serif;
        margin-left: 4rem;
        margin-top: 4rem;
      }
    }
  }
</style>
