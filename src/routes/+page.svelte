<script> 
    import "../app.css";
    import background from "$lib/assets/background-rabbit.png";
</script>

<section class="relative">
    <!-- Background Image with Gradient -->
    <div 
        class="w-full h-[75vh] bg-cover bg-center" 
        style="background-image: 
            linear-gradient(to bottom, #03091236, #1F334A36, #6393D736),
            url({background});">
    </div>

    <!-- Green Box on the Right Side -->
    <div 
        class="absolute top-1/2 right-10 transform -translate-y-1/2 bg-dark-green p-8 rounded-xl"
        style="width: 300px; height: 300px;">
        <!-- Content inside the green box -->
        <h2 class="text-white text-2xl font-bold">Pick a name for your rabbit</h2>
        <input type="text" placeholder="Enter name" class="mt-2 p-2 rounded border-none w-full"/>
    </div>

    <!-- Centered Text on the Left -->
    <div 
        class="absolute top-1/2 left-10 transform -translate-y-1/2 text-white text-left font-poppins font-bold text-[48px] leading-[57.6px]"
    >
        (amount) of CO2 was saved by this website
    </div>
</section>
