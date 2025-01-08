<script>
  export let data; // Provided by the server-side loader

  let { goalId, pickedGoal, goalMessages, goalHistory, error } = data;

 async function handleCollect(goalId) {
  try {
    console.log('Collecting goal with ID:', goalId);
    const response = await fetch(`http://localhost:3013/goals/${goalId}/collect`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // Update pickedGoal directly and trigger reactivity
      pickedGoal = { ...pickedGoal, status: 'collected' };
      console.log('Goal successfully collected:', pickedGoal);
    } else {
      const errorData = await response.json();
      console.error('Error collecting goal:', errorData);
    }
  } catch (error) {
    console.error('Error collecting goal:', error);
  }
}


  console.log('Goal History:', goalHistory);
console.log('Selected Goal ID:', goalId);

</script>

<!-- Background Effects -->
<div
  class="absolute top-1/4 right-[-6rem] w-[40vw] h-[50vh] bg-[#D9FDCA] rounded-full bg-opacity-[80%] blur-[5rem] z-[-1]"
></div>
<div
  class="absolute top-1/2 left-1/4 w-[60vw] h-[100vh] bg-[#D8F7FF] bg-opacity-70 rounded-full blur-[5rem] transform -translate-x-1/2 z-[-1]"
></div>

<div class="max-w-7xl mx-auto px-18 py-8">
  <!-- Top Navigation -->
  <div class="flex items-center justify-between mb-6">
    <a href="/goals" class="text-gray-500 hover:underline">&larr; Back to Goals</a>
  </div>

  <!-- In Progress Section -->
 {#if pickedGoal}
  <h2 class="text-2xl text-gray-850 font-bold mb-4">In Progress</h2>
  <p class="text-lg text-gray-850 mb-4">
    For this week you have selected this goal: {pickedGoal.goal}
  </p>
  <p class="text-gray-700">{pickedGoal.description}</p>
  <div class="goal-item pt-6">
    <button
      class="{pickedGoal.status === 'collected' 
              ? 'bg-green-500 text-white' 
              : 'bg-white border border-green-500 hover:bg-green-600 text-green-500'} 
            px-4 py-2 rounded-full hover:text-white transition duration-300"
      on:click={() => handleCollect(pickedGoal.id)}
      disabled={pickedGoal.status === 'collected'}
    >
      {pickedGoal.status === 'collected' ? 'Collected' : 'Collect'}
    </button>
  </div>

  <!-- Messages Section -->
  <div class="mt-12 mb-12">
    {#if error}
      <p class="error">Error: {error}</p>
    {:else if goalMessages.length > 0}
      <div class="flex flex-col space-y-6 w-1/2 mx-auto">
        {#each goalMessages as message, index}
          {#if index % 2 === 0}
            <div class="flex items-center">
              <img src="/src/lib/assets/green-logo.png" class="w-20 h-20" />
              <div class="border border-green-500 rounded-lg p-4 text-green-500 bg-white ml-3">
                <span>{message}</span>
              </div>
            </div>
          {:else}
            <div class="flex items-center justify-end">
              <div class="border border-green-500 rounded-lg p-4 text-green-500 bg-white mr-3">
                <span>{message}</span>
              </div>
              <img src="/src/lib/assets/green-logo.png" class="w-20 h-20" />
            </div>
          {/if}
        {/each}
      </div>
    {:else}
      <p class="text-lg text-gray-700">No messages found for this goal.</p>
    {/if}
  </div>
{:else}
  <p class="text-lg text-gray-700">You can select a new goal for this week.</p>
{/if}


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
              <span class="bg-green-500 text-white px-4 py-2 rounded-full transition duration-300">
                Collected
              </span>
            </div>
          {/each}
        </div>
      {:else}
        <p class="text-gray-500">No goals have been collected yet.</p>
      {/if}
    </div>
  </div>
</div>
