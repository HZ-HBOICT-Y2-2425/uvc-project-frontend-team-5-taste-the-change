<script>
    export let article;
  </script>
  
  <div class="article-card bg-white shadow-md rounded-lg p-4">
    <img
      src={article.imgUrl}
      alt={article.name}
      class="w-full h-40 object-cover rounded-t-lg mb-4"
    />
    <h2 class="text-lg font-bold">{article.name}</h2>
    <p class="text-gray-600">{article.info}</p>
  </div>
  
  <style>
    .article-card {
      transition: transform 0.3s, box-shadow 0.3s;
    }
  
    .article-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    }
  </style>