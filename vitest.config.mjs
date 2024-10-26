import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	esbuild: {
		loader: 'jsx',
		include: /\.[jt]sx?$/, // Include both .js(x) and .ts(x) files
	},
	test: {
		environment: 'jsdom',
		setupFiles: 'tests/setup.jsx',
		globals: true,
		include: ['**/*.{test,spec}.{js,jsx,ts,tsx}'],
		coverage: {
			reporter: ['text', 'json', 'html'],
			provider: 'v8',
			ignore: ['**/node_modules/**'],
			include: ['**/*.{test,spec}.{js,jsx,ts,tsx}'],
		},
	},
});
