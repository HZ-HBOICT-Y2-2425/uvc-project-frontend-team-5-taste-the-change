<script lang="ts">
  import { onMount } from "svelte";
  import Article from "./article.svelte";
  import previous from "$lib/assets/back-arrow.png";
  import next from "$lib/assets/forward-arrow.png";

  export let data: {
    articles?: { id: number; name: string; imgUrl: string; info: string }[];
  };

  let articles: { id: number; name: string; imgUrl: string; info: string }[] =
    [];
  let visibleArticles: {
    id: number;
    name: string;
    imgUrl: string;
    info: string;
  }[] = [];
  let error: string | null = null;
  let currentIndex = 0;

  const ITEMS_PER_PAGE = 3;

  onMount(async () => {
    if (data.articles) {
      articles = data.articles;
      updateVisibleArticles();
    } else {
      try {
        const response = await fetch("http://localhost:3011/articles");
        const result = await response.json();
        articles = result.articles as {
          id: number;
          name: string;
          imgUrl: string;
          info: string;
        }[];
        updateVisibleArticles();
      } catch (err) {
        error = (err as Error).message;
      }
    }
  });

  function updateVisibleArticles() {
    visibleArticles = [];
    for (let i = 0; i < ITEMS_PER_PAGE; i++) {
      const index = (currentIndex + i) % articles.length;
      visibleArticles.push(articles[index]);
    }
  }

  function nextArticles() {
    currentIndex = (currentIndex + ITEMS_PER_PAGE) % articles.length;
    updateVisibleArticles();
  }

  function prevArticles() {
    currentIndex =
      (currentIndex - ITEMS_PER_PAGE + articles.length) % articles.length;
    updateVisibleArticles();
  }
</script>

{#if visibleArticles.length > 0}
  <div class="flex items-center space-x-4">
    <!-- Back Button -->
    <button on:click={prevArticles}>
      <img src={previous} alt="Previous" class="w-6 h-6" />
    </button>

    <!-- Articles -->
    <div class="flex space-x-6 p-4 flex-grow">
      {#each visibleArticles as article}
        <div class="relative">
          <Article {article} />
        </div>
      {/each}
    </div>

    <!-- Next Button -->
    <button on:click={nextArticles}>
      <img src={next} alt="Next" class="w-6 h-6" />
    </button>
  </div>
{:else if error}
  <p class="text-red-500">Error: {error}</p>
{:else}
  <p>Loading articles...</p>
{/if}
