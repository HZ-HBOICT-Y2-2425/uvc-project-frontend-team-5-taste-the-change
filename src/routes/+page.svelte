<script>
    import "../app.css";
    import background from '$lib/assets/background-rabbit.png';
</script>

<div class="container w-full mx-auto">
	<section class="mt-10">
		<h2 class="text-6xl">
			<span class="inline-block">Home Page</span>
		</h2>
	</section>

    <!-- Flex container for black and green boxes -->
    <section class="mt-4 flex justify-between items-start">
        <!-- Black box with centered background image and 5px margin -->
        <div 
            class="bg-black flex items-center justify-center" 
            style="width: 630px; height: 430px;">

            <div 
                class="bg-cover bg-no-repeat" 
                style="
                    background-image: url({background});
                    background-size: contain;
                    background-position: center;
                    width: calc(100% - 10px);
                    height: calc(100% - 10px);">
            </div>
        </div>
        
        <!-- Green box with articles -->
        <div 
            class="bg-light-green p-4 flex flex-col space-y-4" 
            style="width: 330px; height: 590px;">

            <!-- White boxes - articles -->
            <div 
                class="bg-white shadow-md" 
                style="width: 300px; height: 250px;">
            </div>

            <div 
                class="bg-white shadow-md" 
                style="width: 300px; height: 250px;">
            </div>
        </div>
    </section>
</div>
