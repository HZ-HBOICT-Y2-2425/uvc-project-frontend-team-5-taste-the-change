<script>
  import { goto } from '$app/navigation';

  function goToHome() {
    goto('/');
  }

  let selected = false;

  function select() {
    selected = true;
  }

  function checkIfSelected() {
    if (selected) {
      goToHome();
    }
    else alert('Please select your diet goal.');
  }

</script>

<div class="container w-full mx-auto">
  <div class="relative w-full h-full">
    <section class="pt-10 p-3 text-center">
      <h1 class="text-5xl font-bold">Choose your diet goal</h1>
      <p class="p-3">Which diet do you wish to achieve?</p>
      <button class="bg-[#76A4E9] text-white rounded-full mt-5 px-4 py-2" on:click={checkIfSelected}>Confirm diet choice</button>
    </section>
    <section class="p-10 grid grid-cols-3 gap-6">
      <button class="bg-white m-3 text-center p-3 focus:bg-[#d9fdca] rounded-2xl focus:shadow-sm focus:shadow-black" on:click={select}>
        <h3 class="text-2xl pb-2 font-bold">Vegetarian</h3>
        <p>You do not eat any meat product</p>
      </button> 
      <button class="bg-white m-3 text-center p-3 focus:bg-[#d9fdca] rounded-2xl focus:shadow-sm focus:shadow-black" on:click={select}>
        <h3 class="text-2xl pb-2 font-bold">Vegan</h3>
        <p>Your diet consist exclusively out of planed based meals, means no animal products.</p>
      </button> 
      <button class="bg-white m-3 text-center p-3 focus:bg-[#d9fdca] rounded-2xl focus:shadow-sm focus:shadow-black" on:click={select}>
        <h3 class="text-2xl pb-2 font-bold">Flexitarian</h3>
        <p>You follow mostly a meat-/fishless diet, but occasionally you eat meat and fish.</p>
      </button> 
      <button class="bg-white m-3 text-center p-3 focus:bg-[#d9fdca] rounded-2xl focus:shadow-sm focus:shadow-black" on:click={select}>
        <h3 class="text-2xl pb-2 font-bold">Pescatarian</h3>
        <p>Your diet consists of fish and no other meat.</p>
      </button> 
      <button class="bg-white m-3 text-center p-3 focus:bg-[#d9fdca] rounded-2xl focus:shadow-sm focus:shadow-black" on:click={select}>
        <h3 class="text-2xl pb-2 font-bold">Mediterranean</h3>
        <p>Your diet consist mainly on plant based products and is minimally proceeded. Proteins are gathered from leguminous plants (beans, nuts, seeds), 
          only occasionally animal products are consumed</p>
      </button> 
      <button class="bg-white m-3 text-center p-3 focus:bg-[#d9fdca] rounded-2xl focus:shadow-sm focus:shadow-black" on:click={select}>
        <h3 class="text-2xl pb-2 font-bold">Keto</h3>
        <p>You are following a high-fat and low carbohydrate dietary therapy  (medical reasons)</p>
      </button>       
    </section>
  </div>  
</div>