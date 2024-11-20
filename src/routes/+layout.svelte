<script>
  import '../app.css';
  import NavBar from '$lib/NavBar.svelte';
</script>

<div class="flex flex-col h-screen justify-between">
	<NavBar />
	<main>
		<slot />
	</main>

	<footer class="bg-light-green">
		<p class="p-2 text-center">Footer</p>
	</footer>
</div>