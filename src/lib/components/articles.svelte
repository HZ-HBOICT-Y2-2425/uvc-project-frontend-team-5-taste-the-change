<script lang="ts">
    import { onMount } from "svelte";
    import Article from "./article.svelte";
  
    export let data: {
      articles?: { id: number; name: string; imgUrl: string; info: string }[];
    };
  
    // Explicitly type variables
    let articles: { id: number; name: string; imgUrl: string; info: string }[] =
      [];
    let error: string | null = null;
  
    onMount(async () => {
      if (data.articles) {
        articles = data.articles;
      } else {
        try {
          console.log("Fetching articles from API...");
          const response = await fetch("http://localhost:3011/articles");
          const result = await response.json();
          articles = result.articles as {
            id: number;
            name: string;
            imgUrl: string;
            info: string;
          }[];
          console.log("Fetched articles:", articles);
        } catch (err) {
          console.error("Error fetching articles:", err);
          error = (err as Error).message;
        }
      }
    });
  </script>
  
  {#if articles.length > 0}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each articles as article}
        <Article {article} />
      {/each}
    </div>
  {:else if error}
    <p class="text-red-500">Error: {error}</p>
  {:else}
    <p>Loading articles...</p>
  {/if}