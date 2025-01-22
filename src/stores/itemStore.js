import { writable } from "svelte/store";
import Default from "$lib/assets/items/Default.png"
import Bow from "$lib/assets/items/bow.png"
import Carrot from "$lib/assets/items/carrot.png"
import Crown from "$lib/assets/items/crown.png"
import Flower from "$lib/assets/items/flower.png"
import Tophat from "$lib/assets/items/tophat.png"

import BunnyDefault from "$lib/assets/bunny-items/bunny-default.png"
import BunnyBow from "$lib/assets/bunny-items/bunny-bow.png"
import BunnyCarrot from "$lib/assets/bunny-items/bunny-carrot.png"
import BunnyCrown from "$lib/assets/bunny-items/bunny-crown.png"
import BunnyFlower from "$lib/assets/bunny-items/bunny-flower.png"
import BunnyTophat from "$lib/assets/bunny-items/bunny-tophat.png"

const LOCAL_STORAGE_KEY = "itemsData";

let initialItems = [];

const isBrowser = typeof window !== "undefined";

// Check if we are in a browser environment
if (isBrowser) {
  // Try to load initial data from localStorage
  const storedItems = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (storedItems) {
    initialItems = JSON.parse(storedItems);
  } else {
    // Default items if no data in localStorage
    initialItems = [
      {
        id: 1,
        name: "None",
        imgUrl: {Default},
        bunnyURL: {BunnyDefault},
        leafAmountUnlock: 0,
        leafAmountCheck: 0,
        unlocked: true,
        equipped: true,
      },
      {
        id: 2,
        name: "Tophat",
        imgUrl: {Tophat},
        bunnyURL: {BunnyTophat},
        leafAmountUnlock: -6,
        leafAmountCheck: 6,
        unlocked: false,
        equipped: false
      },
      {
        id: 3,
        name: "Crown",
        imgUrl: {Crown},
        bunnyURL: {BunnyCrown},
        leafAmountUnlock: -8,
        leafAmountCheck: 8,
        unlocked: false,
        equipped: false
      },
      {
        id: 4,
        name: "Bow",
        imgUrl: {Bow},
        bunnyURL: {BunnyBow},
        leafAmountUnlock: -10,
        leafAmountCheck: 10,
        unlocked: false,
        equipped: false
      },
      {
        id: 5,
        name: "Flower",
        imgUrl: {Flower},
        bunnyURL: {BunnyFlower},
        leafAmountUnlock: -14,
        leafAmountCheck: 14,
        unlocked: false,
        equipped: false
      },
      {
        id: 6,
        name: "Carrot",
        imgUrl: {Carrot},
        bunnyURL: {BunnyCarrot},
        leafAmountUnlock: -18,
        leafAmountCheck: 18,
        unlocked: false,
        equipped: false
      },
    ];
  }
} else {
  // Fallback for non-browser environments
  initialItems = [];
}

// Create the writable store
export const items = writable(initialItems);

// Save updates to localStorage whenever the store changes
if (isBrowser) {
  items.subscribe((value) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(value));
  });
}
