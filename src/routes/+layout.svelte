<script>
	import '../app.css';
</script>

<div class="flex flex-col h-screen justify-between">
	<nav class="bg-dark-green">
		<h1 class="p-4 text-4xl font-sans font-bold text-slate-50">Taste the change</h1>
    </nav>
	<main>
		<slot />
	</main>

	<footer class="bg-light-green">
		<p class="p-2 text-center">Footer </p>
	</footer>
</div>

<style>
</style>
