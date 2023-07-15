<script lang="ts">
    import type { Pokemon } from "$lib/core/domains/pokemon";
    import { getFullOrderNumber } from "$lib/ui/utils/getFullOrderNumber";
  import { heightInDecimals } from "$lib/ui/utils/heightInDecimals"

    export let pokemon: Pokemon;

    console.log(pokemon.types.length)
    
</script>

<section>
    <ul>
        <li>Name</li>
        <li>ID</li>
        <li>Base</li>
        <li>Weight</li>
        <li>Height</li>
        <li>Types</li>
        <li>Abilities</li>
    </ul>
    <ul>
        <li>{pokemon.name}</li>
        <li>{getFullOrderNumber(pokemon.order)}</li>
        <li>{pokemon.base_experience} XP</li>
        <li>{pokemon.weight} kg</li>
        <li>{heightInDecimals(pokemon.height)} m</li>
        <li>
            {#each pokemon.types as type}
                {type},
            {/each}
        </li>
        <li>
            {#each pokemon.abilities as ability}
                {ability.ability.name}
            {/each}
        </li>
    </ul>
</section>

<style lang="scss">
    section {
        display: flex;
        justify-content: baseline;
        gap: 6rem;

        ul {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0;
            list-style: none;

            li {
                font-size: 1.6rem;
                font-weight: 500;
                color: var(--primary_midnight);
                padding: 1rem 0;
                text-transform: capitalize;
            }
        }

        ul:last-of-type {
            li {
                font-weight: 300;
                text-transform: none;

                &:first-of-type, &:nth-of-type(6), &:nth-of-type(7) {
                    text-transform: capitalize;
                }
            }
        }
    }
</style>