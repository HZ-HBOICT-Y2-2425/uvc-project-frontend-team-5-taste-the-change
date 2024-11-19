<script>
    import NavBar from '$lib/NavBar.svelte';
</script>

<div class="flex flex-col min-h-screen bg-gray-100">
    <NavBar />
    <div class="flex-grow flex justify-center items-start p-4">
        <main>
            <slot />
        </main>
    </div>
</div>

<style>
    @import '../app.css';
</style>
