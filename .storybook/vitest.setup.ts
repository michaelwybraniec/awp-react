/**
 * Storybook Vitest Setup
 * Minimal setup for Storybook tests to avoid environment conflicts
 */

import '@testing-library/jest-dom';
import React from 'react';

// Mock Next.js router for Storybook tests
import { vi } from 'vitest';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => '/',
}));

// Mock Next.js image component
vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: any) => {
    return React.createElement('img', { src, alt, ...props });
  },
}));

// Basic environment variables for Storybook tests
if (typeof process !== 'undefined') {
  process.env.NEXT_PUBLIC_APP_NAME = 'AWP React Platform Test';
  process.env.NEXT_PUBLIC_APP_VERSION = '0.1.0';
  process.env.NEXT_PUBLIC_APP_URL = 'http://localhost:3000';
}
