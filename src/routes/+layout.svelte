<script>
	import '../app.css';
	import logo from '$lib/assets/rabbit-logo.png';
	import { leafAmount } from '../stores/leafStore';
	import { onMount } from 'svelte';
	import profileicon from "$lib/assets/profile.png";
	import { page } from "$app/stores"; 
	import { derived } from "svelte/store";

    import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	onMount(() => {
	 // Fetch the leaf amount when the app loads
  });
</script>

<div class="flex flex-col h-screen">
	<nav class="bg-gradient-to-r from-[#96DF77] via-[#D9FDCA] to-[#BDD4FA] flex items-center justify-between px-4 py-0.5">
	<div class="flex items-center space-x-2">
		<img src={logo} alt="Logo" class="h-14 w-14" />
		<a href="/" class="p-3 text-3xl font-sans font-bold text-[#163957] hover:text-green-600 min-w-max">
		Taste The Change
		</a>
	</div>
	<div class="flex items-center w-full justify-end">
		<ul class="flex items-center text-xl space-x-5 list-none">
		<li class="list-none"><a href="/recipes" class="text-[#163957] hover:text-green-600">Recipes</a></li>
		<li class="list-none"><a href="/goals" class="text-[#163957] hover:text-green-600">Goals</a></li>
		<li class="list-none"><a href="/statistics" class="text-[#163957] hover:text-green-600">Statistics</a></li>
		<li>
			<a href="/profile">
			<img src={profileicon} alt="profile icon" />
			</a>
		</li>
		</ul>
		<ul class="flex items-center text-xl list-none">
		<li class="list-none"><img src="src/lib/assets/result.png" alt="leaf"></li>
		<li class="list-none">{$leafAmount}</li>
		</ul>
	</div>
	</nav>

	<main class="flex-grow">
		<Breadcrumb />
		<slot />
	</main>

	<footer class="bg-gradient-to-r from-[#96DF77] via-[#D9FDCA] to-[#BDD4FA]">
		<p class="p-2 text-center">2025 | Taste the Change - V3.0</p>
	</footer>
</div>
