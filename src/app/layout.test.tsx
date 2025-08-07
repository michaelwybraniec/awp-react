import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import RootLayout from './layout';

// Mock Next.js fonts
vi.mock('next/font/google', () => ({
  Geist: () => ({
    variable: '--font-geist-sans',
    subsets: ['latin'],
  }),
  Geist_Mono: () => ({
    variable: '--font-geist-mono',
    subsets: ['latin'],
  }),
}));

// Mock environment initialization
vi.mock('@/lib/env', () => ({
  initializeEnvironment: vi.fn(),
}));

// Mock config
vi.mock('@/lib/config', () => ({
  app: {
    name: 'AWP React',
  },
}));

// Mock CSS imports
vi.mock('./globals.css', () => ({}));

describe('RootLayout Component', () => {
  it('renders root layout with children', () => {
    render(
      <RootLayout>
        <div>Test content</div>
      </RootLayout>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders html element with correct lang attribute', () => {
    render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>
    );
    const html = document.querySelector('html');
    expect(html).toHaveAttribute('lang', 'en');
  });

  it('renders body with font variables and antialiased class', () => {
    render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>
    );
    const body = document.querySelector('body');
    expect(body).toHaveClass(
      '--font-geist-sans',
      '--font-geist-mono',
      'antialiased'
    );
  });

  it('renders children inside body element', () => {
    render(
      <RootLayout>
        <div data-testid='test-child'>Child content</div>
      </RootLayout>
    );
    expect(screen.getByTestId('test-child')).toBeInTheDocument();
  });

  it('applies font variables to body className', () => {
    render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>
    );
    const body = document.querySelector('body');
    expect(body?.className).toContain('--font-geist-sans');
    expect(body?.className).toContain('--font-geist-mono');
  });
});
