import { writable } from 'svelte/store';

function createLocalStorageStore(key, initialValue) {
  let parsedValue = initialValue;

  // Check if `localStorage` is available
  if (typeof window !== 'undefined') {
    const storedValue = localStorage.getItem(key);
    parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;
  }

  const store = writable(parsedValue);

  if (typeof window !== 'undefined') {
    store.subscribe((value) => {
      localStorage.setItem(key, JSON.stringify(value));
    });
  }

  return store;
}

// CO2 Data Store
export const co2Data = createLocalStorageStore('co2Data', {});
