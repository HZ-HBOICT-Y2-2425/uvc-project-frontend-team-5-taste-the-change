<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  import { pickedGoal } from "../../stores/pickedGoalStore.js"; // Import the picked goal store
  import { displayGoal } from "../../stores/goalstore.js";
  import { countdown, resetCountdown } from "../../stores/countDownStore.js";
  import { browser } from "$app/environment";
  import { incrementLeafAmount, leafAmount } from "../../stores/leafStore.js";
  import InfoBox from "$lib/components/infoBox.svelte";
  import badge from "$lib/assets/goals/badge.png";
  import wallpaper from "$lib/assets/goals/wallpaper.png";
  import leaderboard from "$lib/assets/goals/leaderboard.png";
  import { goto } from "$app/navigation";

  function goToHome() { 
    goto("/");
  }

  function goToLeaderboard() {
    goto("/leaderboard");
  }

  export let data;
  let goals = [...data.data.goals]; // Local goals array

  let goalPicked = false; // Track if a goal has been picked

  // Reset goals when the countdown timer hits zero
  $: if ($countdown.total === 0) {
    resetGoals(); // Reset all goals
  }

  onMount(() => {
    const savedGoal = localStorage.getItem("pickedGoal");

    if (savedGoal) {
      const parsedGoal = JSON.parse(savedGoal);
      pickedGoal.set(parsedGoal); // Set the pickedGoal store

      // Synchronize the goals array with the saved picked goal
      goals = goals.map((goal) => {
        return goal.id === parsedGoal.id
          ? { ...goal, picked: true } // Mark the saved goal as picked
          : { ...goal, picked: false }; // Reset others to not picked
      });
    }
  });

  // Function to pick a goal
 async function pickGoal(id) {
   if (goalPicked) return;

   try {
     const response = await fetch(`http://localhost:3013/pick-goal/${id}`, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
     });

     if (!response.ok) {
       const errorData = await response.json();
       console.error("Error picking goal:", errorData);
       return;
     }

     const updatedGoal = await response.json();

     goals = goals.map((goal) =>
       goal.id === id ? { ...goal, picked: true, status: updatedGoal.status } : goal
     );

     goalPicked = true;
     pickedGoal.set(updatedGoal);

     localStorage.setItem("selectedGoalId", id);

     resetCountdown(); 

   } catch (error) {
     console.error("Error picking goal:", error);
     alert("An unexpected error occurred while picking the goal.");
   }
 }


  // Reset all goals when countdown timer hits zero
async function resetGoals() {
  try {
    // Reset pickedGoal and localStorage
    pickedGoal.set(null);
    goalPicked = false;

    if (browser) {
      localStorage.removeItem("pickedGoal");
    }

    // Fetch new random goals from the backend
    const response = await fetch("http://localhost:3013/random-goals"); // Adjust this to match your backend
    if (!response.ok) {
      throw new Error("Failed to fetch random goals");
    }

    const newGoals = await response.json();

    // Update the local goals array with new random goals
    goals = [...newGoals];
    console.log("Goals have been reset and refreshed:", goals);
  } catch (error) {
    console.error("Error resetting and fetching new goals:", error);
  }
}


  // Increment leaf count
  function increment() {
    leafAmount.update((n) => n + 4);
  }

  // Handle button click
  function handleClick(goalId) {
    pickGoal(goalId);
  }

  function navigateToProgress() {
    const selectedGoalId = localStorage.getItem("selectedGoalId");
    goto(`/goals/progress/${selectedGoalId}`);
 
  }

</script>

<div class="max-w-10xl container mx-auto p-6">
  <div class="mb-8">
    <h2 class="text-2xl font-bold mb-4">Choose Your Weekly Goals</h2>
    {#if $pickedGoal}
      <h2 class="text-xl font-semibold mb-2">
        Your chosen goal is: {$pickedGoal.goal}
      </h2>
      <p class="text-gray-700">
        Countdown:
        <span class="font-bold">
          {$countdown.days}d {$countdown.hours}h {$countdown.minutes}m {$countdown.seconds}s
        </span>
      </p>
      <p class="text-lg font-semibold text-gray-700 mt-4">
        You can't pick a goal anymore this week.
      </p>
    {/if}
    <div class="flex space-x-8 items-center mt-6">
      <div class="flex-grow">
        {#each goals as goal, index}
          <div
            class="bg-white p-7 rounded-lg shadow-md flex justify-between items-center mb-8"
          >
            <div>
              <h3 class="text-green-400 font-bold">{goal.goal}</h3>
              <p class="text-gray-600">{goal.description}</p>
            </div>
            <div class="pl-4">
            <button
            class="{goal.status === 'picked' 
              ? 'bg-green-500 text-white' 
              : 'bg-white border border-green-500 hover:bg-green-600 text-green-500'} 
                  px-4 py-2 rounded-full hover:text-white transition duration-300"
            on:click={() => handleClick(goal.id)}
            disabled={goal.picked || $pickedGoal}
          >
               {goal.status === 'picked' ? "Picked" : "Pick"}
          </button>
</div>
          </div>
        {/each}
      </div>
      <img src="src/lib/assets/image 33.png" alt="Goals" class="w-1/3 h-full rounded-lg" />
    </div>

    <!-- Progress Navigation Button -->
    <button
      on:click={navigateToProgress}
      class="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full"
    >
      Collect Leaves
    </button>
  
  </div>
</div>

<!-- How to Use Your Leaves Section -->
<div class="max-w-7xl container mx-auto p-6">
  <div class="mb-8">
    <h2 class="text-2xl font-bold mb-4 flex justify-center">How to Use Your Leaves?</h2>
    <div class="flex justify-center space-x-4">
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
        <div slot="title" class="text-xl font-bold m-2">
          Customize your rabbit
        </div>
        <div slot="description">
          Customize your mascot with fun accessories and decorations.
        </div>
        <button slot="button" on:click={goToHome}>Learn More</button>
      </InfoBox>
    </div>
  </div>
</div>
