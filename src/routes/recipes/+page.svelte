<script>
  import { setContext } from "svelte";

  setContext("apiReference", {
    mainUrl: "http://localhost:3012",
  });

  export let data;

  let selectedDiet = "";
  let co2Range = "";
  let prepTime = 30;
  let onlyFavourites = false;

  console.log("Data in +page.svelte:", data.data.recipes);

  /**
     * @type {string | any[]}c
     * sorry for the type comments, vscode is screaming at me since it
     * forgets javascript is javascript when you do it in a .svelte page
     * that's about ittttt
     */
  let filteredRecipes = [];

  function filterRecipes() {
    filteredRecipes = data.data.recipes.filter((/** @type {{ diet: string; time: number; }} */ recipe) => {
      let matchesDiet = selectedDiet === "" || recipe.diet.toLowerCase() === selectedDiet.toLowerCase();
      let matchesPrepTime = recipe.time <= prepTime;

      return matchesDiet && matchesPrepTime;
    });

    if (co2Range === "low-to-high") {
      //ye...ignore this ts-ignore too, just vscode screaming at me
      // @ts-ignore
      filteredRecipes.sort((a, b) => a.emission_per_meal - b.emission_per_meal);
    } else if (co2Range === "high-to-low") {
      // @ts-ignore
      filteredRecipes.sort((a, b) => b.emission_per_meal - a.emission_per_meal);
    }
  }

  $: {
    filterRecipes();
  }
  
</script>

<div class="container w-full mx-auto">
  <section class="flex items-center mb-5">
    <h2 class="text-6xl">Recipes</h2>
  </section>

  <section class="flex justify-between gap-x-8">
    <aside class="p-4 flex flex-col space-y-6 w-1/4 h-fit rounded-lg shadow-lg bg-gradient-to-br from-green-200 via-blue-100 to-blue-200">
      <h2 class="text-4xl">Filters</h2>

      <div>
        <h3 class="text-2xl">Diet</h3>
        <select
          class="w-full p-2 rounded-lg border border-gray-300"
          bind:value={selectedDiet}
          on:change={filterRecipes}
        >
          <option value="">Select Diet</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="flexitarian">Flexitarian</option>
          <option value="pescatarian">Pescatarian</option>
          <option value="mediterranean">Mediterranean</option>
          <option value="keto">Keto</option>
        </select>
      </div>

      <div>
        <h3 class="text-2xl mb-2">CO2 Emissions</h3>
        <div class="flex flex-col space-y-2">
          <label class="bg-white p-2 rounded-lg flex items-center space-x-2">
            <input
              type="radio"
              name="co2Range"
              value="high-to-low"
              bind:group={co2Range}
              class="w-5 h-5 rounded border-gray-300"
              on:change={filterRecipes}
            />
            <span class="text-lg">High to Low</span>
          </label>
          <label class="bg-white p-2 rounded-lg flex items-center space-x-2">
            <input
              type="radio"
              name="co2Range"
              value="low-to-high"
              bind:group={co2Range}
              class="w-5 h-5 rounded border-gray-300"
              on:change={filterRecipes}
            />
            <span class="text-lg">Low to High</span>
          </label>
        </div>
      </div>

      <div>
        <h3 class="text-2xl mb-2">Preparation Time (min)</h3>
        <input
          type="range"
          min="10"
          max="120"
          step="5"
          bind:value={prepTime}
          class="w-full"
          on:input={filterRecipes}
        />
        <p class="mt-2 text-lg">Up to: {prepTime} minutes</p>
      </div>

      <div>
        <h3 class="text-2xl mb-2">Favourites</h3>
        <label class="bg-white p-2 rounded-lg flex items-center space-x-2">
          <input
            type="checkbox"
            bind:checked={onlyFavourites}
            class="w-5 h-5 rounded border-gray-300"
            on:change={filterRecipes}
          />
          <span class="text-lg">Favourites ❤️</span>
        </label>
      </div>
    </aside>

    <div class="w-3/4">
      <h2 class="text-3xl">Recipes matching description: {filteredRecipes.length}</h2>
      {#if filteredRecipes.length > 0}
      <ul>
        {#each filteredRecipes as recipe}
              <div class="container w-full m-5">
                <section>
                    <div class="w-[1150px] h-auto p-2">
                        <div class="bg-green-50 rounded-lg border-2 border-black h-auto mt-3 mb-3">
                            <div class="flex items-center p-3"> 
                                <img src="{recipe.image}" alt="{recipe.name}" class="h-[100px] w-auto mr-4">
                                <div>
                                    <a href={'/recipes/${recipes.slug}'}>{recipe.name}</a>
                                    <p class="text-sm">{recipe.description}</p>
                                    <p class="text-sm">{recipe.diet}</p>
                                    <p class="text-sm">{recipe.servings} Servings</p>
                                    <p class="text-sm">{recipe.emission_per_meal} Kg CO2</p>
                                    <p class="text-sm">{recipe.time} minutes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              </div>
          {/each}
        </ul>
      {:else}
        <p>No recipes found.</p>
      {/if}
    </div>
  </section>
</div>