<script>
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    const apiUrl = "http://localhost:3013/items";

    const items = writable([]);

    async function fetchItems() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            items.set(data);
        } catch (err) {
            console.error("Error fetching items:", err);
        }
    }

    onMount(() => {
        fetchItems();
    });
</script>

<div
    class="absolute top-1/3 right-[25%] transform -translate-y-1/2 bg-light-green rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center overflow-y-auto"
    style="width: 320px; height: 400px;"
>
    <h2 class="text-dark-green text-xl font-bold mb-4">Pick an item:</h2>
    <div class="grid grid-cols-3 gap-4">
        {#each $items as item (item.id)}
            <div
                class="p-2 rounded shadow text-center bg-white"
                class:bg-gray-200={!item.unlocked}
            >
                <img
                    src={item.imgUrl}
                    alt={item.name}
                    class="w-12 h-12 mx-auto mb-2 {item.unlocked
                        ? ''
                        : 'opacity-50'}"
                />
                <p class="text-sm">
                    {item.unlocked
                        ? "Unlocked"
                        : `Unlock with ${item.cost} leaves`}
                </p>
            </div>
        {/each}
    </div>
</div>
