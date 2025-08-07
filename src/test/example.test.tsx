/**
 * Example Test
 * Demonstrates the testing setup and provides a template for other tests
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils';
import { config } from '@/lib/config';

// Example component for testing
const ExampleComponent = () => {
  return (
    <div>
      <h1>Hello, {config.app.name}!</h1>
      <p>Version: {config.app.version}</p>
      <button>Click me</button>
    </div>
  );
};

describe('Example Test', () => {
  it('renders the component correctly', () => {
    render(<ExampleComponent />);

    expect(
      screen.getByText(/Hello, AWP React Platform Test!/)
    ).toBeInTheDocument();
    expect(screen.getByText(/Version: 0.1.0/)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /click me/i })
    ).toBeInTheDocument();
  });

  it('has correct button text', () => {
    render(<ExampleComponent />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Click me');
  });
});

describe('Configuration', () => {
  it('loads configuration correctly', () => {
    expect(config.app.name).toBe('AWP React Platform Test');
    expect(config.app.version).toBe('0.1.0');
    expect(config.app.url).toBe('http://localhost:3000');
  });

  it('has correct feature flags', () => {
    expect(config.features.analytics).toBe(false);
    expect(config.features.notifications).toBe(false);
  });
});
