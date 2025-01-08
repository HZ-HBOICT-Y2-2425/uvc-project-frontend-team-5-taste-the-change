import { writable } from 'svelte/store';

export const leafAmount = writable(0); // Initialize with 0

export function incrementLeafAmount(value) {
  leafAmount.update(current => current + value); // Increment by the given value
}

export async function fetchLeafAmount() {
  try {
    const response = await fetch('http://localhost:3014/getLeafAmount'); // Adjust the API endpoint as needed
    if (response.ok) {
      const data = await response.json();
      if (data.length > 0) { // Ensure the array is not empty
        leafAmount.set(data[0].leafAmount); // Access the first element and update the store
      }
    } else {
      console.error('Failed to fetch leaf amount:', response.statusText);
    }
  } catch (error) {
    console.error('Error fetching leaf amount:', error);
  }
}

