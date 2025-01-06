<script>
  import { goto } from '$app/navigation';

  function goToProfile() {
    goto('/profile');
  }
</script>

<div>
  <h2 class="font-bold text-4xl absolute left-[35%] top-[35%]">Choose your new username</h2>
  <section class="align-center h-96 w-96 p-5 absolute left-[36%] top-[45%]">
    <form>
      <label>
        New Username
        <input class="mt-2 p-2 rounded border border-gray-300 w-96 focus:outline-none focus:ring-2 focus:ring-dark-green" name="username" type="text">
      </label>
      <button on:click={goToProfile} class="mt-4 w-96 bg-dark-green text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-[#96DF77] transition-all duration-300">Confirm username change</button>
    </form>
  </section>
</div>