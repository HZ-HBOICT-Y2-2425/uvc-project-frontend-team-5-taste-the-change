<script>
  import { setContext } from "svelte";

  // Use setContext if needed
  setContext("apiReference", {
    mainUrl: "http://localhost:3011",
  });
  // `data` is automatically passed from the `load` function in the server
  export let data;

  // variables for the filter
  let selectedDiet = "";
  let co2RangeHL = false; // Boolean for the "CO2 emmisions" checkboxes H->L
  let co2RangeLH = false; // Boolean for the "CO2 emmisions" checkboxes L->H
  let prepTime = 30;
  let onlyFavourites = false; // Boolean for the "Favourites" checkbox

  // Log the data to confirm its structure
  console.log("Data in +page.svelte:", data.data.recipes);
</script>

<div class="container w-full mx-auto">
  <section class="mb-5">
    <h2 class="text-6xl">Recipes</h2>
  </section>

  <!-- Use Flexbox for Layout -->
  <section class="flex justify-between gap-x-8">
    <!-- Filters Section -->
    <aside
      class="p-4 flex flex-col space-y-6 w-1/4 h-auto rounded-lg shadow-lg bg-gradient-to-br from-green-200 via-blue-100 to-blue-200"
    >
      <h2 class="text-4xl">
        <span class="inline-block">Filters</span>
      </h2>

      <!-- Diet Filter -->
      <div>
        <h3 class="text-2xl">Diet</h3>
        <select
          class="w-full p-2 rounded-lg border border-gray-300"
          bind:value={selectedDiet}
        >
          <option value="">Select Diet</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="pescatarian">Flexitarian</option>
          <option value="pescatarian">Pescatarian</option>
          <option value="pescatarian">Mediterranean</option>
          <option value="pescatarian">Keto</option>
        </select>
      </div>

      <!-- CO2 Emissions Filter -->
      <div>
        <h3 class="text-2xl mb-2">CO2 Emissions</h3>
        <div class="flex flex-col space-y-2">
          <label class="bg-white p-2 rounded-lg flex items-center space-x-2">
            <input
              type="checkbox"
              name="co2Range"
              value="high-to-low"
              bind:checked={co2RangeHL}
              class="w-5 h-5 rounded border-gray-300"
            />
            <span class="text-lg">High to Low</span>
          </label>
          <label class="bg-white p-2 rounded-lg flex items-center space-x-2">
            <input
              type="checkbox"
              name="co2Range"
              value="low-to-high"
              bind:checked={co2RangeLH}
              class="w-5 h-5 rounded border-gray-300"
            />
            <span class="text-lg">Low to High</span>
          </label>
        </div>
      </div>

      <!-- Preparation Time Filter -->
      <div>
        <h3 class="text-2xl mb-2">Preparation Time (min)</h3>
        <input
          type="range"
          min="10"
          max="120"
          step="5"
          bind:value={prepTime}
          class="w-full"
        />
        <p class="mt-2 text-lg">Up to: {prepTime} minutes</p>
      </div>

      <!-- Favourites Filter -->
      <div>
        <h3 class="text-2xl mb-2">Favourites</h3>
        <label class="bg-white p-2 rounded-lg flex items-center space-x-2">
          <input
            type="checkbox"
            bind:checked={onlyFavourites}
            class="w-5 h-5 rounded border-gray-300"
          />
          <span class="text-lg">Favourites ❤️</span>
        </label>
      </div>
    </aside>

    <!-- Recipes Section -->
    <div class="w-3/4">
      {#if data.data.recipes && data.data.recipes.length > 0}
        <ul>
          {#each data.data.recipes as recipe}
            <li>
              <strong>Name:</strong>
              {recipe.name}, <strong>Time:</strong>
              {recipe.time} mins
            </li>
          {/each}
        </ul>
      {:else}
        <p>No recipes found.</p>
      {/if}
    </div>
  </section>
</div>
