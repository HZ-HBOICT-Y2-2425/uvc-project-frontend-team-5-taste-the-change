<script>
	import "../app.css";
	import logo from "$lib/assets/logo.png";
	import profileicon from "$lib/assets/profile.png";
	import { page } from "$app/stores"; 
	import { derived } from "svelte/store";

    import Breadcrumb from '$lib/components/Breadcrumb.svelte';
</script>

<div class="flex flex-col h-screen">
	<nav
		class="bg-gradient-to-r from-[#96DF77] via-[#D9FDCA] to-[#BDD4FA] flex items-center justify-between px-4 py-1.5"
	>
		<div class="flex items-center space-x-2">
			<img src={logo} alt="Logo" class="h-17 w-14" />
			<a href="/" class="p-4 text-4xl font-sans font-bold text-white">
				Taste The Change
			</a>
		</div>

		<ul class="flex text-2xl space-x-6 list-none items-center">
			<li>
				<a href="/recipes" class="text-black">Recipes</a>
			</li>
			<li>
				<a href="/goals" class="text-black">Goals</a>
			</li>
			<li>
				<a href="/statistics" class="text-black">Statistics</a>
			</li>
			<li>
				<a href="/leaderboard" class="text-black">Leaderboard</a>
			</li>
			<li>
				<a href="/profile">
					<img src={profileicon} alt="profile icon" />
				</a>
			</li>
		</ul>
	</nav>

	<main class="flex-grow">
		<Breadcrumb />
		<slot />
	</main>

	<footer class="bg-light-green">
		<p class="p-2 text-center">V2.0</p>
	</footer>
</div>
