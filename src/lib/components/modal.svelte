<script>
  import{ createEventDispatcher } from 'svelte'
  export let showModal;

  const dispatch = createEventDispatcher();
  
  const closeModal = () => {
    dispatch('close')
  };

  import arrow from '$lib/assets/profile/arrow.png'
  import close from '$lib/assets/profile/close.png'
</script>

{#if showModal}
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="bg-white w-2/6 p-5 rounded shadow-lg">
      <section class="p-2 flex flex-row">
        <h2 class="text-3xl font-bold">Account Settings</h2>
        <button on:click={closeModal} class="text-6xl relative left-[40%] text-black hover:text-gray-700">
          <img src={close} alt="close">
        </button>
      </section>
      <section>
        <button class="m-2 p-2 flex items-center">
          <p>Change username</p>
          <img class="left-[180%] relative" src={arrow} alt="arrow">
        </button>
        <button class="m-2 p-2 flex items-center">
          <p>Change password</p>
          <img class="left-[184%] relative" src={arrow} alt="arrow">
        </button>
        <button class="m-2 p-2 flex items-center">
          <p>Change diet goal</p>
          <img class="left-[193%] relative" src={arrow} alt="arrow">
        </button>
      </section>
      <button class="text-[#FA5252] border-[#FA5252] border-2 rounded-xl flex items-center m-2 p-2 mt-5 relative left-[25%] bg-white">
        <p class="font-bold">Log out of your account</p>
      </button>
    </div>
  </div>
{/if}
