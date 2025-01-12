// stores/bunnyNameStore.js
import { writable } from "svelte/store";

const LOCAL_STORAGE_KEY = "bunnyName";

// Load the stored bunnyName from localStorage if available
let initialBunnyName = "Bunny"; // default value

if (typeof window !== "undefined") {
  const storedBunnyName = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (storedBunnyName) {
    initialBunnyName = storedBunnyName;
  }
}

// Create a writable store for bunnyName
export const bunnyName = writable(initialBunnyName);

// Subscribe to changes in the store and save them to localStorage
if (typeof window !== "undefined") {
  bunnyName.subscribe((value) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, value);
  });
}
