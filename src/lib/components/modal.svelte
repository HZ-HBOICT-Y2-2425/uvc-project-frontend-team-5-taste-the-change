<script>
  import{ createEventDispatcher } from 'svelte'
  export let showModal;

  const dispatch = createEventDispatcher();
  
  const closeModal = () => {
    dispatch('close')
  };
</script>

{#if showModal}
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="bg-pink-100 p-6 rounded shadow-lg">
      <section class="grid grid-cols-4 p-2">
        <h2 class="text-2xl font-bold col-span-3">Account settings</h2>
        <button on:click={closeModal} class="text-6xl col-span-1 text-black hover:text-gray-700">&times;</button>
      </section>
      
      
    </div>
  </div>
{/if}
