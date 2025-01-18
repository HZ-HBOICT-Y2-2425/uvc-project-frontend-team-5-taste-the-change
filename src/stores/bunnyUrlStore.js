// stores/bunnyStore.js
import { writable } from "svelte/store";

const LOCAL_STORAGE_KEY = "bunnyURL";

// Load the stored bunnyURL from localStorage if available
let initialBunnyURL = "src/lib/assets/Bunny.png"; // default value

if (typeof window !== "undefined") {
  const storedBunnyURL = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (storedBunnyURL) {
    initialBunnyURL = storedBunnyURL;
  }
}

// Create a writable store for bunnyURL
export const bunnyURL = writable(initialBunnyURL);

// Subscribe to changes in the store and save them to localStorage
if (typeof window !== "undefined") {
  bunnyURL.subscribe((value) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, value);
  });
}
