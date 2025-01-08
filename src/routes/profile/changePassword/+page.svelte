<script>
  import { goto } from '$app/navigation';

  function goToProfile() {
    goto('/profile');
  }
</script>

<div>
  <h2 class="font-bold text-4xl absolute left-[35.5%] top-[35%]">Create your new password</h2>
  <section class="align-center h-96 w-96 p-5 absolute left-[36%] top-[45%]">
    <form>
      <label>
        New Password
        <input class="mt-2 p-2 rounded border border-gray-300 w-96 focus:outline-none focus:ring-2 focus:ring-dark-green" name="password" type="password">
      </label>
      <button on:click={goToProfile} class="mt-4 w-96 bg-dark-green text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-[#96DF77] transition-all duration-300">Confirm password change</button>
    </form>
  </section>
</div>