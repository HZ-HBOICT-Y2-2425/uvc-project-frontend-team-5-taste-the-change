<script>
  import logo from '$lib/assets/logo.png';
  import healthyFood from '$lib/assets/about/healthyFood.png'
  import earth from '$lib/assets/about/earth.png'
  import person from '$lib/assets/about/person.png'

  import InfoBox from "$lib/components/infoBox.svelte";
  import explanationLeaf from '$lib/assets/about/explanationLeaf.png'
  import co2Cloud from '$lib/assets/about/co2Cloud.png'
  import paint from '$lib/assets/about/paint.png'
  import soil from '$lib/assets/about/soil.png'

  import personalBenefit from '$lib/assets/about/personalBenefit.png'
  import refresh from '$lib/assets/about/refresh.png'
  import target from '$lib/assets/about/target.png'
  import cookBook from '$lib/assets/about/cookBook.png'

  import detailedEarth from '$lib/assets/about/detailedEarth.png'

  import { goto } from '$app/navigation';

  function goToRecipes() {
    goto('/recipes');
  }
  function goToStatistics() {
    goto('/statistics');
  }
  function goToGoals() {
    goto('/goals');
  }
  function goToHome() {
    goto('/');
  }
</script>

<div class="container w-full mx-auto">
  <div class="relative w-full h-full">
    <div class="absolute top-[1%] right-16 w-[100vw] h-[87vh] bg-[#AAF884] bg-opacity-30 rounded-full blur-[5rem] z-[-1]"></div>
    <div class="absolute top-[55%] left-[1%] w-[40vw] h-[63vh] bg-[#AAF884] bg-opacity-30 rounded-full blur-[5rem] z-[-1]"></div>
    <div class="absolute top-[75%] left-[50%] w-[50vw] h-[70vh] bg-[#AAF884] bg-opacity-30 rounded-full blur-[5rem] z-[-1]"></div>
    
    <section class="grid grid-cols-2 m-10 p-3 pb-10">
      <div class="col-span-1 m-3">
        <div class="flex-col justify-start items-start inline-flex m-3 mt-44">
          <div class="justify-center items-center inline-flex">
            <h2 class="text-center text-[#2d2d2d] text-5xl font-bold">Taste</h2>
          </div>
          <h2 class="text-center text-[#fabc08] text-5xl font-bold">The Change</h2>
        </div>
      
        <p class="text-[#666666] font-normal m-3">
          Welcome to our website! Here you can find out about your CO2 food- footprint, track your diet, find new recipes and contribute to 
          a greener planet. Have fun exploring our different recipes! Lets get started
        </p>
        <button class="bg-[#76a4e9] rounded-3xl justify-center items-center gap-2.5 inline-flex p-3 m-3" on:click={goToRecipes}>
          <p class="text-white text-lg font-bold uppercase leading-tight">View recipes now</p>
        </button>
      </div>

      <div class="col-span-1 m-3">
        <div class="px-6 py-3 bg-white rounded-md h-18 max-w-56 shadow justify-center items-center gap-4 flex relative z-10 left-10 top-36">
          <img class="h-8 w-8" src={healthyFood} alt="Plant icon" />
          <div class="flex-col justify-start items-start gap-0.5 inline-flex">
            <div class="text-[#3f3f3f] text-lg font-bold leading-relaxed">Healthy food</div>
          </div>
        </div>
        <div class="px-6 py-3 bg-white rounded-md h-18 max-w-64 shadow justify-center items-center gap-4 flex relative top-96 z-10">
          <img class="h-8 w-8" src={person} alt="Plant icon" />
          <div class="flex-col justify-start items-start gap-0.5 inline-flex">
            <div class="text-[#3f3f3f] text-lg font-bold leading-relaxed">Share with friends</div>
          </div>
        </div>
        <div class="px-6 py-3 bg-white rounded-md h-18 max-w-56 shadow justify-end items-center gap-4 flex relative top-56 z-10 left-3/4">
          <img class="h-8 w-8" src={earth} alt="Plant icon" />
          <div class="flex-col justify-start items-start gap-0.5 inline-flex">
            <div class="text-[#3f3f3f] text-lg font-bold leading-relaxed">CO2 reduction</div>
          </div>
        </div>
        <div class="bg-[#aaf884] rounded-xl relative left-20 w-3/4 h-auto flex justify-center items-center p-5 z-0">
          <img src={logo} alt="Logo"/>
        </div>
      </div>
    </section>

    <section class="flex space-x-4 p-5 pt-10 pb-10">
      <InfoBox>
        <img
          slot="image"
          src={co2Cloud}
          alt="CO2 news updates"
          class="w-40 h-auto mx-auto mb-2"
        />
        <div slot="title" class="text-xl font-bold m-2">Co2 news updates</div>
        <div slot="description">Stay informed with the latest on global CO₂ emissions.</div>
        <button slot="button" on:click={goToHome}>Learn More</button>
      </InfoBox>
      <InfoBox>
        <img
          slot="image"
          src={soil}
          alt="Track your impact"
          class="w-40 h-auto mx-auto mb-2"
        />
        <div slot="title" class="text-xl font-bold m-2">Track your impact</div>
        <div slot="description">See how your food choices affect the planet with clear statistics.</div>
        <button slot="button" on:click={goToStatistics}>Learn More</button>
      </InfoBox>
      <InfoBox>
        <img
          slot="image"
          src={paint}
          alt="Customize Rabbit"
          class="w-40 h-auto mx-auto mb-2"
        />
        <div slot="title" class="text-xl font-bold m-2">Customize your rabbit</div>
        <div slot="description">Personalize your rabbit and make it uniquely yours.</div>
        <button slot="button" on:click={goToHome}>Learn More</button>
      </InfoBox>
      <InfoBox>
        <img
          slot="image"
          src={explanationLeaf}
          alt="Earn leaves"
          class="w-40 h-auto mx-auto mb-2"
        />
        <div slot="title" class="text-xl font-bold m-2">Earn Leaves</div>
        <div slot="description">Complete tasks, earn leaves, decorate your rabbit, and compete with friends.</div>
        <button slot="button" on:click={goToGoals}>Learn More</button>
      </InfoBox>
    </section>

    <section class="grid grid-cols-3 m-3 p-3 pt-10 pb-10">
      <img src={personalBenefit} alt="bowl of food" class="col-span-1 rounded-2xl">
      <div class="col-span-2 p-5">
        <h3 class="text-3xl font-bold m-7">How Can This Website Make a Difference in Your Life?</h3>

        <div class="bg-white p-4 rounded-lg shadow-md text-center m-3 grid grid-cols-6">
          <img src={refresh} alt="refresh icon" class="col-span-1">
          <div class="col-span-5">
            <h4 class="text-xl font-bold text-start">Reduce Your CO2 Footprint</h4>
            <p class="text-[#666666] text-start">Make simple changes in your diet to help fight climate change.</p>
          </div>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-md text-center m-3 grid grid-cols-6">
          <img src={target} alt="target icon" class="col-span-1">
          <div class="col-span-5">
            <h4 class="text-xl font-bold text-start">Fun and Engaging Challenges</h4>
            <p class="text-[#666666] text-start">Stay motivated with weekly goals, rewards, and a playful mascot that makes 
              sustainability enjoyable.</p>
          </div>
        </div>
        <div class="bg-white p-4 rounded-lg shadow-md text-center m-3 grid grid-cols-6">
          <img src={cookBook} alt="cookbook icon col-span-1">
          <div class="col-span-5">
            <h4 class="text-xl font-bold text-start">Delicious Eco-friendly recipes</h4>
            <p class="text-[#666666] text-start">Explore a wide range of recipes tailored to your diet, making it easy to eat 
              sustainably without compromising on taste.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="grid grid-cols-2 m-3 p-3 pt-10 pb-10">
      <div class="col-span-1 pt-12">
        <h3 class="text-3xl font-bold">How it helps our Planet?</h3>
        <p>
          In essence, making dietary changes towards more plant-based options can play a pivotal role in mitigating climate change, 
          conserving natural resources, protecting ecosystems, and fostering a healthier planet for future generations.
        </p>

        <ol class="list-decimal list-inside m-3 p-1">
          <li><strong>Reduced co2 emissions:</strong> the production of meat & dairy products are a major contributor to co2 emissions.</li>
          <li><strong>Conservation of water:</strong> animal agriculture is extremely water-intensive.</li>
          <li><strong>Efficient land use:</strong> raising animals for food requires vast amounts of land for grazing and growing feed crops. This
            can lead to deforrestation and habitat destruction. 
          </li>
          <li><strong>Enhanced food security:</strong> a plant-based diet can feed more people using the same amount of resources.</li>
          <li><strong>Biodiversity preservation:</strong> animal agriculture is one of the leading causes of species extinction, ocean dead zones 
            and loss of biodiversity. 
          </li>
        </ol>
      </div>
      <div class="col-span-1 relative p-10 m-3">
        <div class="bg-[#AAF884] skew-y-12 relative left-20 w-3/4 h-80 top-8 flex justify-center items-center p-5 z-0 m-5"></div>
        <img src={detailedEarth} alt="planet earth" class="top-5 z-10 absolute right-36 scale-100">
      </div>
    </section>
  </div>  
</div>
