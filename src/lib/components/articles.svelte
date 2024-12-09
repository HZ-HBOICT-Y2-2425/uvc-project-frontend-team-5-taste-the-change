<script lang="ts">
  import { onMount } from 'svelte';
  import Article from '$lib/components/article.svelte';

  export let articlesData
  let error: string | null = null;

  const apiUrl = `http://localhost:3011/articles`;

  onMount(async () => {
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch articles: ${response.statusText}`);
      }
      const result = await response.json();
      articlesData = result.articles;
    } catch (err) {
      if (err instanceof Error) {
        error = err.message;
      } else {
        error = String(err);
      }
    } console.log(error);
  });
</script>
