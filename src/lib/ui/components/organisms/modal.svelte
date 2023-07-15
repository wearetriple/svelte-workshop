<script lang="ts">
    import type { Pokemon } from "$lib/core/domains/pokemon";
    import { getFullOrderNumber } from "$lib/ui/utils/getFullOrderNumber"
    import { typeToColor } from "$lib/ui/utils/typeToColor"

    import Tab1 from "./singleTabs/tab1.svelte";
	import Tab2 from "./singleTabs/tab2.svelte";
	import Tab3 from "./singleTabs/tab3.svelte";
    import Tabs from "./tabs.svelte";

    export let pokemon: Pokemon;
    export let isModalOpen: boolean;
    export let closeModal: () => void;   
    
    let items = [
    { label: "About",
		 value: 1,
		 component: Tab1,
         pokemon: pokemon
		},
    { label: "Stats",
		 value: 2,
		 component: Tab2,
         pokemon: pokemon
		},
    { label: "Evolution",
		 value: 3,
		 component: Tab3,
         pokemon: pokemon
		}
  ];

</script>
{#if pokemon}
    <section style={isModalOpen ? "display: flex" : "display: none"}>
        <div class="content">
            <div class="leftInformation">
                <p class="orderNumber">{getFullOrderNumber(pokemon.order)}</p>
                <h2 class="title">{pokemon.name}</h2>
                <div class="types">
                    {#each pokemon.types as type}
                        <p style="background-color:{typeToColor(type)}">{type}</p>
                    {/each}
                </div>
                <img src={pokemon.sprites.other?.officialArtwork.frontDefault || pokemon.sprites.backDefault} alt={pokemon.name} class="img" />
            </div>
            <div class="rightInformation">
                <button on:click={closeModal}>X</button>
                <Tabs {items} pokemon={pokemon}/>
            </div>
        </div>
    </section>
{/if}


<style lang="scss">
    section {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--primary_purple_opacity);
        display: flex;
        justify-content: center;
        align-items: center;

        .content {
            width: 60%;
            max-width: 930px;
            height: 50rem;
            background-color: var(--white);
            border-radius: 1rem;
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
            margin-top: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .leftInformation {
                background-color: var(--background_color);
                height: 100%;
                width: 40%;
                border-radius: 1rem 0 0 1rem;
                display: flex;
                flex-direction: column;
                align-items: center;

                .orderNumber {
                    font-size: 2rem;
                    font-family: "Cabinet Grotesk", sans-serif;
                    color: var(--primary_midnight);
                    opacity: .5;
                    margin-top: 5rem;
                    margin-bottom: 0;
                }

                .title {
                    font-size: 4rem;
                    font-family: "Cabinet Grotesk", sans-serif;
                    color: var(--primary_midnight);
                    text-transform: capitalize;
                    padding: 0;
                    margin: 0;
                }

                .types {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 2rem;

                    p {
                        padding: .5rem 1rem;
                        border-radius: 2rem;
                        color: var(--white);
                        font-weight: 400;
                        font-size: 1.3rem;
                        text-transform: capitalize;
                        font-family: "Rubik";
                    }
                }

                img {
                    height: 25rem;
                }
            }

            .rightInformation {
                width: 60%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;

                button {
                    width: 3rem;
                    height: 3rem;
                    background-color: transparent;
                    border: none;
                    color: var(--primary_midnight);
                    font-size: 2rem;
                    font-family: "Cabinet Grotesk", sans-serif;
                    cursor: pointer;
                    margin-top: 2rem;
                    align-self: flex-end;
                    margin-right: 2rem;
                }
            }
        }
    }
</style>