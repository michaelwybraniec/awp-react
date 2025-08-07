import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import {
  breakpoints,
  containerMaxWidths,
  isBreakpoint,
  responsive,
  responsiveGrid,
  responsiveSpacing,
  responsiveSpacingClasses,
  responsiveTypography,
  responsiveVisibility,
} from './responsive';

describe('Responsive Module', () => {
  let originalInnerWidth: number;

  beforeEach(() => {
    originalInnerWidth = window.innerWidth;
  });

  afterEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    });
  });

  describe('breakpoints', () => {
    it('has correct breakpoint values', () => {
      expect(breakpoints.sm).toBe('640px');
      expect(breakpoints.md).toBe('768px');
      expect(breakpoints.lg).toBe('1024px');
      expect(breakpoints.xl).toBe('1280px');
      expect(breakpoints['2xl']).toBe('1536px');
    });

    it('has valid pixel values', () => {
      Object.values(breakpoints).forEach(value => {
        expect(value).toMatch(/^\d+px$/);
      });
    });

    it('has ascending breakpoint values', () => {
      const values = Object.values(breakpoints).map(v => parseInt(v));
      expect(values).toEqual([...values].sort((a, b) => a - b));
    });
  });

  describe('isBreakpoint', () => {
    it('returns true when window width matches breakpoint', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 800,
      });

      expect(isBreakpoint.sm()).toBe(true);
      expect(isBreakpoint.md()).toBe(true);
      expect(isBreakpoint.lg()).toBe(false);
      expect(isBreakpoint.xl()).toBe(false);
      expect(isBreakpoint['2xl']()).toBe(false);
    });

    it('returns false when window is undefined (SSR)', () => {
      const originalWindow = global.window;
      // @ts-expect-error - Testing SSR scenario
      delete global.window;

      expect(isBreakpoint.sm()).toBe(false);
      expect(isBreakpoint.md()).toBe(false);
      expect(isBreakpoint.lg()).toBe(false);
      expect(isBreakpoint.xl()).toBe(false);
      expect(isBreakpoint['2xl']()).toBe(false);

      global.window = originalWindow;
    });

    it('handles exact breakpoint matches', () => {
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 640,
      });

      expect(isBreakpoint.sm()).toBe(true);
      expect(isBreakpoint.md()).toBe(false);
    });
  });

  describe('responsiveSpacing', () => {
    it('has spacing values for all breakpoints', () => {
      expect(responsiveSpacing.xs).toHaveProperty('sm');
      expect(responsiveSpacing.xs).toHaveProperty('md');
      expect(responsiveSpacing.xs).toHaveProperty('lg');

      expect(responsiveSpacing.sm).toHaveProperty('sm');
      expect(responsiveSpacing.sm).toHaveProperty('md');
      expect(responsiveSpacing.sm).toHaveProperty('lg');
    });

    it('has valid rem values', () => {
      Object.values(responsiveSpacing).forEach(breakpoint => {
        Object.values(breakpoint).forEach(value => {
          expect(value).toMatch(/^\d+(\.\d+)?rem$/);
        });
      });
    });

    it('has ascending spacing values', () => {
      Object.values(responsiveSpacing).forEach(breakpoint => {
        const values = Object.values(breakpoint).map(v => parseFloat(v));
        expect(values).toEqual([...values].sort((a, b) => a - b));
      });
    });
  });

  describe('responsiveTypography', () => {
    it('has typography classes for all headings', () => {
      expect(responsiveTypography.h1).toHaveProperty('sm');
      expect(responsiveTypography.h1).toHaveProperty('md');
      expect(responsiveTypography.h1).toHaveProperty('lg');

      expect(responsiveTypography.h2).toHaveProperty('sm');
      expect(responsiveTypography.h2).toHaveProperty('md');
      expect(responsiveTypography.h2).toHaveProperty('lg');
    });

    it('has valid Tailwind classes', () => {
      Object.values(responsiveTypography).forEach(breakpoint => {
        Object.values(breakpoint).forEach(value => {
          expect(typeof value).toBe('string');
          expect(value.length).toBeGreaterThan(0);
          expect(value).toContain('text-');
        });
      });
    });

    it('has appropriate font weights', () => {
      expect(responsiveTypography.h1.sm).toContain('font-bold');
      expect(responsiveTypography.h2.sm).toContain('font-semibold');
      expect(responsiveTypography.h3.sm).toContain('font-semibold');
      expect(responsiveTypography.h4.sm).toContain('font-medium');
    });
  });

  describe('containerMaxWidths', () => {
    it('has correct container max-widths', () => {
      expect(containerMaxWidths.sm).toBe('640px');
      expect(containerMaxWidths.md).toBe('768px');
      expect(containerMaxWidths.lg).toBe('1024px');
      expect(containerMaxWidths.xl).toBe('1280px');
      expect(containerMaxWidths['2xl']).toBe('1536px');
      expect(containerMaxWidths.full).toBe('100%');
    });

    it('has valid width values', () => {
      Object.values(containerMaxWidths).forEach(value => {
        expect(value).toMatch(/^(\d+px|100%)$/);
      });
    });
  });

  describe('responsiveGrid', () => {
    it('has grid column classes', () => {
      expect(responsiveGrid.cols[1]).toBe('grid-cols-1');
      expect(responsiveGrid.cols[2]).toBe('grid-cols-1 sm:grid-cols-2');
      expect(responsiveGrid.cols[3]).toBe(
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      );
      expect(responsiveGrid.cols[4]).toBe(
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
      );
      expect(responsiveGrid.cols[6]).toBe(
        'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'
      );
      expect(responsiveGrid.cols[12]).toBe(
        'grid-cols-4 sm:grid-cols-6 lg:grid-cols-12'
      );
    });

    it('has grid gap classes', () => {
      expect(responsiveGrid.gap.sm).toBe('gap-2 sm:gap-4 lg:gap-6');
      expect(responsiveGrid.gap.md).toBe('gap-4 sm:gap-6 lg:gap-8');
      expect(responsiveGrid.gap.lg).toBe('gap-6 sm:gap-8 lg:gap-12');
    });

    it('has valid Tailwind grid classes', () => {
      Object.values(responsiveGrid.cols).forEach(value => {
        expect(value).toContain('grid-cols-');
      });

      Object.values(responsiveGrid.gap).forEach(value => {
        expect(value).toContain('gap-');
      });
    });
  });

  describe('responsiveSpacingClasses', () => {
    it('has padding classes', () => {
      expect(responsiveSpacingClasses.padding.sm).toBe('p-2 sm:p-4 lg:p-6');
      expect(responsiveSpacingClasses.padding.md).toBe('p-4 sm:p-6 lg:p-8');
      expect(responsiveSpacingClasses.padding.lg).toBe('p-6 sm:p-8 lg:p-12');
      expect(responsiveSpacingClasses.padding.xl).toBe('p-8 sm:p-12 lg:p-16');
    });

    it('has margin classes', () => {
      expect(responsiveSpacingClasses.margin.sm).toBe('m-2 sm:m-4 lg:m-6');
      expect(responsiveSpacingClasses.margin.md).toBe('m-4 sm:m-6 lg:m-8');
      expect(responsiveSpacingClasses.margin.lg).toBe('m-6 sm:m-8 lg:m-12');
      expect(responsiveSpacingClasses.margin.xl).toBe('m-8 sm:m-12 lg:m-16');
    });

    it('has valid Tailwind spacing classes', () => {
      Object.values(responsiveSpacingClasses.padding).forEach(value => {
        expect(value).toContain('p-');
      });

      Object.values(responsiveSpacingClasses.margin).forEach(value => {
        expect(value).toContain('m-');
      });
    });
  });

  describe('responsiveVisibility', () => {
    it('has hidden classes', () => {
      expect(responsiveVisibility.hidden.sm).toBe('hidden sm:block');
      expect(responsiveVisibility.hidden.md).toBe('hidden md:block');
      expect(responsiveVisibility.hidden.lg).toBe('hidden lg:block');
      expect(responsiveVisibility.hidden.xl).toBe('hidden xl:block');
    });

    it('has visible classes', () => {
      expect(responsiveVisibility.visible.sm).toBe('block sm:hidden');
      expect(responsiveVisibility.visible.md).toBe('block md:hidden');
      expect(responsiveVisibility.visible.lg).toBe('block lg:hidden');
      expect(responsiveVisibility.visible.xl).toBe('block xl:hidden');
    });

    it('has valid Tailwind visibility classes', () => {
      Object.values(responsiveVisibility.hidden).forEach(value => {
        expect(value).toContain('hidden');
        expect(value).toContain('block');
      });

      Object.values(responsiveVisibility.visible).forEach(value => {
        expect(value).toContain('block');
        expect(value).toContain('hidden');
      });
    });
  });

  describe('responsive', () => {
    it('exports all responsive utilities', () => {
      expect(responsive).toHaveProperty('breakpoints');
      expect(responsive).toHaveProperty('isBreakpoint');
      expect(responsive).toHaveProperty('spacing');
      expect(responsive).toHaveProperty('typography');
      expect(responsive).toHaveProperty('containerMaxWidths');
      expect(responsive).toHaveProperty('grid');
      expect(responsive).toHaveProperty('spacingClasses');
      expect(responsive).toHaveProperty('visibility');
    });

    it('matches individual exports', () => {
      expect(responsive.breakpoints).toBe(breakpoints);
      expect(responsive.isBreakpoint).toBe(isBreakpoint);
      expect(responsive.spacing).toBe(responsiveSpacing);
      expect(responsive.typography).toBe(responsiveTypography);
      expect(responsive.containerMaxWidths).toBe(containerMaxWidths);
      expect(responsive.grid).toBe(responsiveGrid);
      expect(responsive.spacingClasses).toBe(responsiveSpacingClasses);
      expect(responsive.visibility).toBe(responsiveVisibility);
    });
  });
});
