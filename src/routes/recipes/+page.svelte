<!-- +page.svelte -->
<script>
  import { setContext } from 'svelte';

  // Use setContext if needed
  setContext('apiReference', {
      mainUrl: "http://localhost:3011"
  });
  // `data` is automatically passed from the `load` function in the server
  export let data;

  // Log the data to confirm its structure
  console.log('Data in +page.svelte:', data.data.recipes);
</script>

<h1>Recipes</h1>

<!-- Check if recipes exist and render them -->
{#if data.data.recipes && data.data.recipes.length > 0}
  <ul>
    {#each data.data.recipes as recipe}
      <li>
        <strong>Name:</strong> {recipe.name}, <strong>Time:</strong> {recipe.time} mins
      </li>
    {/each}
  </ul>
{:else}
  <p>No recipes found.</p>
{/if}