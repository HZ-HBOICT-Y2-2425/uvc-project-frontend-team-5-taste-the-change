<script>
	import '../app.css';
	import logo from '$lib/assets/logo.png';
</script>

<div class="flex flex-col h-screen justify-between">
	<nav class="bg-dark-green flex items-center justify-between px-4 py-3">
		<div class="flex items-center space-x-2">
			<img src={logo} alt="Logo" class="h-20 w-20" />
			<a href="/" class="p-4 text-4xl font-sans font-bold text-slate-50 hover:text-green-950">
				Taste The Change
			</a>
		</div>

		<ul class="flex text-2xl space-x-6 list-none">
			<li class="list-none"><a href="/recipes" class="text-white hover:text-green-950">Recipes</a></li>
			<li class="list-none"><a href="/goals" class="text-white hover:text-green-950">Goals</a></li>
			<li class="list-none"><a href="/statistics" class="text-white hover:text-green-950">Statistics</a></li>
			<li class="list-none"><a href="/leaderboard" class="text-white hover:text-green-950">Leaderboard</a></li>
			<li class="list-none"><a href="/profile" class="text-white hover:text-green-950">Profile</a></li>
		</ul>
    </nav>

	<main>
		<slot />
	</main>

	<footer class="bg-light-green">
		<p class="p-2 text-center">Footer</p>
	</footer>
</div>