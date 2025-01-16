<script>
  export let data;

  import { co2Data } from "$lib/components/co2Store.js";

  let isDone = false;

  function toggleDone() {
    if (!isDone) {
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();
      const co2Amount = data.recipe.emission_per_meal;

      co2Data.update((data) => {
        if (!data[currentYear]) {
          data[currentYear] = new Array(12).fill(0); // Initialize 12 months
        }
        data[currentYear][currentMonth] += co2Amount;
        return data;
      });
    }

    isDone = !isDone;
  }

  import { goto } from '$app/navigation';

  function goToRecipes() {
    goto("/recipes");
  }
</script>

<div class="container w-full mx-auto">
  <section>
    <div class="border border-spacing-1 border-gray-400 m-10 p-2 rounded-xl">
      <button class="bg-[#76a4e9] rounded-3xl justify-center items-center inline-flex p-3 m-3" on:click={goToRecipes}>
        <p class="text-white text-lg font-bold uppercase leading-tight">
          Back to Recipes
        </p>
      </button>
      <section class="m-5 p-5 lg:text-center">
        <h2 class="text-5xl text-black m-7">{data.recipe.name}</h2>
        <button
          class="w-[198px] h-[49px] px-6 py-3 mb-4 rounded-3xl border-2 justify-center items-center gap-2.5 inline-flex {isDone
            ? 'bg-[#7fb76f] border-[#7eb66f]'
            : 'bg-white/20 border-[#7eb66f]'}"
          on:click={toggleDone}
        >
          <div
            class="text-xl font-semibold leading-tight {isDone
              ? 'text-white font-bold'
              : 'text-[#2d2d2d]'}"
          >
            {isDone ? "Done" : "Not Done Yet"}
          </div>
        </button>
        <div class="flex justify-center items-center space-x-4">
          <div>{data.recipe.time} minutes</div>
          <div>{data.recipe.servings} portions</div>
          <div>{data.recipe.diet}</div>
          <div>{data.recipe.emission_per_meal}Kg CO2</div>
        </div>
      </section>

      <section class="grid grid-cols-3">
        <div class="col-span-2 p-3 m-3">
          <p class="p-3 m-3">
            {data.recipe.description}
          </p>
          <div class="m-3 p-3">
            <h3 class="text-3xl mb-3">Instructions</h3>
            {#if data.recipe.instructions.length > 0}
              {#each data.recipe.instructions as instruction, index}
                {#if index % 2 === 0}
                  <h4 class="text-[#7eb66f] text-lg">{instruction}</h4>
                {:else}
                  <p>{instruction}</p>
                {/if}
              {/each}
            {/if}
          </div>
        </div>
        <section class="col-span-1 p-3 m-3">
          <img
            src={data.recipe.image}
            alt="the dish"
            class="rounded-xl border-2 m-3"
          />
          <div class="bg-[#e2ffda] rounded-xl p-3 m-3 w-full">
            <h4 class="text-[#055d01] text-lg">Ingredients</h4>

            {#if data.recipe.ingredients.length > 0}
              <ul class="list-inside list-disc">
                {#each data.recipe.ingredients as ingredient}
                  <li>{ingredient}</li>
                {/each}
              </ul>
            {/if}
          </div>
        </section>
      </section>
    </div>
  </section>
</div>
