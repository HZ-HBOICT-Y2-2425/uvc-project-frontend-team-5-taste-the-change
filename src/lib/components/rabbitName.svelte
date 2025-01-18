<script>
    import { bunnyName } from "../../stores/bunnyNameStore";

    let name = "";
    let finalName = ""; 

    function finalRabbitName() {
      bunnyName.set(name)
    }
</script>

<div class="absolute top-3/4 right-20 transform -translate-y-2/4 w-80">
    <h2 class="text-white text-2xl font-bold mb-2 text-center">
        Pick a name for your rabbit
    </h2>
    <input
        bind:value={name}
        type="text"
        placeholder="Enter name"
        class="mt-2 p-2 rounded border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-dark-green"
    />
    <button 
    class="mt-4 w-full bg-dark-green text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-[#96DF77] transition-all duration-300"
    on:click={finalRabbitName}>
    Submit Name
</button>
<p class="mt-4 text-white text-lg font-semibold text-center">
    {#if $bunnyName}
        Your chosen name is: <span class="text-green-300">{$bunnyName}</span>
    {/if}
</p>
</div>
