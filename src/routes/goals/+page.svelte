<script>
  // @ts-nocheck

  import InfoBox from "$lib/components/infoBox.svelte";
  import { displayGoal } from "../../stores/goalstore.js";

  export let data;

  let goalPicked = false; // Track if a goal has been picked

  async function pickGoal(id, index) {
    if (goalPicked) return; // Prevent picking another goal if one is already picked

    try {
      const response = await fetch("/goals", {
        method: "POST",
        body: JSON.stringify({ id }),
      });

      const result = await response.json();
      if (response.ok) {
        data.data.goals[index].picked = true;
        goalPicked = true; // Mark that a goal has been picked
        displayGoal.set(data.data.goals.find((goal) => goal.id === id));
        console.log(displayGoal);
      }
    } catch (error) {
      console.log("error");
    }
  }
</script>

<div class="container mx-auto p-6">
  <div class="mb-8">
    <h2 class="text-2xl font-bold mb-4">Choose Your Weekly Goals</h2>
    {#if goalPicked}
      <h2>your chosen goal is: {$displayGoal.goal}</h2>
    {/if}
    <div class="flex space-x-4">
      <div class="flex-grow">
        {#if data.data.goals.length > 0}
          {#each data.data.goals as goal, index}
            <div
              class="bg-white p-7 rounded-lg shadow-md flex justify-between items-center mb-8"
            >
              <div>
                <h3 class="text-green-400 font-bold">
                  {goal.goal}
                </h3>
                <p class="text-gray-600">{goal.description}</p>
              </div>
              <button
                class="px-4 py-1 rounded-full"
                on:click={() => pickGoal(goal.id, index)}
                disabled={goal.picked || goalPicked}
                style="background-color: {goal.picked
                  ? 'red'
                  : 'green'}; color: white"
              >
                {goal.picked ? "Picked" : "Pick"}
              </button>
            </div>
          {/each}
        {:else if data.error}
          <p class="text-red-500">Error: {data.error}</p>
        {:else}
          <p>Loading goals...</p>
        {/if}
      </div>
      <img
        src="src/lib/assets/image 33.png"
        alt="Goals"
        class="w-1/3 h-full rounded-lg"
      />
    </div>
    <button class="mt-4 bg-green-500 text-white px-4 py-2 rounded-full">
      View My Progress
    </button>
  </div>
</div>

<!-- How to Use Your Leaves Section -->
<div>
  <h2 class="text-2xl font-bold mb-4">How to Use Your Leaves?</h2>
  <div class="flex space-x-4">
    <InfoBox>
      <img
        slot="image"
        src="src/lib/assets/Frame 26.png"
        alt="unlock rewards"
        class="w-40 h-auto mx-auto mb-2"
      />
      <p slot="description">Exchange your leaves for exciting bonuses.</p>
    </InfoBox>
    <InfoBox>
      <img
        slot="image"
        src="src/lib/assets/Frame 26 (1).png"
        alt="customize mascot"
        class="w-52 h-auto mx-auto mb-2"
      />
      <p slot="description">
        Customize the mascot with fun accessories and decorations.
      </p>
    </InfoBox>
    <InfoBox>
      <img
        slot="image"
        src="src/lib/assets/Frame 26 (2).png"
        alt="show progress"
        class="w-52 h-auto mx-auto mb-2"
      />
      <p slot="description">
        Show off progress, climb leaderboards, and challenge friends.
      </p>
    </InfoBox>
  </div>
</div>
