/**
 * Coverage Configuration
 * Defines test coverage thresholds and reporting settings
 */

/** @type {import('vitest').CoverageV8Options} */
export default {
  // Coverage thresholds by directory
  thresholds: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
    './src/components/': {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
    './src/lib/': {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
    './src/hooks/': {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
    './src/utils/': {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },

  // Only include our source code
  include: ['src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude from coverage
  exclude: [
    'node_modules/**',
    'src/test/**',
    '**/*.d.ts',
    '**/*.config.*',
    '**/coverage/**',
    '**/*.stories.*',
    '**/*.story.*',
    '.storybook/**',
    'stories/**',
    'src/stories/**',
    '**/index.ts',
    '**/index.tsx',
    '**/*.test.*',
    '**/*.spec.*',
    'tests/**',
    '**/coverage.config.js',
    '**/vitest.config.ts',
    '**/playwright.config.ts',
    '**/next.config.ts',
    '**/tailwind.config.ts',
    '**/postcss.config.mjs',
    '**/eslint.config.mjs',
    '**/tsconfig.json',
    '**/package.json',
    '**/package-lock.json',
    '**/README.md',
    '**/.gitignore',
    '**/.env*',
    '**/public/**',
    '**/dist/**',
    '**/.next/**',
    '**/out/**',
  ],

  // Coverage reporters
  reporter: ['text', 'json', 'html', 'lcov'],

  // Coverage options
  all: true,
  clean: true,
  cleanOnRerun: true,
  provider: 'v8',
};
