<script>
    import { onMount } from 'svelte';
    import { articlesarray } from '../Articles.js'; 
    import Article from './article.svelte';

    let selectedArticles = [];

    onMount(() => {
        //pick two random articles
        selectedArticles = articlesarray.sort(() => Math.random() - 0.5).slice(0, 2);
    });
</script>

<div class="flex flex-col space-y-4"> 
    {#each selectedArticles as article (article.articlename)}
        <Article {article} />
    {/each}
</div>
