<script>
  import profilePicture from '$lib/assets/profile/profilePicture.png'
  import gear from '$lib/assets/profile/gear.png'
  import noMeat from '$lib/assets/profile/noMeat.png'
  import co2Cloud from '$lib/assets/about/co2Cloud.png'
</script>

<div class="container w-full mx-auto">
  <div class="h-full relative">
    <div class="h-25 w-25 rounded-full absolute top-[25%] z-10 bg-white p-3 left-[7.5%]">
      <img class="h-25 w-25 bg-pink-100 rounded-full p-4" src={profilePicture} alt="Profile" />
    </div>
    <section class="bg-gradient-to-r from-[#cbef97] to-[#6DA4FF] w-[100%] min-h-72 z-0">
      <h2 class="font-bold text-7xl absolute left-[30%] top-[31%]">John Doe</h2>
      <button class="text-[#94af6f] w-52 absolute top-[38%] left-[80%] border-[#94af6f] border-2 rounded-xl flex items-center m-2 p-2 pr-4 pl-4 z-10 bg-white">
        <p class="font-bold">Edit Cover Picture</p>
      </button>
    </section>
    <section class="bg-white min-h-72 z-0">
      <button class="text-[#94af6f] w-auto absolute top-[70%] left-[11%] border-[#94af6f] border-2 rounded-xl flex items-center m-2 p-2 pr-4 pl-4 z-10 bg-white">
        <p class="font-bold">Edit Profile Picture</p>
      </button>

      <div class="scale-50 rounded-full absolute top-[42%] z-10 bg-white p-3 left-[35.5%]">
        <img class="bg-[#BDD4FA] rounded-full p-4" src={noMeat} alt="no meat" />
      </div>
      <div class="bg-[#BDD4FA] absolute w-32 p-2 pt-8 text-center rounded-xl h-20 left-[35%]">
        <p class="font-bold text-white">vegetarian</p>
      </div>
  
      <div class="bg-[#BDD4FA] absolute flex items-center w-32 p-2 pl-4 rounded-xl h-20 left-[44%]">
        <p class="font-bold text-white">... CO2 saved</p>
      </div>
      <div class="bg-[#BDD4FA] absolute flex items-center w-32 p-2 pl-4 rounded-xl h-20 left-[53%]">
        <p class="font-bold text-white">... Completed goals</p>
      </div>

      <button class="text-[#94af6f] w-52 relative left-[80%] border-[#94af6f] border-2 rounded-xl flex items-center m-2 mt-4">
        <img src={gear} alt="settings">
        <p class="font-bold">Account settings</p>
      </button>
    </section>
  </div>
</div>