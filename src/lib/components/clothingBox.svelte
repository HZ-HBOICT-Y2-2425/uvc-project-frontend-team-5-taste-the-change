<script lang="ts">
    import { writable } from "svelte/store";
    import { createEventDispatcher } from "svelte";
    import { leafAmount, incrementLeafAmount } from "../../stores/leafStore";
    import { items } from "../../stores/itemStore";

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

    let showItemBox = true;

    function selectItem(item: Item, unlockAmount: number, checkAmount: number) {
        const index = $items.findIndex((i: { id: number; }) => i.id === item.id);

        if ($leafAmount < checkAmount) {
            if(!$items[index].unlocked) {
                let errorMessage = document.getElementById('buyable')!
                errorMessage.innerHTML = "not enough leaves"
                return;
            }
        }

        if (!$items[index].unlocked) {
            incrementLeafAmount(unlockAmount); // Subtract leaves only once
            $items[index].unlocked = true;
        }

        $items.forEach((i: { equipped: boolean; }) => (i.equipped = false)); // Unequip all items
        $items[index].equipped = true; // Equip the selected item
        items.set([...$items]);

        dispatch('updateBunnyImage', $items[index].bunnyURL); // Send the bunny image URL to parent component
    }

    function closeItemBox() {
        showItemBox = false;
    }

    // Function to reset items to locked state
    function resetItems() {
        const resetItems = $items.map((item: any) => ({
            ...item,
            unlocked: false,  // Set unlocked to false
            equipped: false,  // Reset equipped state
        }));

        // Save the reset items in localStorage
        localStorage.setItem('items', JSON.stringify(resetItems));

        // Update the store so UI reflects changes
        items.set(resetItems);
    }
</script>

{#if showItemBox}
    <div class="absolute bg-light-green rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center min-w-[300px] max-w-[80%] max-h-[80%] overflow-y-auto" style="width: auto;">
        <!-- Close Button -->
        <button class="absolute top-4 right-4 text-dark-green text-2xl font-bold" on:click={closeItemBox}>X</button>
        <h2 class="text-dark-green text-xl font-bold mb-4">Pick an item:</h2>
        <div class="grid grid-cols-3 gap-4">
            {#each $items as item (item.id)}
                <button class="p-4 bg-white rounded shadow text-center cursor-pointer" on:click={() => selectItem(item, item.leafAmountUnlock, item.leafAmountCheck)}>
                    <img src={item.imgUrl} alt={item.name} class="w-16 h-16 mx-auto mb-2" />
                    <p class="text-sm">{item.name}</p>
                    <p class="text-sm">{item.leafAmountCheck}</p>
                    {#if item.equipped}
                        <p class="text-xs text-green-500">Equipped</p>
                    {/if}
                    {#if !item.unlocked}
                        <p class="text-xs text-red-500">locked</p>
                    {/if}
                </button>
            {/each}
        </div>
        <p id="buyable" class="text-red-500"></p>
        <button on:click={resetItems}>Reset Items</button>
    </div>
{/if}
