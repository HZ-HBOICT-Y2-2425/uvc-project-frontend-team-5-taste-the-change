<script lang="ts">
  // @ts-nocheck
  import "../app.css";
  import background from "$lib/assets/background-rabbit.png";
  import bunny from "$lib/assets/Bunny.png";
  import ClothesHanger from "$lib/assets/Hanger.png";
  import RabbitName from "$lib/components/rabbitName.svelte";
  import { displayGoal } from "../stores/goalstore";
  import { leafAmount, incrementLeafAmount } from "../stores/leafStore";
  import ClothingBox from "$lib/components/clothingBox.svelte";
  import Articles from "$lib/components/articles.svelte";

  import { goto } from "$app/navigation";

  function goToAbout() {
    goto("/about");
  }

  console.log({ $leafAmount });

  export let data;

  // Define the type for an item
  type Item = {
    id: number;
    name: string;
    imgUrl: string;
    bunnyURL: string;
  };

  let showClothingBox = false;
  let selectedItem: Item | null = null;

  let bunnyImageURL = "src/lib/assets/bunny.png";

  // Event handler for item selection
  function handleItemSelected(event: CustomEvent<Item>) {
    bunnyImageURL = event.detail;
    showClothingBox = false;
  }
</script>

<section class="relative flex w-full h-[75vh]">
  <!-- Full Background Image -->
  <div
    class="absolute inset-0 w-full h-full bg-cover bg-center z-0"
    style="background-image: linear-gradient(to bottom, #03091236, #1F334A36, #6393D736), linear-gradient(#05060961, #05060961), url({background});"
  ></div>

  <div class="relative flex flex-row w-full h-full z-10">
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
        on:click={goToAbout}
      >
        Show More About Website
      </button>

      {#if showClothingBox}
        <ClothingBox on:updateBunnyImage={handleItemSelected} />
      {/if}
    </div>

    <div class="flex flex-col justify-center items-center w-1/2 px-8">
      <div
        class="relative flex flex-col p-8 items-center justify-center bg-dark-green rounded-3xl shadow-lg"
      >
        <img
          src={bunnyImageURL}
          alt="Bunny"
          class="w-2/3 transform scale-x-[-1]"
        />
        <button
          class="absolute top-4 right-4 bg-white text-dark-green rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-200 transition duration-300"
          on:click={() => (showClothingBox = !showClothingBox)}
        >
          <img src={ClothesHanger} alt="Clothes Hanger" />
        </button>
      </div>

      <div class="mt-6">
        <RabbitName />
      </div>
    </div>
  </div>
</section>

<!-- Articles Section at the Bottom -->
<section class="w-full bg-white p-8">
  <Articles {data} />
</section>
