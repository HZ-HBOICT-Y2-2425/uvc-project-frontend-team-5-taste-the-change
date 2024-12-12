<script>
  import placeholderGraph from '$lib/assets/placeholderGraph.png'
</script>

<div>
  <h2 class="text-5xl text-center m-3 mt-7">Statistics</h2>
  <div class="grid grid-cols-3">
    <section class="col-span-2 m-3 p-3">
      <img src={placeholderGraph} alt="placeholder graph" class="m-3 items-center relative top-20 scale-110">
    </section>
    <section class="col-span-1 flex flex-col space-y-6 w-5/6 h-fit rounded-lg shadow-lg bg-gradient-to-br from-green-200 via-blue-100 to-blue-200 p-3">
      <h3 class="text-2xl text-center m-3">Other statistics</h3>
      <button class="text-center m-3 bg-white rounded-xl p-5">
        <p>Weekly emissions</p>
      </button>
      <button class="text-center m-3 bg-white rounded-xl p-5">
        <p>Monthly pie chart</p>
      </button>
      <button class="text-center m-3 bg-white rounded-xl p-5">
        <p>Compared to friends</p>
      </button>
      <button class="text-center m-3 bg-white rounded-xl p-5">
        <p>Awards</p>
      </button>
    </section>
  </div>
</div>