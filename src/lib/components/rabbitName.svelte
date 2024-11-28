<script>
    let name = "";
    let finalName = ""; 

    function finalRabbitName() {
        finalName = name
    }
</script>



<div class="absolute top-2/3 right-20 transform -translate-y-1/2 w-80">
    <h2 class="text-white text-2xl font-bold mb-2 text-center">
        Pick a name for your rabbit
    </h2>
    <input
        bind:value={name}
        type="text"
        placeholder="Enter name"
        class="mt-2 p-2 rounded border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-green-200"
    />
    <button on:click={finalRabbitName}>submit name</button>
    <p>your chosen name is {finalName}</p>
</div>
