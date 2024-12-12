<script context="module">
  export let data;
  console.log('Recipe in component:', data); // Log the recipe in the component

  import spaghetti from '$lib/assets/spaghetti.jpg'
</script>

<div class="container w-full mx-auto">
  <section>
    <div class="border border-spacing-1 border-gray-400 m-10 p-2 rounded-xl">
      <button class="bg-[#76a4e9] rounded-3xl justify-center items-center gap-2.5 inline-flex p-3 m-3">
        <p class="text-white text-lg font-bold uppercase leading-tight">Back to Recipes</p>
      </button>
      <section class="m-5 p-5 lg:text-center">
        <h2 class="text-5xl m-7">.</h2>
        <div class="flex justify-center items-center space-x-4">
          <div></div>
          <div>3 servings</div>
          <div>Vegetarian</div>
          <div>1.2Kg CO2</div>
        </div>
      </section>

      <section class="grid grid-cols-3">
        <div class="col-span-2 p-3 m-3">
          <p class="p-3 m-3">
            Imagine twirling your fork through perfectly cooked spaghetti, coated in a rich, homemade tomato sauce bursting with the 
            freshness of ripe tomatoes, garlic, and basil. Toss in some sautéed bell peppers, zucchini, and mushrooms for a delightful 
            medley of textures and tastes. Top it off with a sprinkle of Parmesan cheese and fresh herbs, and you’ve got a meal that’s not 
            only satisfying but also a feast for the senses. Perfect for a cozy dinner or a special occasion, this vegetarian spaghetti 
            will have everyone asking for seconds!
          </p>
          <div class="m-3 p-3">
            <h3 class="text-3xl mb-3">Instructions</h3>
            <h4 class="text-[#7eb66f] text-lg">Boil the pasta - 10 minutes</h4>
            <ul class="list-inside list-disc">
              <li>Bring a large pot of water on a rolling boil.</li>
              <li>Add 1 teaspoon of salt to the water and cook the spaghetti according to the package instructions until al dente.</li>
              <li>Drain and set aside, reserving half a cup of pasta for later use.</li>
            </ul>

            <h4 class="text-[#7eb66f] text-lg">Prepare the vegetables - 15 minutes</h4>
            <ul class="list-inside list-disc">
              <li>Heat 2 tablespoons of olive oil in a large skillet over medium heat (around 180°C / 350°F).</li>
              <li>Add minced garlic and sauté for 1–2 minutes until fragrant.</li>
              <li> Stir in zucchini, bell pepper, and mushrooms, cooking for 8–10 minutes or until tender.</li>
            </ul>

            <h4 class="text-[#7eb66f] text-lg">Make the sauce - 5 minutes</h4>
            <ul class="list-inside list-disc">
              <li>Pour in 2 cups of tomato sauce and mix well with the vegetables.</li>
              <li>Season with salt and black pepper to taste, and add a handful of fresh basil leaves.</li>
              <li>Let the sauce simmer on low heat for 5 minutes, stirring occasionally.</li>
            </ul>

            <h4 class="text-[#7eb66f] text-lg">Combine the pasta & sauce - 3 minutes</h4>
            <ul class="list-inside list-disc">
              <li>Add the cooked spaghetti to the skillet and toss to coat evenly in the sauce.</li>
              <li>If the sauce is too thick, stir in the reserved pasta water 1 tablespoon at a time until the desired consistency is achieved.</li>
            </ul>

            <h4 class="text-[#7eb66f] text-lg">Garnish and serve</h4>
            <ul class="list-inside list-disc">
              <li>Sprinkle grated Parmesan or plant-based cheese on top and garnish with fresh basil.</li>
              <li>Serve immediately while warm. Enjoy your meal!</li>
            </ul>
          </div>
        </div>
        <section class="col-span-1 p-3 m-3">
          <img src="{spaghetti}" alt="Spaghetti" class="rounded-xl border-2 m-3">
          <div class="bg-[#e2ffda] rounded-xl p-3 m-3 w-full">
            <h4 class="text-[#055d01] text-lg">Ingredients</h4>
            <ul class="list-inside list-disc">
              <li>200g spaghetti (or any pasta of your choice)</li>
              <li>2 cups tomato sauce (homemade or store-bought)</li>
              <li>2 cloves garlic, minced</li>
              <li>1 zucchini, sliced</li>
              <li>1 bell pepper, diced</li>
              <li>1 cup mushrooms, sliced</li>
              <li>2 tablespoons olive oil</li>
              <li>Fresh basil </li>
              <li>Salt and black pepper to taste</li>
              <li>Optional: Grated Parmesan or plant-based cheese</li>
            </ul>
          </div>
        </section>
      </section>
    </div>
  </section>
</div>