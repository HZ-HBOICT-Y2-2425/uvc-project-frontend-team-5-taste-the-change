import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Browser-like testing
    globals: true, // Enable global test functions like describe and it
    setupFiles: './src/setupTests.js', // Optional setup file
    // reporters: [
    //   'default',
    //   new JUnitReporter({
    //     outputFile: './coverage/junit.xml',
    //   }),
    // ],
    coverage: {
      provider: 'v8', // Use V8 as the coverage provider
      reporter: ['text', 'html', 'lcov'], // Generate reports in text, HTML, and LCOV formats
      reportsDirectory: './coverage', // Output directory for coverage reports
      all: true,
    },
  },
  resolve: process.env.VITEST
    ? {
      conditions: ['browser'],
    }
    : undefined,
  plugins: [sveltekit()],
});
