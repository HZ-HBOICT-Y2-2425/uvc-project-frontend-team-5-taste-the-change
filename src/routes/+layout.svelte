<script>
	import '../app.css';
	import logo from '$lib/assets/logo.png';
	import { fetchLeafAmount, leafAmount } from '../stores/leafStore';
	import { onMount } from 'svelte';

	onMount(() => {
    fetchLeafAmount(); // Fetch the leaf amount when the app loads
  });
</script>

<div class="flex flex-col h-screen">
	<nav class="bg-gradient-to-r from-[#96DF77] via-[#D9FDCA] to-[#BDD4FA] flex items-center justify-between px-4 py-3">
		<div class="flex items-center space-x-2">
			<img src={logo} alt="Logo" class="h-20 w-20" />
			<a href="/" class="p-4 text-4xl font-sans font-bold text-black hover:text-gray-500 min-w-max">
				Taste The Change
			</a>
		</div>

		<div class="flex items-center w-full justify-end">
      <!-- First List: Routes -->
      <ul class="flex text-2xl space-x-6 list-none">
        <li class="list-none"><a href="/recipes" class="text-black hover:text-gray-500">Recipes</a></li>
        <li class="list-none"><a href="/goals" class="text-black hover:text-gray-500">Goals</a></li>
        <li class="list-none"><a href="/statistics" class="text-black hover:text-gray-500">Statistics</a></li>
        <li class="list-none"><a href="/leaderboard" class="text-black hover:text-gray-500">Leaderboard</a></li>
        <li class="list-none"><a href="/profile" class="text-black hover:text-gray-500">Profile</a></li>
      </ul>
    
      <!-- Second List: Leaves Count -->
      <ul class="flex items-center text-2xl list-none">
        <li class="list-none"><img src="src/lib/assets/result (1) 6.png" alt="leaf"></li>
        <li class="list-none">{$leafAmount}</li>
      </ul>
    </div>
    
    
	</nav>

	<main class="flex-grow">
		<slot />
	</main>

	<footer class="bg-light-green">
		<p class="p-2 text-center">V2.0</p>
	</footer>
</div>
