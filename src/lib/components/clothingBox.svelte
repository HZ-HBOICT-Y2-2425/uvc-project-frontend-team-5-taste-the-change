<script lang="ts">
    import { writable } from "svelte/store";
    import { createEventDispatcher } from "svelte";

    // Define the type for an item
    type Item = {
        id: number;
        name: string;
        imgUrl: string;
        bunnyURL: string;
    };

    // Item data
    const items = writable<Item[]>([
        { id: 1, name: "None", imgUrl: "src/lib/assets/items/default.png", bunnyURL: "src/lib/assets/bunny.png" },
        { id: 2, name: "Tophat", imgUrl: "src/lib/assets/items/tophat.png", bunnyURL: "src/lib/assets/bunny-items/bunny-tophat.png" },
        { id: 3, name: "Crown", imgUrl: "src/lib/assets/items/crown.png", bunnyURL: "src/lib/assets/bunny-items/bunny-crown.png" },
        { id: 4, name: "Bow", imgUrl: "src/lib/assets/items/bow.png", bunnyURL: "src/lib/assets/bunny-items/bunny-bow.png" },
        { id: 5, name: "Flower", imgUrl: "src/lib/assets/items/flower.png", bunnyURL: "src/lib/assets/bunny-items/bunny-flower.png" },
        { id: 6, name: "Carrot", imgUrl: "src/lib/assets/items/carrot.png", bunnyURL: "src/lib/assets/bunny-items/bunny-carrot.png" },
    ]);

    const dispatch = createEventDispatcher();

    // Explicitly type the parameter as `Item`
    function selectItem(item: Item) {
        dispatch("itemSelected", item); // Notify parent
    }
</script>

<div
    class="absolute bg-light-green rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center min-w-[250px] max-w-[80%] max-h-[80%] overflow-y-auto"
    style="width: auto;"
>
    <h2 class="text-dark-green text-xl font-bold mb-4">Pick an item:</h2>
    <div class="grid grid-cols-3 gap-4">
        {#each $items as item (item.id)}
            <button
                class="p-2 bg-white rounded shadow text-center cursor-pointer"
                on:click={() => selectItem(item)}
            >
                <img
                    src={item.imgUrl}
                    alt={item.name}
                    class="w-12 h-12 mx-auto mb-2"
                />
                <p class="text-sm">{item.name}</p>
            </button>
        {/each}
    </div>
</div>
