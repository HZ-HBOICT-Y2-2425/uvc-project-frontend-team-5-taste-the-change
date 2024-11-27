import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import svelte from "eslint-plugin-svelte";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // Base JavaScript/TypeScript configuration
  {
    files: ["*.{js,mjs,cjs,ts}"],
    languageOptions: {
      parser: tsParser, // Use TypeScript parser for TS files
      globals: { ...globals.browser, ...globals.node }, // Browser & Node globals
    },
    plugins: {
      "@typescript-eslint": tseslint, // TypeScript plugin
    },
    rules: {
      ...pluginJs.configs.recommended.rules, // Recommended JS rules
      ...tseslint.configs.recommended.rules, // Recommended TS rules
    },
  },

  // Svelte configuration
  {
    files: ["*.svelte"],
    plugins: {
      svelte,
    },
    processor: "svelte/svelte",
    rules: {
      // Add Svelte-specific rules here if needed
    },
  },
];
