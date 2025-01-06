<script lang="ts">
    import { writable } from "svelte/store";
    import { createEventDispatcher } from "svelte";
    import { leafAmount,incrementLeafAmount } from "../../stores/leafStore";
    import { items } from "../../stores/itemStore";

    // Define the type for an item
    type Item = {
        id: number;
        name: string;
        imgUrl: string;
        bunnyURL: string;
        leafAmountUnlock: number;
        leafAmountCheck: number;
        unlocked: boolean;
        equipped: boolean;
    };

    const dispatch = createEventDispatcher();

    let showItemBox = true; // Define the variable to control visibility of the item box

    // Explicitly type the parameter as `Item`
    function selectItem(item: Item, unlockAmount: number, checkAmount: number) {
    const index = $items.findIndex((i: { id: number; }) => i.id === item.id); // Find the item's index in the store
    let currentBunnySrc = "src/lib/assets/bunny.png"

    if ($leafAmount <= checkAmount) {
        console.log('Not enough leaves');
        return;
    }

    if (!$items[index].unlocked) {
        // Unlock the item
        incrementLeafAmount(unlockAmount); // Subtract leaves only once
        $items[index].unlocked = true;
    }

    // Equip the item
    $items.forEach((i: { equipped: boolean; }) => (i.equipped = false)); // Unequip all items
    $items[index].equipped = true; // Equip the selected item
    items.set([...$items]); // Trigger reactivity
    currentBunnySrc = $items[index].bunnyURL
}



    // Function to close the item box
    function closeItemBox() {
        showItemBox = false;
    }
</script>

{#if showItemBox}
    <div
        class="absolute bg-light-green rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center min-w-[300px] max-w-[80%] max-h-[80%] overflow-y-auto"
        style="width: auto;"
    >
        <!-- Close Button -->
        <button
            class="absolute top-4 right-4 text-dark-green text-2xl font-bold"
            on:click={closeItemBox}
        >
            X
        </button>
        <h2 class="text-dark-green text-xl font-bold mb-4">Pick an item:</h2>
        <div class="grid grid-cols-3 gap-4">
            {#each $items as item (item.id)}
                <button
                    class="p-4 bg-white rounded shadow text-center cursor-pointer"
                    on:click={() => selectItem(item, item.leafAmountUnlock, item.leafAmountCheck)}
                >
                    <img
                        src={item.imgUrl}
                        alt={item.name}
                        class="w-16 h-16 mx-auto mb-2"
                    />
                    <p class="text-sm">{item.name}</p>
                    {#if item.equipped}
                        <p class="text-xs text-green-500">Equipped</p>
                    {/if}
                </button>
            {/each}
        </div>
    </div>
{/if}
