<script lang="ts">
    import "../app.css";
    import background from "$lib/assets/background-rabbit.png";
    import bunny from "$lib/assets/Bunny.png";
    import ClothesHanger from "$lib/assets/Hanger.png";
    import RabbitName from "$lib/components/rabbitName.svelte";
    import ClothingBox from "$lib/components/clothingBox.svelte";

    // Define the type for an item
    type Item = {
        id: number;
        name: string;
        imgUrl: string;
        bunnyURL: string;
    };

    let showClothingBox = false;
    let selectedItem: Item | null = null;

    // Event handler for item selection
    function handleItemSelected(event: CustomEvent<Item>) {
        selectedItem = event.detail;
        showClothingBox = false;
    }
</script>

<section class="relative flex w-full h-[75vh]">
    <!-- Full Background Image -->
    <div
        class="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style="background-image: 
            linear-gradient(to bottom, #03091236, #1F334A36, #6393D736),
            linear-gradient(#05060961, #05060961),
            url({background});"
    ></div>

    <!-- Overlay for Header Content -->
    <div class="relative flex flex-row w-full h-full z-10">
        <!-- Column 1: CO2 Saving Stats -->
        <div class="flex flex-col justify-center items-center w-1/2 px-8">
            <div
                class="text-[#aaf884] text-[96px] font-bold font-nunito leading-[115.2px]"
            >
                33.6 kg
            </div>
            <div
                class="text-[#fdfeff] text-[40px] font-bold font-nunito leading-[57.6px]"
            >
                Of CO2 was saved <br /> by this website
            </div>
            <button
                class="mt-6 px-[43px] py-[17px] bg-[#76a4e9] text-white text-[20px] font-extrabold font-nunito uppercase rounded-[38px] hover:bg-blue-500 transition duration-300"
            >
                Show More About Website
            </button>
            
            <!-- Show Clothing Box here when button is clicked -->
            {#if showClothingBox}
                <ClothingBox on:itemSelected={handleItemSelected} />
            {/if}
        </div>

        <!-- Column 2: Rabbit Box and Name -->
        <div class="flex flex-col justify-center items-center w-1/2 px-8">
            <!-- Rabbit box -->
            <div
                class="relative flex flex-col p-8 items-center justify-center bg-dark-green rounded-3xl shadow-lg"
            >
                <!-- Show selected item or default bunny -->
                <img
                    src={selectedItem ? selectedItem.bunnyURL : bunny}
                    alt="Bunny"
                    class="w-2/3 transform scale-x-[-1]"
                />
                <!-- Button with clothes hanger -->
                <button
                    class="absolute top-4 right-4 bg-white text-dark-green rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-200 transition duration-300"
                    on:click={() => (showClothingBox = !showClothingBox)}
                >
                    <img src={ClothesHanger} alt="Clothes Hanger" />
                </button>
            </div>

            <!-- Pick a Name for Your Rabbit -->
            <div class="mt-6">
                <RabbitName />
            </div>
        </div>
    </div>
</section>
