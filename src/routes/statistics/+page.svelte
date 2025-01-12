<script>
  import Chart from 'chart.js/auto';
  import annotationPlugin from 'chartjs-plugin-annotation';
  import Graph from '$lib/components/graph.svelte';
</script>

<h2 class="text-5xl text-center font-semibold text-gray-800 m-3 mt-7">Statistics</h2>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
  <!-- Graph Section -->
  <section class="col-span-2 m-3 p-5 space-y-4">
    <h3 class="text-2xl font-semibold text-gray-800">Graph</h3>
    <Graph />
    <canvas id="myChart" class="w-full h-80 mx-auto"></canvas> <!-- Made graph smaller -->
  </section>

  <!-- Explanation Section -->
  <section class="col-span-1 flex flex-col space-y-6 w-full h-fit p-5">
    <h3 class="text-2xl font-semibold text-gray-800 text-center">How the Graph Was Generated</h3>
    
    <!-- First Placeholder Text Box with Rabbit Image -->
    <div class="flex items-center border border-green-500 rounded-lg p-4 text-green-500 bg-white space-x-4">
      <img src="/src/lib/assets/green-logo.png" class="w-20 h-20" alt="rabbit" />
      <p class="leading-relaxed">
        The data shown in this graph represents the emissions data for the last 30 days. It was calculated based on your daily activity tracked through the app. This includes various parameters like transportation, energy consumption, and waste generation.
      </p>
    </div>
    
    <!-- Second Placeholder Text Box with Rabbit Image Aligned to the Right -->
    <div class="flex items-center justify-between border border-green-500 rounded-lg p-4 text-green-500 bg-white space-x-4">
      <p class="leading-relaxed">
        We use an algorithm that aggregates this data and calculates the overall emissions, which is then visualized through this bar chart. This helps you understand the impact of your daily habits on the environment.
      </p>
      <img src="/src/lib/assets/green-logo.png" class="w-20 h-20" alt="rabbit" />
    </div>
    
    <!-- Third Placeholder Text Box with Rabbit Image -->
    <div class="flex items-center border border-green-500 rounded-lg p-4 text-green-500 bg-white space-x-4">
      <img src="/src/lib/assets/green-logo.png" class="w-20 h-20" alt="rabbit" />
      <p class="leading-relaxed">
        By analyzing this graph, you can identify patterns in your behavior, enabling you to make more sustainable choices in the future. The more data we gather, the more accurate and insightful the predictions will become.
      </p>
    </div>
  </section>
</div>
