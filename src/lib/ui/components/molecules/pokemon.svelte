<script lang="ts">
  import type { Pokemon } from "$lib/core/domains/pokemon";
  export let pokemon: Pokemon;

  let showDropdown = false;
</script>

<li class="pokemon">
  <h2 class="title">{pokemon.name}</h2>
</li>

<style lang="scss">
  @import "../../styling/helpers.module.scss";
  .pokemon {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-color: var(--pokemon_background_color);
    height: 27rem;
    color: red;
  }
  .img {
    height: 20rem;
    width: auto;
  }

  .title {
    align-self: flex-end;
    text-align: center;
    background-color: var(--pokemon_title_background);
    margin: 0;
    height: 4.8rem;
    width: 100%;
    vertical-align: middle;
  }
</style>
