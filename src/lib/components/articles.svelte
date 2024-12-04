<script lang="ts">
    import { onMount } from 'svelte';
    import Article from '$lib/components/article.svelte';
  
    // Define the type of an article
    type ArticleType = {
      name: string;
      imgUrl: string;
      info: string;
    };
  
    let articles: ArticleType[] = [];
  
    const apiUrl = `http://localhost:3011/`;
  
    onMount(async () => {
      const response = await fetch(apiUrl);
      const result = await response.json();
      articles = result.articles; // Ensure the data matches the defined type
    });
  </script>
  