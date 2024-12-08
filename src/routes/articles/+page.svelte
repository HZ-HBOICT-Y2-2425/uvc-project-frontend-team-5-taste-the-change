<script>
    import { setContext } from "svelte";
  
    // Use setContext if needed
    setContext("apiReference", {
      mainUrl: "http://localhost:3011/articles",
    });
    // `data` is automatically passed from the `load` function in the server
    export let data;
  
    let currentIndex = 0;
  
    // Function to navigate articles
    // @ts-ignore
    function navigateArticles(direction) {
      const totalArticles = data.data.articles.length;
      if (direction === "prev") {
        currentIndex = (currentIndex - 1 + totalArticles) % totalArticles;
      } else if (direction === "next") {
        currentIndex = (currentIndex + 1) % totalArticles;
      }
    }
  </script>
  
  <div class="w-3/4 mx-auto mt-10">
    <h2 class="text-3xl font-bold text-center mb-8">Articles</h2>
  
    {#if data.data.articles && data.data.articles.length > 0}
      <div class="flex items-center">
        <!-- Left Navigation Button -->
        <button
          class="p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition"
          on:click={() => navigateArticles("prev")}
        >
          &#x2039; <!-- Left arrow -->
        </button>
  
        <!-- Articles -->
        <div class="flex flex-row gap-4 overflow-hidden">
            {#each data.data.articles.slice(currentIndex, currentIndex + 2) as article, index (article.id || index)}
              <div
                class="flex-none w-1/2 bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={article.imgUrl}
                  alt={article.name}

                  class="w-full h-48 object-cover"
                />
                <div class="p-4">
                  <h3 class="text-xl font-bold mb-2">{article.name}</h3>
                  <p class="text-sm text-gray-600">{article.info}</p>
                </div>
              </div>
            {/each}
          </div>
  
        <!-- Right Navigation Button -->
        <button
          class="p-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition"
          on:click={() => navigateArticles("next")}
        >
          &#x203A; <!-- Right arrow -->
        </button>
      </div>
    {:else}
      <p class="text-center text-gray-500">No articles found</p>
    {/if}
  </div>
  
  <style>
    /* For smoother scrolling of cards */
    .flex-row {
      transition: transform 0.3s ease-in-out;
    }
  </style>
  