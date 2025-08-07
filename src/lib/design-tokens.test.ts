import { describe, expect, it } from 'vitest';
import {
  animation,
  borderRadius,
  boxShadow,
  colors,
  cssVariables,
  darkModeVariables,
  designTokens,
  keyframes,
  spacing,
  typography,
} from './design-tokens';

describe('Design Tokens Module', () => {
  describe('colors', () => {
    it('has primary color palette', () => {
      expect(colors.primary).toBeDefined();
      expect(colors.primary[50]).toBe('#eff6ff');
      expect(colors.primary[500]).toBe('#3b82f6');
      expect(colors.primary[900]).toBe('#1e3a8a');
    });

    it('has secondary color palette', () => {
      expect(colors.secondary).toBeDefined();
      expect(colors.secondary[50]).toBe('#f8fafc');
      expect(colors.secondary[500]).toBe('#64748b');
      expect(colors.secondary[900]).toBe('#0f172a');
    });

    it('has success color palette', () => {
      expect(colors.success).toBeDefined();
      expect(colors.success[50]).toBe('#f0fdf4');
      expect(colors.success[500]).toBe('#22c55e');
      expect(colors.success[900]).toBe('#14532d');
    });

    it('has warning color palette', () => {
      expect(colors.warning).toBeDefined();
      expect(colors.warning[50]).toBe('#fffbeb');
      expect(colors.warning[500]).toBe('#f59e0b');
      expect(colors.warning[900]).toBe('#78350f');
    });

    it('has error color palette', () => {
      expect(colors.error).toBeDefined();
      expect(colors.error[50]).toBe('#fef2f2');
      expect(colors.error[500]).toBe('#ef4444');
      expect(colors.error[900]).toBe('#7f1d1d');
    });

    it('has neutral color palette', () => {
      expect(colors.neutral).toBeDefined();
      expect(colors.neutral[50]).toBe('#fafafa');
      expect(colors.neutral[500]).toBe('#737373');
      expect(colors.neutral[900]).toBe('#171717');
    });

    it('has valid hex color values', () => {
      const allColors = [
        ...Object.values(colors.primary),
        ...Object.values(colors.secondary),
        ...Object.values(colors.success),
        ...Object.values(colors.warning),
        ...Object.values(colors.error),
        ...Object.values(colors.neutral),
      ];

      allColors.forEach(color => {
        expect(color).toMatch(/^#[0-9A-Fa-f]{6}$/);
      });
    });
  });

  describe('typography', () => {
    it('has font family definitions', () => {
      expect(typography.fontFamily.sans).toContain('var(--font-geist-sans)');
      expect(typography.fontFamily.sans).toContain('system-ui');
      expect(typography.fontFamily.sans).toContain('sans-serif');
      expect(typography.fontFamily.mono).toContain('var(--font-geist-mono)');
      expect(typography.fontFamily.mono).toContain('monospace');
    });

    it('has font size definitions', () => {
      expect(typography.fontSize.xs).toEqual([
        '0.75rem',
        { lineHeight: '1rem' },
      ]);
      expect(typography.fontSize.sm).toEqual([
        '0.875rem',
        { lineHeight: '1.25rem' },
      ]);
      expect(typography.fontSize.base).toEqual([
        '1rem',
        { lineHeight: '1.5rem' },
      ]);
      expect(typography.fontSize.lg).toEqual([
        '1.125rem',
        { lineHeight: '1.75rem' },
      ]);
      expect(typography.fontSize.xl).toEqual([
        '1.25rem',
        { lineHeight: '1.75rem' },
      ]);
      expect(typography.fontSize['2xl']).toEqual([
        '1.5rem',
        { lineHeight: '2rem' },
      ]);
      expect(typography.fontSize['3xl']).toEqual([
        '1.875rem',
        { lineHeight: '2.25rem' },
      ]);
      expect(typography.fontSize['4xl']).toEqual([
        '2.25rem',
        { lineHeight: '2.5rem' },
      ]);
      expect(typography.fontSize['5xl']).toEqual(['3rem', { lineHeight: '1' }]);
      expect(typography.fontSize['6xl']).toEqual([
        '3.75rem',
        { lineHeight: '1' },
      ]);
      expect(typography.fontSize['7xl']).toEqual([
        '4.5rem',
        { lineHeight: '1' },
      ]);
      expect(typography.fontSize['8xl']).toEqual(['6rem', { lineHeight: '1' }]);
      expect(typography.fontSize['9xl']).toEqual(['8rem', { lineHeight: '1' }]);
    });

    it('has valid font size values', () => {
      Object.values(typography.fontSize).forEach(([size, config]) => {
        expect(size).toMatch(/^\d+(\.\d+)?rem$/);
        expect(config).toHaveProperty('lineHeight');
        expect(typeof config.lineHeight).toBe('string');
      });
    });
  });

  describe('spacing', () => {
    it('has spacing values', () => {
      expect(spacing['18']).toBe('4.5rem');
      expect(spacing['88']).toBe('22rem');
      expect(spacing['128']).toBe('32rem');
    });

    it('has valid spacing values', () => {
      Object.values(spacing).forEach(value => {
        expect(value).toMatch(/^\d+(\.\d+)?rem$/);
      });
    });
  });

  describe('borderRadius', () => {
    it('has border radius values', () => {
      expect(borderRadius['4xl']).toBe('2rem');
    });

    it('has valid border radius values', () => {
      Object.values(borderRadius).forEach(value => {
        expect(value).toMatch(/^\d+(\.\d+)?rem$/);
      });
    });
  });

  describe('boxShadow', () => {
    it('has box shadow definitions', () => {
      expect(boxShadow.soft).toContain('rgba(0, 0, 0, 0.07)');
      expect(boxShadow.medium).toContain('rgba(0, 0, 0, 0.1)');
      expect(boxShadow.strong).toContain('rgba(0, 0, 0, 0.15)');
    });

    it('has valid box shadow values', () => {
      Object.values(boxShadow).forEach(value => {
        expect(typeof value).toBe('string');
        expect(value.length).toBeGreaterThan(0);
        expect(value).toContain('rgba');
      });
    });
  });

  describe('animation', () => {
    it('has animation definitions', () => {
      expect(animation['fade-in']).toBe('fadeIn 0.5s ease-in-out');
      expect(animation['slide-up']).toBe('slideUp 0.3s ease-out');
      expect(animation['slide-down']).toBe('slideDown 0.3s ease-out');
      expect(animation['scale-in']).toBe('scaleIn 0.2s ease-out');
    });

    it('has valid animation values', () => {
      Object.values(animation).forEach(value => {
        expect(typeof value).toBe('string');
        expect(value).toMatch(/^[a-zA-Z-]+\s+\d+(\.\d+)?s\s+[a-zA-Z-]+$/);
      });
    });
  });

  describe('keyframes', () => {
    it('has fadeIn keyframes', () => {
      expect(keyframes.fadeIn['0%']).toEqual({ opacity: '0' });
      expect(keyframes.fadeIn['100%']).toEqual({ opacity: '1' });
    });

    it('has slideUp keyframes', () => {
      expect(keyframes.slideUp['0%']).toEqual({
        transform: 'translateY(10px)',
        opacity: '0',
      });
      expect(keyframes.slideUp['100%']).toEqual({
        transform: 'translateY(0)',
        opacity: '1',
      });
    });

    it('has slideDown keyframes', () => {
      expect(keyframes.slideDown['0%']).toEqual({
        transform: 'translateY(-10px)',
        opacity: '0',
      });
      expect(keyframes.slideDown['100%']).toEqual({
        transform: 'translateY(0)',
        opacity: '1',
      });
    });

    it('has scaleIn keyframes', () => {
      expect(keyframes.scaleIn['0%']).toEqual({
        transform: 'scale(0.95)',
        opacity: '0',
      });
      expect(keyframes.scaleIn['100%']).toEqual({
        transform: 'scale(1)',
        opacity: '1',
      });
    });

    it('has valid keyframe structures', () => {
      Object.values(keyframes).forEach(keyframe => {
        expect(keyframe['0%']).toBeDefined();
        expect(keyframe['100%']).toBeDefined();
        expect(keyframe['0%']).toHaveProperty('opacity');
        expect(keyframe['100%']).toHaveProperty('opacity');
      });
    });
  });

  describe('cssVariables', () => {
    it('has radius variables', () => {
      expect(cssVariables.radius).toBe('0.625rem');
      expect(cssVariables['radius-sm']).toBe('calc(var(--radius) - 4px)');
      expect(cssVariables['radius-md']).toBe('calc(var(--radius) - 2px)');
      expect(cssVariables['radius-lg']).toBe('var(--radius)');
      expect(cssVariables['radius-xl']).toBe('calc(var(--radius) + 4px)');
    });

    it('has color variables', () => {
      expect(cssVariables.background).toBe('oklch(1 0 0)');
      expect(cssVariables.foreground).toBe('oklch(0.141 0.005 285.823)');
      expect(cssVariables.primary).toBe('oklch(0.21 0.006 285.885)');
      expect(cssVariables['primary-foreground']).toBe('oklch(0.985 0 0)');
    });

    it('has valid CSS variable values', () => {
      Object.values(cssVariables).forEach(value => {
        expect(typeof value).toBe('string');
        expect(value.length).toBeGreaterThan(0);
      });
    });
  });

  describe('darkModeVariables', () => {
    it('has dark mode color variables', () => {
      expect(darkModeVariables.background).toBe('oklch(0.141 0.005 285.823)');
      expect(darkModeVariables.foreground).toBe('oklch(0.985 0 0)');
      expect(darkModeVariables.primary).toBe('oklch(0.92 0.004 286.32)');
      expect(darkModeVariables['primary-foreground']).toBe(
        'oklch(0.21 0.006 285.885)'
      );
    });

    it('has valid dark mode variable values', () => {
      Object.values(darkModeVariables).forEach(value => {
        expect(typeof value).toBe('string');
        expect(value.length).toBeGreaterThan(0);
      });
    });
  });

  describe('designTokens', () => {
    it('exports all design token categories', () => {
      expect(designTokens).toHaveProperty('colors');
      expect(designTokens).toHaveProperty('typography');
      expect(designTokens).toHaveProperty('spacing');
      expect(designTokens).toHaveProperty('borderRadius');
      expect(designTokens).toHaveProperty('boxShadow');
      expect(designTokens).toHaveProperty('animation');
      expect(designTokens).toHaveProperty('keyframes');
      expect(designTokens).toHaveProperty('cssVariables');
      expect(designTokens).toHaveProperty('darkModeVariables');
    });

    it('matches individual exports', () => {
      expect(designTokens.colors).toBe(colors);
      expect(designTokens.typography).toBe(typography);
      expect(designTokens.spacing).toBe(spacing);
      expect(designTokens.borderRadius).toBe(borderRadius);
      expect(designTokens.boxShadow).toBe(boxShadow);
      expect(designTokens.animation).toBe(animation);
      expect(designTokens.keyframes).toBe(keyframes);
      expect(designTokens.cssVariables).toBe(cssVariables);
      expect(designTokens.darkModeVariables).toBe(darkModeVariables);
    });
  });
});
