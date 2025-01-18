// @ts-nocheck
import { writable } from "svelte/store";
import { browser } from "$app/environment"; // Check for browser environment

// Initialize countdown store with default values
export const countdown = writable({
  total: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

let interval; // Store the interval reference

// Function to format time in days, hours, minutes, seconds
function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { total: ms, days, hours, minutes, seconds };
}

// Reset the countdown timer
export function resetCountdown() {
  if (!browser) return; // Exit if not running in the browser

  // Clear any existing interval
  if (interval) {
    clearInterval(interval);
  }

  const countdownDuration = 10 * 1000; // Set to 10 seconds for testing
  const endTime = Date.now() + countdownDuration;

  countdown.set(formatTime(countdownDuration));

  // Start a new interval to update the countdown
  interval = setInterval(() => {
    const remainingTime = Math.max(endTime - Date.now(), 0);

    countdown.set(formatTime(remainingTime));

    // If countdown reaches zero, clear the interval
    if (remainingTime <= 0) {
      clearInterval(interval);
    }
  });
}