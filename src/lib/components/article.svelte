<script>
    export let article;
</script>

<div class="bg-white shadow-md p-4 w-[300px] h-[250px] flex flex-col justify-between">
    <h3 class="text-xl font-bold">{article.articlename}</h3>
    <p class="text-sm">{article.description}</p>
    <a href={article.readmore} target="_blank" class="text-blue-500 underline mt-auto">Read more</a>
</div>
