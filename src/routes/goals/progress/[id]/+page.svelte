<script>
  export let data; // Provided by the server-side loader

  let { goalId, goalMessages, goalHistory, error } = data;
</script>

<!-- Background Effects -->
<div
  class="absolute top-1/4 right-[-6rem] w-[40vw] h-[50vh] bg-[#D9FDCA] rounded-full bg-opacity-[80%] blur-[5rem] z-[-1]"
></div>
<div
  class="absolute top-1/2 left-1/4 w-[60vw] h-[100vh] bg-[#D8F7FF] bg-opacity-70 rounded-full blur-[5rem] transform -translate-x-1/2 z-[-1]"
></div>

<!-- Page Content -->
<div class="max-w-7xl mx-auto px-18 py-8">
  <!-- Top Navigation -->
  <div class="flex items-center justify-between mb-6">
    <a href="/goals" class="text-gray-500 hover:underline">&larr; Back to Goals</a>
  </div>

  <!-- Progress Section -->
  <h2 class="text-2xl font-bold mb-4">Progress</h2>
  <p class="text-lg text-gray-700 mb-4">Your progress for the selected goal: {goalId}</p>
  <hr class="mb-6 border-gray-300" />

  <!-- Progress Bar -->
  <div class="bg-white p-6 mb-12 rounded-lg shadow-md flex flex-col md:flex-row justify-between max-w-3xl">
    <div class="w-full md:w-1/2 mb-4 md:mb-0">
      <span class="block text-gray-700 mb-2">Your progress this week</span>
      <div class="w-full bg-gray-200 rounded-full h-4 relative overflow-hidden">
        <div
          class="bg-gradient-to-r from-[#D9FDCA] to-[#57DD7B] h-4 rounded-full transition-all duration-500 ease-in-out"
          style="width: 50%;"
        ></div>
      </div>
    </div>
  </div>

  <!-- Messages Section -->
  <div class="mt-12 mb-12">
    {#if error}
      <p class="error">Error: {error}</p>
    {:else if goalMessages.length === 0}
      <p>No messages found for this goal.</p>
    {:else}
      <div class="flex flex-col space-y-6 w-1/2 mx-auto">
        {#each goalMessages as message, index}
          <div class="flex items-center">
            <img src="/src/lib/assets/green-logo.png" class="w-20 h-20" />
            <div class="border border-green-500 rounded-lg p-4 text-green-500 bg-white ml-3">
              <span>{message}</span>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>

  <!-- Goals History Section -->
  <div class="pt-12">
    <h2 class="text-2xl font-bold mb-4">Goals History</h2>
    <p class="text-lg text-gray-700 mb-4">View all the goals you've picked and their details:</p>
    <hr class="mb-6 border-gray-300" />

    <div class="w-full mx-auto md:w-3/4 mb-4 md:mb-0">
      {#if goalHistory.length > 0}
        <div class="flex flex-col space-y-6">
          {#each goalHistory as goal}
            <div class="bg-white p-7 rounded-lg shadow-md flex justify-between items-center mb-8">
              <div>
                <h3 class="text-green-400 font-bold">{goal.goal}</h3>
                <p class="text-gray-600">{goal.description}</p>
              </div>
              <p class="text-sm text-gray-500">Picked on: {new Date(goal.last_picked).toLocaleString()}</p>
            </div>
          {/each}
        </div>
      {:else}
        <p class="text-gray-500">No goals have been picked yet.</p>
      {/if}
    </div>
  </div>
</div>
