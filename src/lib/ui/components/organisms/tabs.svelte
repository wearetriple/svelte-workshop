<script lang="ts">
    export let items: any[] = [];
    export let pokemon: any;
    export let activeTabValue = 1;
  
    const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>
  
<ul>
    {#each items as item}
        <li class={activeTabValue === item.value ? 'active' : ''}>
            <span on:click={handleClick(item.value)} on:keypress={handleClick(item.value)}>{item.label}</span>
        </li>
    {/each}
</ul>
{#each items as item}
    {#if activeTabValue == item.value}
        <div class="box">
            <svelte:component this={item.component} pokemon={pokemon}/>
        </div>
    {/if}
{/each}

<style lang="scss">
    .box {
        margin-bottom: 10px;
        border-radius: 0 0 .5rem .5rem;
        border-top: 0;
        width: 85%;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
        width: 85%;

        li {
            width: 33%;
            text-align: center;
     
            span {
                border-bottom: .3rem solid var(--primary_midnight_opacity);
                display: block;
                padding: 1rem;
                cursor: pointer;
                font-size: 1.6rem;
                font-family: "Rubik", sans-serif;
                color: var(--silver);
            }
        }
    }

    li.active > span {
        color: #495057;
        border-bottom-color: var(--primary_purple);
        border-bottom-width: .3rem;
        opacity: 1;
        font-weight: 500;
    }
</style>