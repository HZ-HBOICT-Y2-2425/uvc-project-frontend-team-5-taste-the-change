<script>
    import "../app.css";
    import background from "$lib/assets/background-rabbit.png";
    import bunny from "$lib/assets/Bunny.png";
    import RabbitName from "$lib/components/rabbitName.svelte";
</script>

<section class="relative">
    <!-- Background Image with Gradient -->
    <div
        class="w-full h-[75vh] bg-cover bg-center"
        style="background-image: 
            linear-gradient(to bottom, #03091236, #1F334A36, #6393D736),
            linear-gradient(#05060961, #05060961),
            url({background});"
    ></div>
    <!-- Rabbit box -->
    <div
        class="absolute top-1/3 right-20 transform -translate-y-1/2 bg-dark-green rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center"
        style="width: 320px; height: 320px;">
        <img src={bunny} alt="Bunny" class="w-2/3 transform scale-x-[-1]"/>
    </div>

    <!-- Pick a Name for Your Rabbit Box -->
    <RabbitName />

    <!-- Centered Text on the Left -->
    <div
        class="absolute top-1/2 left-10 transform -translate-y-1/2 text-white text-left font-poppins font-bold text-[48px] leading-[57.6px]">
         (amount) of CO2 was saved by this website
    </div>
</section>