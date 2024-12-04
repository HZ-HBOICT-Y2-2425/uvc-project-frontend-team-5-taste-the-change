<script>
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    const apiUrl = "http://localhost:3013/items";

    // Reactive store to hold item data
    const items = writable([]);
    let userLeaves = 50; // Placeholder, replace with actual user data

    async function fetchItems() {
        try {
            const response = await fetch(`${apiUrl}?leaves=${userLeaves}`);
            const data = await response.json();
            items.set(data); // Set items in the store
        } catch (err) {
            console.error("Error fetching items:", err);
        }
    }

    // Unlock item
    async function unlockItem(itemId) {
        try {
            const response = await fetch(`${apiUrl}/${itemId}/unlock`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ leaves: userLeaves }),
            });

            if (!response.ok) throw new Error("Failed to unlock item");

            fetchItems(); // Refresh the items after unlocking
        } catch (err) {
            console.error("Error unlocking item:", err);
        }
    }

    onMount(() => {
        fetchItems(); // Fetch items on component mount
    });
</script>

<div
    class="absolute top-1/3 right-1/4 transform -translate-y-1/2 bg-light-green rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center min-w-[250px] max-w-[80%] max-h-[80%] overflow-y-auto"
    style="width: auto;">
    <h2 class="text-dark-green text-xl font-bold mb-4">Pick an item:</h2>
    <div class="grid grid-cols-3 gap-4">
        {#each $items as item (item.id)}
        <div
            class="p-2 bg-white rounded shadow text-center"
            class:bg-gray-200={!item.unlocked}>
            <!-- Placeholder for item image -->
            <img src={item.imgUrl} alt={item.name} class="w-12 h-12 mx-auto mb-2 {item.unlocked ? '' : 'opacity-50'}" />
            <p class="text-sm">{item.unlocked ? "Unlocked" : `Unlock with ${item.cost} leaves`}</p>
            {#if !item.unlocked}
            <button
                class="mt-2 bg-dark-green text-white px-4 py-1 rounded"
                on:click={() => unlockItem(item.id)}
                disabled={userLeaves < item.cost}>
                Unlock
            </button>
            {/if}
        </div>
        {/each}
    </div>
</div>
