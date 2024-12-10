<script>
  import logo from '$lib/assets/logo.png';
  import healthyFood from '$lib/assets/healthyFood.png'
  import earth from '$lib/assets/earth.png'
  import person from '$lib/assets/person.png'

  import InfoBox from "$lib/components/infoBox.svelte";
  import explanationLeaf from '$lib/assets/explanationLeaf.png'
  import co2Cloud from '$lib/assets/co2Cloud.png'
  import paint from '$lib/assets/paint.png'
  import soil from '$lib/assets/soil.png'

  import detailedEarth from '$lib/assets/detailedEarth.png'
</script>

<div class="container w-full mx-auto">
  <section class="grid grid-cols-2 m-10 p-3">
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
      <button class="bg-[#76a4e9] rounded-3xl justify-center items-center gap-2.5 inline-flex p-3 m-3">
        <p class="text-white text-lg font-bold uppercase leading-tight">View recipes now</p>
      </button>
    </div>

    <div class="col-span-1 m-3">
      <div class="px-6 py-3 bg-white rounded-md h-18 max-w-56 shadow justify-center items-center gap-4 flex relative z-10 right-5 top-24">
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
      <div class="px-6 py-3 bg-white rounded-md h-18 max-w-56 shadow justify-end items-center gap-4 flex relative top-56 z-10">
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

  <section class="flex space-x-4 p-5">
    <InfoBox>
      <img
        slot="image"
        src={co2Cloud}
        alt="CO2 news updates"
        class="w-40 h-auto mx-auto mb-2"
      />
      <p slot="title" class="text-xl font-bold m-2">Co2 news updates</p>
      <p slot="description">Stay informed with the latest on global CO₂ emissions.</p>
    </InfoBox>
    <InfoBox>
      <img
        slot="image"
        src={soil}
        alt="Track your impact"
        class="w-40 h-auto mx-auto mb-2"
      />
      <p slot="title" class="text-xl font-bold m-2">Track your impact</p>
      <p slot="description">See how your food choices affect the planet with clear statistics.</p>
    </InfoBox>
    <InfoBox>
      <img
        slot="image"
        src={paint}
        alt="Customize Rabbit"
        class="w-40 h-auto mx-auto mb-2"
      />
      <p slot="title" class="text-xl font-bold m-2">Customize your rabbit</p>
      <p slot="description">Personalize your rabbit and make it uniquely yours.</p>
    </InfoBox>
    <InfoBox>
      <img
        slot="image"
        src={explanationLeaf}
        alt="Earn leaves"
        class="w-40 h-auto mx-auto mb-2"
      />
      <p slot="title" class="text-xl font-bold m-2">Earn Leaves</p>
      <p slot="description">Complete tasks, earn leaves, decorate your rabbit, and compete with friends.</p>
    </InfoBox>
  </section>

  <section class="grid grid-cols-2 m-4 p-3">
    <div class="col-span-1">
      <h3 class="text-3xl font-bold">How it helps Planet?</h3>
      <p>
        In essence, making dietary changes towards more plant-based options can play a pivotal role in mitigating climate change, 
        conserving natural resources, protecting ecosystems, and fostering a healthier planet for future generations.
      </p>
    </div>
    <div class="col-span-1 relative p-10 m-3">
      <div class="bg-[#AAF884] skew-y-12 relative left-20 w-3/4 h-80 top-8 flex justify-center items-center p-5 z-0 m-5"></div>
      <img src={detailedEarth} alt="planet earth" class="top-5 z-10 absolute right-36 scale-100">
    </div>
    

  </section>
</div>
