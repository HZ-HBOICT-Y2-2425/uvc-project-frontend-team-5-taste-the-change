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
    <div class="bg-white p-6 rounded shadow-lg">
      <button on:click={closeModal} class="float-right text-gray-500 hover:text-gray-700">&times;</button>
      <slot></slot>
    </div>
  </div>
{/if}
