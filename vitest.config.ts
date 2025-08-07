import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import path from 'path';
import { defineConfig } from 'vitest/config';
import coverageConfig from './coverage.config.js';

const dirname = path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
    css: true,
    coverage: {
      ...coverageConfig,
    },
    // Handle different test environments
    environmentOptions: {
      jsdom: {
        resources: 'usable',
      },
    },
    // Only include our test files
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    // Exclude E2E tests from coverage
    exclude: ['tests/e2e/**', '**/*.e2e.*', 'node_modules/**'],
    // Temporarily disable Storybook tests for coverage
    // projects: [
    //   {
    //     extends: true,
    //     plugins: [
    //       storybookTest({
    //         configDir: path.join(dirname, '.storybook'),
    //       }),
    //     ],
    //     test: {
    //       include: ['src/**/*.stories.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    //       browser: {
    //         enabled: true,
    //         headless: true,
    //         provider: 'playwright',
    //         instances: [
    //           {
    //             browser: 'chromium',
    //           },
    //         ],
    //       },
    //       setupFiles: ['.storybook/vitest.setup.ts'],
    //     },
    //   },
    // ],
  },
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src'),
    },
  },
});
