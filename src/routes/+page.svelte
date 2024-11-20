<script>
    import "../app.css";
    import background from '$lib/assets/background-rabbit.png';
    import Articles from '$lib/components/articles.svelte';
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
        <div class="bg-black flex items-center justify-center w-[630px] h-[430px]">
            <div 
                class="bg-cover bg-center bg-no-repeat w-[610px] h-[410px]" 
                style="background-image: url({background});">
            </div>
        </div>
        
        <!-- Green box with articles -->
        <div class="bg-light-green p-4 flex flex-col space-y-4 w-[330px] h-[590px]">
            <h2 class="text-4xl">
                <span class="inline-block p-2">Articles</span>
            </h2>

            <!-- Dynamic Articles -->
            <Articles />
        </div>
    </section>
</div>