/**
 * Responsive Utilities
 * Breakpoint helpers and responsive design utilities
 */

// Breakpoint values (matching Tailwind CSS defaults)
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Breakpoint helpers for JavaScript
export const isBreakpoint = {
  sm: () => typeof window !== 'undefined' && window.innerWidth >= 640,
  md: () => typeof window !== 'undefined' && window.innerWidth >= 768,
  lg: () => typeof window !== 'undefined' && window.innerWidth >= 1024,
  xl: () => typeof window !== 'undefined' && window.innerWidth >= 1280,
  '2xl': () => typeof window !== 'undefined' && window.innerWidth >= 1536,
} as const;

// Responsive spacing scale
export const responsiveSpacing = {
  xs: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
  },
  sm: {
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
  },
  md: {
    sm: '1.5rem',
    md: '2rem',
    lg: '3rem',
  },
  lg: {
    sm: '2rem',
    md: '3rem',
    lg: '4rem',
  },
  xl: {
    sm: '3rem',
    md: '4rem',
    lg: '6rem',
  },
} as const;

// Responsive typography scale
export const responsiveTypography = {
  h1: {
    sm: 'text-2xl font-bold',
    md: 'text-3xl font-bold',
    lg: 'text-4xl font-bold',
  },
  h2: {
    sm: 'text-xl font-semibold',
    md: 'text-2xl font-semibold',
    lg: 'text-3xl font-semibold',
  },
  h3: {
    sm: 'text-lg font-semibold',
    md: 'text-xl font-semibold',
    lg: 'text-2xl font-semibold',
  },
  h4: {
    sm: 'text-base font-medium',
    md: 'text-lg font-medium',
    lg: 'text-xl font-medium',
  },
  body: {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  },
  caption: {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  },
} as const;

// Container max-widths
export const containerMaxWidths = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  full: '100%',
} as const;

// Responsive grid columns
export const responsiveGrid = {
  cols: {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
    12: 'grid-cols-4 sm:grid-cols-6 lg:grid-cols-12',
  },
  gap: {
    sm: 'gap-2 sm:gap-4 lg:gap-6',
    md: 'gap-4 sm:gap-6 lg:gap-8',
    lg: 'gap-6 sm:gap-8 lg:gap-12',
  },
} as const;

// Responsive padding and margin
export const responsiveSpacingClasses = {
  padding: {
    sm: 'p-2 sm:p-4 lg:p-6',
    md: 'p-4 sm:p-6 lg:p-8',
    lg: 'p-6 sm:p-8 lg:p-12',
    xl: 'p-8 sm:p-12 lg:p-16',
  },
  margin: {
    sm: 'm-2 sm:m-4 lg:m-6',
    md: 'm-4 sm:m-6 lg:m-8',
    lg: 'm-6 sm:m-8 lg:m-12',
    xl: 'm-8 sm:m-12 lg:m-16',
  },
} as const;

// Responsive visibility classes
export const responsiveVisibility = {
  hidden: {
    sm: 'hidden sm:block',
    md: 'hidden md:block',
    lg: 'hidden lg:block',
    xl: 'hidden xl:block',
  },
  visible: {
    sm: 'block sm:hidden',
    md: 'block md:hidden',
    lg: 'block lg:hidden',
    xl: 'block xl:hidden',
  },
} as const;

// Export all responsive utilities
export const responsive = {
  breakpoints,
  isBreakpoint,
  spacing: responsiveSpacing,
  typography: responsiveTypography,
  containerMaxWidths,
  grid: responsiveGrid,
  spacingClasses: responsiveSpacingClasses,
  visibility: responsiveVisibility,
} as const;
