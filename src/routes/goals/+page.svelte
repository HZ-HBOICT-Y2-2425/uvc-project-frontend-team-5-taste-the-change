<script>
  // @ts-nocheck

  import InfoBox from "$lib/components/infoBox.svelte";
  import { displayGoal } from "../../stores/goalstore.js";

  import badge from '$lib/assets/goals/badge.png'
  import wallpaper from '$lib/assets/goals/wallpaper.png'
  import leaderboard from '$lib/assets/goals/leaderboard.png'

  import { goto } from '$app/navigation';

  function goToHome() {
    goto('/');
  }

  function goToLeaderboard() {
    goto('/leaderboard');
  }

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
      }
    } catch (error) {
      console.log("error");
    }
  }
</script>

<div class="max-w-7xl container mx-auto p-6">
  <div class="mb-8">
    <h2 class="text-2xl font-bold mb-4">Choose Your Weekly Goals</h2>
    {#if goalPicked}
      <h2>your chosen goal is: {$displayGoal.goal}</h2>
    {/if}
    <div class="flex space-x-8 items-center">
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

    <button
      on:click={() => (window.location.href = "/goals/progress")}
      class="mt-4 bg-green-500 text-white px-4 py-2 rounded-full"
    >
      View My Progress
    </button>
  </div>
</div>

<!-- How to Use Your Leaves Section -->
<div class="max-w-7xl container mx-auto p-6">
  <div class="mb-8">
    <h2 class="text-2xl font-bold mb-4">How to Use Your Leaves?</h2>
    <div class="flex space-x-4">
      <InfoBox>
        <img
          slot="image"
          src={badge}
          alt="badge"
          class="w-40 h-auto mx-auto mb-2"
        />
        <div slot="title" class="text-xl font-bold m-2">Earn Rewards</div>
        <div slot="description">Exchange your leaves for exciting bonuses.</div>
        <button slot="button" on:click={goToHome}>Learn More</button>
      </InfoBox>
      <InfoBox>
        <img
          slot="image"
          src={wallpaper}
          alt="wallpaper"
          class="w-40 h-auto mx-auto mb-2"
        />
        <div slot="title" class="text-xl font-bold m-2">Customize your rabbit</div>
        <div slot="description"> Customize your mascot with fun accessories and decorations.</div>
        <button slot="button" on:click={goToHome}>Learn More</button>
      </InfoBox>
      <InfoBox>
        <img
          slot="image"
          src={leaderboard}
          alt="leaderboard"
          class="w-40 h-auto mx-auto mb-2"
        />
        <div slot="title" class="text-xl font-bold m-2">Compete with other users</div>
        <div slot="description">Climb the leaderboard and show off your progress</div>
        <button slot="button" on:click={goToLeaderboard}>Learn More</button>
      </InfoBox>
    </div>
  </div>
</div>
