<script lang="ts">
    export let id = 0;
    export let isVisible = false;
    export let setInModal = () => {};
</script>

<section style={isVisible ? "display: block" : "display: none"}>
    <ul>
        <li on:click={setInModal} on:keydown={setInModal}><img src="./src/assets/expand.svg" alt="expand" />Open Pokémon</li>
        <li><img src="./src/assets/favorite.svg" alt="favorite" />Add to favorites</li>
    </ul>
</section>

<style lang="scss">
    section {
        position: absolute;
        left: -5%;
        bottom: -11.5rem;
        width: 110%;
        background-color: var(--white);
        border-radius: 1rem;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
        z-index: 1;

        ul {
            list-style: none;
            padding: 0;
            margin: 0;

            li {
                padding: 2rem;
                font-size: 1.5rem;
                font-family: "Rubik", sans-serif;
                cursor: pointer;
                transition: background-color 0.2s ease-in-out;
                border-radius: 1rem;
                display: flex;
                align-items: center;
                color: var(--primary_midnight);

                &:hover {
                    background-color: var(--offwhite);
                }

                img {
                    margin-right: 1rem;
                    height: 2rem;
                }
            }
        }
    }
</style>