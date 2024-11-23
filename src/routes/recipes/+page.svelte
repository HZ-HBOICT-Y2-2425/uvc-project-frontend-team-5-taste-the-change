<script>
  let selectedDiet = "";
  let co2Range = 50;
  let prepTime = 30;
</script>

<div class="container w-full mx-auto">
  <section class="mb-5">
    <h2 class="text-6xl">Recipes</h2>
  </section>

  <!-- Use Flexbox for Layout -->
  <section class="flex justify-between gap-x-8">
    <!-- Filters Section -->
    <aside class="bg-light-green p-4 flex flex-col space-y-6 w-1/4 h-auto rounded-lg shadow-lg">
      <h2 class="text-4xl mb-4">
        <span class="inline-block p-2">Filters</span>
      </h2>

      <!-- Diet Filter -->
      <div>
        <h3 class="text-2xl mb-2">Diet</h3>
        <select 
          class="w-full p-2 rounded-lg border border-gray-300" 
          bind:value={selectedDiet}>
          <option value="">Select Diet</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="pescatarian">Pescatarian</option>
        </select>
      </div>

      <!-- CO2 Emissions Filter -->
      <div>
        <h3 class="text-2xl mb-2">CO2 Emissions (g)</h3>
        <input 
          type="range" 
          min="0" 
          max="200" 
          step="10" 
          bind:value={co2Range} 
          class="w-full">
        <p class="mt-2 text-lg">Up to: {co2Range}g</p>
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
          class="w-full">
        <p class="mt-2 text-lg">Up to: {prepTime} minutes</p>
      </div>
      
      <!-- Apply Button -->
      <button 
        class="w-full bg-dark-green text-white py-2 rounded-lg hover:bg-green-800 transition">
        Apply Filters
      </button>
    </aside>

    <!-- Recipes Section -->
    <div class="w-3/4">
      <div class="bg-green-50 rounded-lg border-2 border-black h-48 mt-3 mb-3">
        <div class="grid grid-cols-3">
          <h3 class="text-xl p-3 col-span-2">Vegetarian Spaghetti</h3>
          <p class="text-green-600 text-lg col-span-1 p-3">
            Suggestion for you
          </p>
        </div>
        <p class="text-sm w-10/12 p-3">
          Indulge in a plate of vibrant, flavourful vegetarian spaghetti! 🍝
          Imagine twirling your fork through perfectly cooked spaghetti, coated
          in a rich, homemade tomato sauce bursting with the freshness of ripe
          tomatoes, garlic, and basil. Toss in some sautéed bell peppers,
          zucchini, and mushrooms for a delightful medley of textures and
          tastes. Top it off with a sprinkle of Parmesan cheese and fresh herbs,
          and you’ve got a meal that’s not only satisfying but also a feast for
          the senses. Perfect for a cozy dinner or a special occasion, this
          vegetarian spaghetti will have everyone asking for seconds!
        </p>
      </div>

      <div class="bg-slate-50 rounded-lg border-2 border-black h-48 mt-3 mb-3">
        <div>
          <h3 class="text-xl p-3">Vegan Curry</h3>
        </div>
        <p class="text-sm w-10/12 p-3">
          Dive into a bowl of vibrant, aromatic vegan curry! 🍛 Imagine tender
          chunks of vegetables simmered in a rich, creamy coconut milk base,
          infused with the warmth of spices like turmeric, cumin, and coriander.
          Each bite is a burst of flavour, with the sweetness of carrots, the
          earthiness of potatoes, and the slight crunch of bell peppers.
          Garnished with fresh cilantro and a squeeze of lime, this curry is not
          only a feast for the taste buds but also a nourishing delight. Perfect
          for a cozy night in or impressing guests, this vegan curry will become
          a staple in your kitchen!
        </p>
      </div>
    </div>
  </section>
</div>
