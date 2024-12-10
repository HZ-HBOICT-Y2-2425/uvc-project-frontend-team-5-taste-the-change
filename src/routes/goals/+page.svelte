<script>
    import InfoBox from "$lib/components/infoBox.svelte";
</script>

<div class="container mx-auto p-6">
    <!-- Choose Your Weekly Goals Section -->
    <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Choose Your Weekly Goals</h2>
        <div class="flex space-x-4">
            <div class="flex-grow">
                <div class="bg-white p-7 rounded-lg shadow-md flex justify-between items-center mb-8">
                    <div class="flex items-center space-x-2 ">
                        <span class="text-green-400">Try a vegetarian meal</span>
                        <div class="flex items-center space-x-1">
                            <img src="src/lib/assets/result (1) 6.png" alt="Leaf Icon" class="w-8 h-auto">
                            <span>10</span>
                        </div>
                    </div>
                    <button class="bg-white border border-green-500 text-green-500 px-4 py-1 rounded-full">Pick</button>
                </div>
                <div class="bg-white p-7 rounded-lg shadow-md flex justify-between items-center mb-8">
                    <div class="flex items-center space-x-2 ">
                        <span class="text-green-400">Have two meatless days a week</span>
                        <div class="flex items-center space-x-1">
                            <img src="src/lib/assets/result (1) 6.png" alt="Leaf Icon" class="w-8 h-auto">
                            <span>20</span>
                        </div>
                    </div>
                    <button class="bg-white border border-green-500 text-green-500 px-4 py-1 rounded-full">Pick</button>
                </div>
                <div class="bg-white p-7 rounded-lg shadow-md flex justify-between items-center">
                    <div class="flex items-center space-x-2 ">
                        <span class="text-green-400">Buy your groceries from a local shop</span>
                        <div class="flex items-center space-x-1">
                            <img src="src/lib/assets/result (1) 6.png" alt="Leaf Icon" class="w-8 h-auto">
                            <span>30</span>
                        </div>
                    </div>
                    <button class="bg-white border border-green-500 text-green-500 px-4 py-1 rounded-full">Pick</button>
                </div>
            </div>
            <img src="src/lib/assets/image 33.png" alt="Goals" class="w-1/3 h-full rounded-lg">
        </div>
        <button on:click={() => (window.location.href = '/goals/progress')}
            class="mt-4 bg-green-500 text-white px-4 py-2 rounded-full">
            View My Progress
        </button>
    </div>

    <!-- How to Use Your Leaves Section -->
    <div>
        <h2 class="text-2xl font-bold mb-4">How to Use Your Leaves?</h2>
        <div class="flex space-x-4">
            <InfoBox>
                <img slot="image" src="src/lib/assets/Frame 26.png" alt="unlock rewards" class="w-40 h-auto mx-auto mb-2">
                <p slot="description">Exchange your leaves for exciting bonuses.</p>
            </InfoBox>
            <InfoBox>
                <img slot="image" src="src/lib/assets/Frame 26 (1).png" alt="customize mascot" class="w-52 h-auto mx-auto mb-2">
                <p slot="description">Customize the mascot with fun accessories and decorations.</p>
            </InfoBox>
            <InfoBox>
                <img slot="image" src="src/lib/assets/Frame 26 (2).png" alt="show progress" class="w-52 h-auto mx-auto mb-2">
                <p slot="description">Show off progress, climb leaderboards, and challenge friends.</p>
            </InfoBox>
        </div>
    </div>
</div>