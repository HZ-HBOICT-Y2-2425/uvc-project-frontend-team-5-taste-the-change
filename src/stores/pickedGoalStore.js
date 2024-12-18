import { writable } from 'svelte/store';
import { browser } from '$app/environment'; // Import browser check

// Initialize the store
export const pickedGoal = writable(null);

// Check if localStorage is available in the browser
if (browser) {
  const persistedGoal = localStorage.getItem('pickedGoal');
  if (persistedGoal) {
    pickedGoal.set(JSON.parse(persistedGoal)); // If a goal is stored in localStorage, set it in the store
  }

  // Update the picked goal in localStorage whenever it changes
  pickedGoal.subscribe(($pickedGoal) => {
    if ($pickedGoal) {
      localStorage.setItem('pickedGoal', JSON.stringify($pickedGoal));
    } else {
      localStorage.removeItem('pickedGoal');
    }
  });
}
