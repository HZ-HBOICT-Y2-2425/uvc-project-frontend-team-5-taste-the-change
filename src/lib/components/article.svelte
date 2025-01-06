<script>
  export let article;
</script>

<div class="bg-white shadow-md rounded-lg p-4 flex flex-col min-h-[360px]">
  <img
    src={article.imgUrl}
    alt={article.name}
    class="w-full h-40 object-cover rounded-t-lg mb-4"
  />
  <div class="flex flex-col justify-between flex-grow">
    <div>
      <h2 class="text-xl font-semibold mb-2">{article.name}</h2>
      <p class="text-gray-600 mb-4">{article.info}</p>
    </div>
    <a href={article.Url} class="text-blue-500 font-semibold hover:underline self-start mt-auto">
      read more &gt;
    </a>
  </div>
</div>
