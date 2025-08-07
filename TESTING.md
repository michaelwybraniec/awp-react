# Testing Guide

This document describes the testing setup and guidelines for the AWP React Platform.

## Testing Stack

- **Vitest**: Fast unit testing framework
- **React Testing Library**: Component testing utilities
- **@testing-library/jest-dom**: Custom Jest matchers
- **@testing-library/user-event**: User interaction simulation
- **jsdom**: DOM environment for testing

## Test Structure

```
src/
├── test/
│   ├── setup.ts          # Test environment setup
│   ├── utils.tsx         # Test utilities and helpers
│   └── example.test.tsx  # Example tests
├── components/           # Component tests alongside components
│   └── ComponentName/
│       ├── ComponentName.tsx
│       └── ComponentName.test.tsx
└── lib/                  # Library function tests
    └── functionName.test.ts
```

## Running Tests

### Basic Commands

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run tests with UI
npm run test:ui

# Run specific test file
npx vitest run src/test/example.test.tsx

# Run tests matching a pattern
npx vitest run --grep "configuration"
```

### Test Scripts

- `npm test`: Run all tests once
- `npm run test:watch`: Run tests in watch mode (re-runs on file changes)
- `npm run test:coverage`: Generate coverage report
- `npm run test:ui`: Open Vitest UI for interactive testing

## Writing Tests

### Component Testing

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('handles user interactions', async () => {
    const user = setupUser();
    render(<MyComponent />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(screen.getByText('Clicked!')).toBeInTheDocument();
  });
});
```

### Utility Function Testing

```tsx
import { describe, it, expect } from 'vitest';
import { formatDate } from '@/lib/utils';

describe('formatDate', () => {
  it('formats date correctly', () => {
    const date = new Date('2023-01-01');
    expect(formatDate(date)).toBe('01/01/2023');
  });
});
```

### API Testing

```tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@/test/utils';
import { UserList } from './UserList';

// Mock API calls
vi.mock('@/lib/api', () => ({
  getUsers: vi.fn(() =>
    Promise.resolve([
      { id: '1', name: 'John Doe' },
      { id: '2', name: 'Jane Smith' },
    ])
  ),
}));

describe('UserList', () => {
  it('loads and displays users', async () => {
    render(<UserList />);

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    });
  });
});
```

## Test Utilities

### Custom Render Function

The `@/test/utils` provides a custom render function that includes common providers:

```tsx
import { render } from '@/test/utils';

// Use instead of @testing-library/react render
render(<MyComponent />);
```

### Test Data Factories

Use the provided factory functions to create consistent test data:

```tsx
import { createMockUser, createMockLab } from '@/test/utils';

const user = createMockUser({ name: 'Custom Name' });
const lab = createMockLab({ location: 'Custom Location' });
```

### User Event Setup

```tsx
import { setupUser } from '@/test/utils';

const user = setupUser();
await user.click(button);
await user.type(input, 'text');
```

## Testing Guidelines

### 1. Test Structure

- Use descriptive test names
- Group related tests with `describe` blocks
- Follow the AAA pattern: Arrange, Act, Assert

### 2. Component Testing

- Test user interactions, not implementation details
- Use semantic queries (getByRole, getByLabelText)
- Avoid testing internal state or props directly

### 3. Accessibility Testing

- Test keyboard navigation
- Verify screen reader compatibility
- Check ARIA attributes

### 4. Async Testing

- Use `waitFor` for async operations
- Mock external dependencies
- Test loading and error states

### 5. Coverage

- Aim for 80%+ code coverage
- Focus on critical user paths
- Test edge cases and error scenarios

## Mocking

### Next.js Components

The test setup includes mocks for common Next.js components:

- `next/navigation` (useRouter, useSearchParams, etc.)
- `next/image` (Image component)

### Environment Variables

Test environment variables are set in `src/test/setup.ts`:

```tsx
process.env.NEXT_PUBLIC_APP_NAME = 'AWP React Platform Test';
process.env.NEXTAUTH_SECRET = 'test-secret';
```

### Browser APIs

Common browser APIs are mocked:

- `ResizeObserver`
- `IntersectionObserver`
- `matchMedia`

## Coverage Reports

Run coverage to see test coverage:

```bash
npm run test:coverage
```

This generates:

- Console output with coverage summary
- HTML report in `coverage/` directory
- JSON report for CI/CD integration

## Continuous Integration

Tests are automatically run in CI/CD pipelines:

- Pre-commit hooks run tests
- Pull requests require passing tests
- Coverage thresholds are enforced

## Troubleshooting

### Common Issues

1. **Import errors**: Ensure path aliases are configured correctly
2. **Mock not working**: Check that mocks are defined before imports
3. **Async test failures**: Use `waitFor` for async operations
4. **Environment variables**: Verify test setup includes required env vars

### Debug Mode

Run tests in debug mode for more verbose output:

```bash
npx vitest run --reporter=verbose
```

## Best Practices

1. **Write tests first** (TDD) for complex features
2. **Keep tests simple** and focused
3. **Use meaningful assertions** that test behavior
4. **Mock external dependencies** to isolate units
5. **Test error scenarios** and edge cases
6. **Maintain test data** with factory functions
7. **Update tests** when changing component behavior
