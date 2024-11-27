<script>
    import { setContext } from "svelte";
  
    // Use setContext if needed
    setContext("apiReference", {
      mainUrl: "http://localhost:3011",
    });
    // `data` is automatically passed from the `load` function in the server
    export let data;
</script>

<div class="w-3/4">
    {#if data.data.articles && data.data.articles.length > 0}
      <ul>
        {#each data.data.articles as articles}
            <p>{articles.name}</p>
            <p>{articles.info}</p>
        {/each}
      </ul>
    {:else}
      <p>No articles found</p>
    {/if}
  </div>