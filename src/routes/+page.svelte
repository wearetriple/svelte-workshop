<script lang="ts">
  import Pokemon from "$lib/ui/components/molecules/pokemon.svelte";
  import pokemonStore from "$lib/core/stores/pokemon";

  $: allPokemon = $pokemonStore.pokemon;
</script>

<svelte:head>
  <title>PokeApp</title>
</svelte:head>

<main class="app">
  <div class="view">
    <section class="sidebar">
      <h2>Sidebar</h2>
    </section>
    <section>
      <h1>All Pokémons</h1>

      <ul class="list">
        {#each allPokemon as pokemon}
          <Pokemon {pokemon} />
        {/each}
      </ul>
    </section>
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
    }

    .list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.5rem;
      padding: 0;
      overflow-y: auto;
      height: calc(100vh - 2rem);
    }
  }
</style>
