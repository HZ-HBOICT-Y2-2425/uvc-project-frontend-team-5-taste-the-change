import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import eslintPluginSvelte from "eslint-plugin-svelte"; // Add svelte plugin

/** @type {import('eslint').Linter.BaseConfig} */
export default [
  {
    ignores: [
      ".svelte-kit/**",  // Ignore everything inside the .svelte-kit folder
      ".vercel/**",      // Ignore everything inside the .vercel folder
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"], // Apply to js, ts, and svelte files
    languageOptions: {
      parser: tsParser, // Use TypeScript parser for JS/TS
      globals: { ...globals.browser, ...globals.node }, // Include browser and Node.js globals
    },
    plugins: {
      "@typescript-eslint": tsPlugin, // Add TypeScript plugin
    },
    rules: {
      ...tsPlugin.configs.recommended.rules, // Apply recommended TypeScript rules
      "@typescript-eslint/ban-ts-comment": "off", // Turn off specific rule

      // Enforce 2-space indentation for JS/TS files
      "indent": ["warn", 2], // JavaScript and TypeScript files

      // Enforce camelCase for variable and function names
      "camelcase": ["error", { "properties": "always" }], // Enforce camelCase in variable and property names
    },
  },
  ...eslintPluginSvelte.configs['flat/recommended'],
  {
    rules: {
      // Enforce camelCase in Svelte files
      "camelcase": ["error", { "properties": "always" }],
      
      // Enforce 2-space indentation in Svelte files
      "indent": ["warn", 2],
    }
  },
];
