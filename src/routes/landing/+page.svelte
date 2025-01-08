<script>
  import { goto } from '$app/navigation';

  function goToLogin() {
    goto('/landing/login');
  }

  function goToSignup() {
    goto('/landing/signup');
  }
</script>

<div class="container w-full mx-auto">
  <div class="relative w-full h-full">
    <div class="absolute top-[15%] right-3 w-[40vw] h-[67vh] bg-[#D8F7FF] bg-opacity-50 rounded-full blur-[5rem] z-0"></div>
    <div class="absolute top-[55%] left-[1%] w-[40vw] h-[63vh] bg-[#AAF884] bg-opacity-20 rounded-full blur-[5rem] z-0"></div>

    <div class="grid grid-cols-2 z-10">
      <section class="col-span-1 relative top-[40%] left-[10%]">
        <h1 class="bg-gradient-to-r from-[#cbef97] to-[#6DA4FF] drop-shadow-md font-extrabold inline-block text-transparent 
        bg-clip-text text-8xl m-5 p-5 w-73">Taste the change</h1>
        <p class="m-3 ml-10 text-xl text-[#666666]">Embrace a greener plate. One Bite at a Time.</p>
      </section>
      <section class="col-span-1 relative top-[70%] left-[20%]">
        <p class="text-[#666666] m-3 w-96">
          Welcome to our website! Here you can find out about your CO2 food- footprint, track your diet, find new recipes and contribute to 
          a greener planet. Have fun exploring our different recipes! Lets get started
        </p>
        <button on:click={goToSignup} class="w-30 h-16 px-6 py-3 bg-white rounded-xl shadow border justify-center items-center gap-4 inline-flex ml-3 mt-5">
          <p class="w-28 h-8 text-center text-[#2d2d2d] text-2xl">Sign-up</p>
        </button>
        <button on:click={goToLogin} class="w-30 h-16 px-6 py-3 bg-[#d9fdca] rounded-xl shadow border justify-center items-center gap-4 inline-flex ml-3 mt-5">
          <p class="w-28 h-8 text-center text-[#2d2d2d] text-2xl">Login</p>
        </button>
      </section>
    </div>
  </div>  
</div>