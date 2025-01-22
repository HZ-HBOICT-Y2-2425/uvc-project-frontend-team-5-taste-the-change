import { writable } from "svelte/store";

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
        imgUrl: "/assets/items/Default.png",
        bunnyURL: "/assets/Bunny.png",
        leafAmountUnlock: 0,
        leafAmountCheck: 0,
        unlocked: true,
        equipped: true,
      },
      {
        id: 2,
        name: "Tophat",
        imgUrl: "/assets/items/tophat.png",
        bunnyURL: "/assets/bunny-items/bunny-tophat.png",
        leafAmountUnlock: -6,
        leafAmountCheck: 6,
        unlocked: false,
        equipped: false
      },
      {
        id: 3,
        name: "Crown",
        imgUrl: "/assets/items/crown.png",
        bunnyURL: "/assets/bunny-items/bunny-crown.png",
        leafAmountUnlock: -8,
        leafAmountCheck: 8,
        unlocked: false,
        equipped: false
      },
      {
        id: 4,
        name: "Bow",
        imgUrl: "/assets/items/bow.png",
        bunnyURL: "/assets/bunny-items/bunny-bow.png",
        leafAmountUnlock: -10,
        leafAmountCheck: 10,
        unlocked: false,
        equipped: false
      },
      {
        id: 5,
        name: "Flower",
        imgUrl: "/assets/items/flower.png",
        bunnyURL: "/assets/bunny-items/bunny-flower.png",
        leafAmountUnlock: -14,
        leafAmountCheck: 14,
        unlocked: false,
        equipped: false
      },
      {
        id: 6,
        name: "Carrot",
        imgUrl: "/assets/items/carrot.png",
        bunnyURL: "/assets/bunny-items/bunny-carrot.png",
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
