# Testing Guide

This document outlines the testing strategy, coverage requirements, and best practices for the AWP React project.

## 🧪 Testing Overview

The project uses a comprehensive testing strategy with multiple layers:

- **Unit Tests**: Vitest + React Testing Library
- **Integration Tests**: Component interaction testing
- **E2E Tests**: Playwright for end-to-end testing
- **Storybook Tests**: Component testing with Storybook
- **Coverage Reporting**: V8 coverage with thresholds

## 📊 Coverage Requirements

### Global Thresholds

- **Branches**: 80%
- **Functions**: 80%
- **Lines**: 80%
- **Statements**: 80%

### Directory-Specific Thresholds

#### Components (`./src/components/`)

- **Branches**: 85%
- **Functions**: 85%
- **Lines**: 85%
- **Statements**: 85%

#### Library (`./src/lib/`)

- **Branches**: 90%
- **Functions**: 90%
- **Lines**: 90%
- **Statements**: 90%

#### Hooks (`./src/hooks/`)

- **Branches**: 85%
- **Functions**: 85%
- **Lines**: 85%
- **Statements**: 85%

#### Utils (`./src/utils/`)

- **Branches**: 90%
- **Functions**: 90%
- **Lines**: 90%
- **Statements**: 90%

## 🚀 Test Commands

### Basic Testing

```bash
npm test              # Run all tests
npm run test:watch    # Run tests in watch mode
npm run test:ui       # Open Vitest UI
```

### Coverage Commands

```bash
npm run test:coverage           # Generate coverage report
npm run test:coverage:watch     # Coverage in watch mode
npm run test:coverage:report    # Generate HTML coverage report
npm run test:coverage:check     # Check coverage thresholds
```

### E2E Testing

```bash
npm run test:e2e              # Run E2E tests
npm run test:e2e:ui           # E2E tests with UI
npm run test:e2e:debug        # E2E tests in debug mode
npm run test:e2e:report       # Show E2E test report
```

## 📁 Test Structure

```
src/
├── test/
│   ├── setup.ts              # Test environment setup
│   ├── utils.tsx             # Testing utilities
│   └── example.test.tsx      # Example test
├── components/
│   └── ui/
│       └── button.test.tsx   # Component tests
└── lib/
    └── utils.test.ts         # Utility function tests
```

## 🎯 Writing Tests

### Component Testing Example

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils';
import { Button } from '@/components/ui/button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('applies variant classes correctly', () => {
    render(<Button variant='destructive'>Delete</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-destructive');
  });
});
```

### Utility Function Testing Example

```tsx
import { describe, it, expect } from 'vitest';
import { cn } from '@/lib/utils';

describe('cn utility', () => {
  it('combines class names correctly', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
  });

  it('handles conditional classes', () => {
    expect(cn('base', { conditional: true })).toBe('base conditional');
    expect(cn('base', { conditional: false })).toBe('base');
  });
});
```

## 📈 Coverage Reports

### HTML Report

Run `npm run test:coverage:report` to generate an HTML coverage report. The report will be available in the `coverage/` directory.

### Console Report

The default coverage command (`npm run test:coverage`) provides a console report showing:

- Coverage percentages by file
- Threshold compliance
- Uncovered lines

### LCOV Report

LCOV format is generated for CI/CD integration with services like Codecov.

## 🔧 Configuration

### Coverage Configuration

Coverage settings are defined in `coverage.config.js`:

- Thresholds by directory
- Excluded files and patterns
- Report formats
- Coverage provider (V8)

### Vitest Configuration

Main test configuration is in `vitest.config.ts`:

- Test environment (jsdom)
- Setup files
- Path aliases
- Storybook integration

## 🚨 Coverage Failures

If coverage thresholds are not met:

1. **Check the coverage report** to identify uncovered code
2. **Add tests** for uncovered branches and functions
3. **Review excluded files** to ensure proper exclusions
4. **Update thresholds** if requirements change

### Common Issues

- **Missing edge case tests**: Add tests for conditional branches
- **Untested error handling**: Test error scenarios
- **Unused code**: Remove or test unused functions
- **Configuration files**: Ensure proper exclusions

## 📋 Best Practices

### Test Organization

- Group related tests in `describe` blocks
- Use descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)

### Coverage Strategy

- Focus on critical user paths
- Test error conditions and edge cases
- Maintain high coverage for utility functions
- Use integration tests for complex interactions

### Performance

- Keep tests fast and focused
- Use mocks for external dependencies
- Avoid testing implementation details
- Use test utilities for common patterns

## 🔗 Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright Documentation](https://playwright.dev/)
- [Storybook Testing](https://storybook.js.org/docs/writing-tests/introduction)
