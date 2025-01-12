<script>
  import { setContext } from "svelte";

  setContext("apiReference", {
    mainUrl: "http://localhost:3012",
  });

  export let data;

  let selectedDiet = "";
  let co2Range = "";
  let prepTime = 30;

  /**
     * @type {string | any[]}
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
    </aside>

    <div class="w-3/4">
      <h2 class="text-sm mb-4">Recipes matching description: {filteredRecipes.length}</h2>
      <div class="grid grid-cols-3 gap-6">
        {#each filteredRecipes as recipe, index}
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden relative">
          <div class="relative">
            <img
              class="w-full h-48 object-cover"
              src={recipe.image}
              alt={recipe.name}
            />
           <span
             class="absolute top-14 translate-y-2 -left-5 w-[150%] bg-green-500 text-white px-5 py-1 text-sm font-bold transform -rotate-45 origin-top-left"
            >
              {recipe.emission_per_meal} KG CO2
            </span>
          </div>
          <div class="p-4">
            <h3 class="text-lg font-bold text-center mb-4">{recipe.name}</h3>
            <div class="flex justify-center space-x-4 text-xs text-gray-600 mb-4">
              <p class="flex items-center space-x-1">
                <span>⏱</span>
                <span>{recipe.time} min</span>
              </p>
              <p class="flex items-center space-x-1">
                <span>🍴</span>
                <span>{recipe.servings} servings</span>
              </p>
              <p class="flex items-center space-x-1">
                <span>🥗</span>
                <span>{recipe.diet}</span>
              </p>
            </div>
              <p class="text-gray-600 text-sm line-clamp-3">{recipe.description}</p>
            </div>
          <div class="p-4 flex justify-end">
            <a href={`/recipes/${recipe.id}`} class="bg-[#76A4E9] text-white px-4 py-2 rounded-full hover:bg-[#5c8cd9] transition duration-200 ease-in-out">
              View Recipe
            </a>
          </div>
        </div>
        {/each}
      </div>
    </div>
  </section>
</div>