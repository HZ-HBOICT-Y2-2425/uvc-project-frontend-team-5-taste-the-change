<script>
     import Goals from "$lib/components/goals.svelte";
     import InfoBox from "$lib/components/infoBox.svelte";

     export let data;
</script>

<Goals {data} />

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
