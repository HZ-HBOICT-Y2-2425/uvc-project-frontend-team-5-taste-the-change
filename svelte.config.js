// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-vercel';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
// 		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
// 		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
// 		adapter: adapter()
// 	},
// 	preprocess: vitePreprocess()
// };

export default {
	kit: {
	  // Specify the adapter
	  adapter: adapter({
		// Optionally specify the Node.js runtime version (Node 18.x is recommended)
		// runtime: 'nodejs18.x', // Use Node.js 18 for compatibility with Vercel
	  }),
	},
  };
