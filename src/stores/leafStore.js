import { writable } from 'svelte/store';

export const leafAmount = writable(0); // Initialize with 0

export function incrementLeafAmount(value) {
  leafAmount.update(current => current + value); // Increment by the given value
}
