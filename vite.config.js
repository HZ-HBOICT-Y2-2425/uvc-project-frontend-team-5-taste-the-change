import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Change this to jsdom for browser-like testing
    globals: true, // Enable Vitest global functions like describe and it
    setupFiles: './src/setupTests.js', // Optional, for custom setup if needed
  },
  resolve: process.env.VITEST
    ? {
      conditions: ['browser'],
    }
    : undefined,
  plugins: [sveltekit()],
});
