import { describe, expect, it } from 'vitest';
import { cn } from './utils';

describe('cn utility function', () => {
  it('combines class names correctly', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
  });

  it('handles conditional classes', () => {
    expect(cn('base', { conditional: true })).toBe('base conditional');
    expect(cn('base', { conditional: false })).toBe('base');
  });

  it('handles undefined and null values', () => {
    expect(cn('base', undefined, null)).toBe('base');
  });

  it('handles empty strings', () => {
    expect(cn('base', '', 'valid')).toBe('base valid');
  });

  it('handles complex conditional objects', () => {
    expect(
      cn('base', {
        class1: true,
        class2: false,
        class3: true,
      })
    ).toBe('base class1 class3');
  });
});
