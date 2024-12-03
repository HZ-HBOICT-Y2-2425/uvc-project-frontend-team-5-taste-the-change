<script>
    import "../app.css";
    import background from "$lib/assets/background-rabbit.png";
    import bunny from "$lib/assets/Bunny.png";
    import RabbitName from "$lib/components/rabbitName.svelte";

    let showClothingBox = false;

    function toggleClothingBox() {
        showClothingBox = !showClothingBox;
    }
</script>

<section class="relative">
    <!-- Background Image with Gradient -->
    <div
        class="w-full h-[75vh] bg-cover bg-center"
        style="background-image: 
            linear-gradient(to bottom, #03091236, #1F334A36, #6393D736),
            linear-gradient(#05060961, #05060961),
            url({background});"
    ></div>

    <!-- Rabbit box -->
    <div
        class="absolute top-1/3 right-20 transform -translate-y-1/2 bg-dark-green rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center"
        style="width: 320px; height: 320px;">
        <img src={bunny} alt="Bunny" class="w-2/3 transform scale-x-[-1]" />
        <!-- Button with clothes hanger -->
        <button
            class="absolute top-4 right-4 bg-white text-dark-green rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-200 transition duration-300"
            on:click={toggleClothingBox}>
            <!-- <img src="/path-to-clothes-hanger-icon.svg" alt="Clothes Hanger" class="w-6 h-6" /> -->
        </button>
    </div>

    <!-- Clothing Box -->
    {#if showClothingBox}
    <div
        class="absolute top-1/3 right-[25%] transform -translate-y-1/2 bg-light-green rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center overflow-y-auto"
        style="width: 320px; height: 400px;">
        <h2 class="text-dark-green text-xl font-bold mb-4">Pick an item:</h2>
        <div class="grid grid-cols-3 gap-4">
            <div class="p-2 bg-white rounded shadow text-center">
                <!-- <img src="/path-to-item1.png" alt="Item 1" class="w-12 h-12 mx-auto mb-2" /> -->
                <p class="text-sm">Unlocked</p>
            </div>
            <div class="p-2 bg-gray-200 rounded shadow text-center">
                <!-- <img src="/path-to-item2.png" alt="Item 2" class="w-12 h-12 mx-auto mb-2 opacity-50" /> -->
                <p class="text-sm">Unlock with<br />60 leaves</p>
            </div>
            <div class="p-2 bg-gray-200 rounded shadow text-center">
                <!-- <img src="/path-to-item2.png" alt="Item 2" class="w-12 h-12 mx-auto mb-2 opacity-50" /> -->
                <p class="text-sm">Unlock with<br />70 leaves</p>
            </div>
            <div class="p-2 bg-gray-200 rounded shadow text-center">
                <!-- <img src="/path-to-item2.png" alt="Item 2" class="w-12 h-12 mx-auto mb-2 opacity-50" /> -->
                <p class="text-sm">Unlock with<br />80 leaves</p>
            </div>
            <div class="p-2 bg-gray-200 rounded shadow text-center">
                <!-- <img src="/path-to-item2.png" alt="Item 2" class="w-12 h-12 mx-auto mb-2 opacity-50" /> -->
                <p class="text-sm">Unlock with<br />90 leaves</p>
            </div>
            <div class="p-2 bg-gray-200 rounded shadow text-center">
                <!-- <img src="/path-to-item2.png" alt="Item 2" class="w-12 h-12 mx-auto mb-2 opacity-50" /> -->
                <p class="text-sm">Unlock with<br />100 leaves</p>
            </div>
            <div class="p-2 bg-gray-200 rounded shadow text-center">
                <!-- <img src="/path-to-item2.png" alt="Item 2" class="w-12 h-12 mx-auto mb-2 opacity-50" /> -->
                <p class="text-sm">Unlock with<br />110 leaves</p>
            </div>
            <div class="p-2 bg-gray-200 rounded shadow text-center">
                <!-- <img src="/path-to-item2.png" alt="Item 2" class="w-12 h-12 mx-auto mb-2 opacity-50" /> -->
                <p class="text-sm">Unlock with<br />120 leaves</p>
            </div>
            <div class="p-2 bg-gray-200 rounded shadow text-center">
                <!-- <img src="/path-to-item2.png" alt="Item 2" class="w-12 h-12 mx-auto mb-2 opacity-50" /> -->
                <p class="text-sm">Unlock with<br />130 leaves</p>
            </div>
        </div>
    </div>
    {/if}

    <!-- Pick a Name for Your Rabbit Box -->
    <RabbitName />

    <!-- Centered Text on the Left -->
    <div
        class="absolute top-1/2 left-10 transform -translate-y-1/2 text-white text-left font-poppins font-bold text-[48px] leading-[57.6px]">
        (amount) of CO2 was saved by this website
    </div>
</section>
