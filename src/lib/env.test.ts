import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  getBooleanEnvVar,
  getEnvVar,
  getEnvironment,
  getNumberEnvVar,
  initializeEnvironment,
  isDevelopment,
  isProduction,
  isTest,
  validateEnvironment,
} from './env';

// Store original environment
const originalEnv = process.env;

describe('Environment Module', () => {
  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('validateEnvironment', () => {
    it('throws error when required environment variables are missing', () => {
      delete process.env.NEXTAUTH_SECRET;
      delete process.env.NEXTAUTH_JWT_SECRET;

      expect(() => validateEnvironment()).toThrow(
        'Missing required environment variables: NEXTAUTH_SECRET, NEXTAUTH_JWT_SECRET'
      );
    });

    it('throws error when required environment variables are empty', () => {
      process.env.NEXTAUTH_SECRET = '';
      process.env.NEXTAUTH_JWT_SECRET = '';

      expect(() => validateEnvironment()).toThrow(
        'Missing required environment variables: NEXTAUTH_SECRET, NEXTAUTH_JWT_SECRET'
      );
    });

    it('does not throw when all required environment variables are set', () => {
      process.env.NEXTAUTH_SECRET = 'test-secret';
      process.env.NEXTAUTH_JWT_SECRET = 'test-jwt-secret';

      expect(() => validateEnvironment()).not.toThrow();
    });
  });

  describe('getEnvVar', () => {
    it('returns environment variable value when set', () => {
      process.env.TEST_VAR = 'test-value';
      expect(getEnvVar('TEST_VAR')).toBe('test-value');
    });

    it('returns fallback value when environment variable is not set', () => {
      delete process.env.TEST_VAR;
      expect(getEnvVar('TEST_VAR', 'fallback')).toBe('fallback');
    });

    it('returns fallback value when environment variable is empty', () => {
      process.env.TEST_VAR = '';
      expect(getEnvVar('TEST_VAR', 'fallback')).toBe('fallback');
    });

    it('throws error when environment variable is required but not set', () => {
      delete process.env.TEST_VAR;
      expect(() => getEnvVar('TEST_VAR')).toThrow(
        'Environment variable TEST_VAR is required but not set'
      );
    });

    it('throws error when environment variable is required but empty', () => {
      process.env.TEST_VAR = '';
      expect(() => getEnvVar('TEST_VAR')).toThrow(
        'Environment variable TEST_VAR is required but not set'
      );
    });
  });

  describe('getBooleanEnvVar', () => {
    it('returns true for "true" value', () => {
      process.env.TEST_BOOL = 'true';
      expect(getBooleanEnvVar('TEST_BOOL')).toBe(true);
    });

    it('returns true for "TRUE" value', () => {
      process.env.TEST_BOOL = 'TRUE';
      expect(getBooleanEnvVar('TEST_BOOL')).toBe(true);
    });

    it('returns false for "false" value', () => {
      process.env.TEST_BOOL = 'false';
      expect(getBooleanEnvVar('TEST_BOOL')).toBe(false);
    });

    it('returns false for "FALSE" value', () => {
      process.env.TEST_BOOL = 'FALSE';
      expect(getBooleanEnvVar('TEST_BOOL')).toBe(false);
    });

    it('returns false for any other value', () => {
      process.env.TEST_BOOL = 'random';
      expect(getBooleanEnvVar('TEST_BOOL')).toBe(false);
    });

    it('returns fallback when environment variable is not set', () => {
      delete process.env.TEST_BOOL;
      expect(getBooleanEnvVar('TEST_BOOL', true)).toBe(true);
      expect(getBooleanEnvVar('TEST_BOOL', false)).toBe(false);
    });

    it('returns false as default fallback', () => {
      delete process.env.TEST_BOOL;
      expect(getBooleanEnvVar('TEST_BOOL')).toBe(false);
    });

    it('returns fallback when environment variable is empty', () => {
      process.env.TEST_BOOL = '';
      expect(getBooleanEnvVar('TEST_BOOL', true)).toBe(true);
    });
  });

  describe('getNumberEnvVar', () => {
    it('returns number value when environment variable is set', () => {
      process.env.TEST_NUM = '42';
      expect(getNumberEnvVar('TEST_NUM')).toBe(42);
    });

    it('returns fallback when environment variable is not set', () => {
      delete process.env.TEST_NUM;
      expect(getNumberEnvVar('TEST_NUM', 100)).toBe(100);
    });

    it('returns fallback when environment variable is empty', () => {
      process.env.TEST_NUM = '';
      expect(getNumberEnvVar('TEST_NUM', 100)).toBe(100);
    });

    it('throws error when environment variable is required but not set', () => {
      delete process.env.TEST_NUM;
      expect(() => getNumberEnvVar('TEST_NUM')).toThrow(
        'Environment variable TEST_NUM is required but not set'
      );
    });

    it('throws error when environment variable is required but empty', () => {
      process.env.TEST_NUM = '';
      expect(() => getNumberEnvVar('TEST_NUM')).toThrow(
        'Environment variable TEST_NUM is required but not set'
      );
    });

    it('throws error when environment variable is not a valid number', () => {
      process.env.TEST_NUM = 'not-a-number';
      expect(() => getNumberEnvVar('TEST_NUM')).toThrow(
        'Environment variable TEST_NUM must be a valid number'
      );
    });

    it('handles zero values correctly', () => {
      process.env.TEST_NUM = '0';
      expect(getNumberEnvVar('TEST_NUM')).toBe(0);
    });

    it('handles negative values correctly', () => {
      process.env.TEST_NUM = '-42';
      expect(getNumberEnvVar('TEST_NUM')).toBe(-42);
    });
  });

  describe('isDevelopment', () => {
    it('returns true when NODE_ENV is development', () => {
      const originalNodeEnv = process.env.NODE_ENV;
      Object.defineProperty(process.env, 'NODE_ENV', {
        value: 'development',
        writable: true,
      });
      expect(isDevelopment()).toBe(true);
      Object.defineProperty(process.env, 'NODE_ENV', {
        value: originalNodeEnv,
        writable: true,
      });
    });

    it('returns false when NODE_ENV is not development', () => {
      const originalNodeEnv = process.env.NODE_ENV;
      Object.defineProperty(process.env, 'NODE_ENV', {
        value: 'production',
        writable: true,
      });
      expect(isDevelopment()).toBe(false);

      Object.defineProperty(process.env, 'NODE_ENV', {
        value: 'test',
        writable: true,
      });
      expect(isDevelopment()).toBe(false);

      Object.defineProperty(process.env, 'NODE_ENV', {
        value: originalNodeEnv,
        writable: true,
      });
    });

    it('returns false when NODE_ENV is not set', () => {
      const originalNodeEnv = process.env.NODE_ENV;
      Object.defineProperty(process.env, 'NODE_ENV', {
        value: undefined,
        writable: true,
      });
      expect(isDevelopment()).toBe(false);
      Object.defineProperty(process.env, 'NODE_ENV', {
        value: originalNodeEnv,
        writable: true,
      });
    });
  });

  describe('isProduction', () => {
    it('returns true when NODE_ENV is production', () => {
      const originalNodeEnv = process.env.NODE_ENV;
      Object.defineProperty(process.env, 'NODE_ENV', {
        value: 'production',
        writable: true,
      });
      expect(isProduction()).toBe(true);
      Object.defineProperty(process.env, 'NODE_ENV', {
        value: originalNodeEnv,
        writable: true,
      });
    });

    it('returns false when NODE_ENV is not production', () => {
      const originalNodeEnv = process.env.NODE_ENV;
      Object.defineProperty(process.env, 'NODE_ENV', {
        value: 'development',
        writable: true,
      });
      expect(isProduction()).toBe(false);

      Object.defineProperty(process.env, 'NODE_ENV', {
        value: 'test',
        writable: true,
      });
      expect(isProduction()).toBe(false);

      Object.defineProperty(process.env, 'NODE_ENV', {
        value: originalNodeEnv,
        writable: true,
      });
    });

    it('returns false when NODE_ENV is not set', () => {
      const originalNodeEnv = process.env.NODE_ENV;
      Object.defineProperty(process.env, 'NODE_ENV', {
        value: undefined,
        writable: true,
      });
      expect(isProduction()).toBe(false);
      Object.defineProperty(process.env, 'NODE_ENV', {
        value: originalNodeEnv,
        writable: true,
      });
    });
  });

  describe('isTest', () => {
    it('returns true when NODE_ENV is test', () => {
      const originalNodeEnv = process.env.NODE_ENV;
      Object.defineProperty(process.env, 'NODE_ENV', {
        value: 'test',
        writable: true,
      });
      expect(isTest()).toBe(true);
      Object.defineProperty(process.env, 'NODE_ENV', {
        value: originalNodeEnv,
        writable: true,
      });
    });

    it('returns false when NODE_ENV is not test', () => {
      const originalNodeEnv = process.env.NODE_ENV;
      Object.defineProperty(process.env, 'NODE_ENV', {
        value: 'development',
        writable: true,
      });
      expect(isTest()).toBe(false);

      Object.defineProperty(process.env, 'NODE_ENV', {
        value: 'production',
        writable: true,
      });
      expect(isTest()).toBe(false);

      Object.defineProperty(process.env, 'NODE_ENV', {
        value: originalNodeEnv,
        writable: true,
      });
    });

    it('returns false when NODE_ENV is not set', () => {
      const originalNodeEnv = process.env.NODE_ENV;
      Object.defineProperty(process.env, 'NODE_ENV', {
        value: undefined,
        writable: true,
      });
      expect(isTest()).toBe(false);
      Object.defineProperty(process.env, 'NODE_ENV', {
        value: originalNodeEnv,
        writable: true,
      });
    });
  });

  describe('getEnvironment', () => {
    it('returns NODE_ENV value when set', () => {
      const originalNodeEnv = process.env.NODE_ENV;

      Object.defineProperty(process.env, 'NODE_ENV', {
        value: 'production',
        writable: true,
      });
      expect(getEnvironment()).toBe('production');

      Object.defineProperty(process.env, 'NODE_ENV', {
        value: 'development',
        writable: true,
      });
      expect(getEnvironment()).toBe('development');

      Object.defineProperty(process.env, 'NODE_ENV', {
        value: 'test',
        writable: true,
      });
      expect(getEnvironment()).toBe('test');

      Object.defineProperty(process.env, 'NODE_ENV', {
        value: originalNodeEnv,
        writable: true,
      });
    });

    it('returns development as default when NODE_ENV is not set', () => {
      const originalNodeEnv = process.env.NODE_ENV;
      Object.defineProperty(process.env, 'NODE_ENV', {
        value: undefined,
        writable: true,
      });
      expect(getEnvironment()).toBe('development');
      Object.defineProperty(process.env, 'NODE_ENV', {
        value: originalNodeEnv,
        writable: true,
      });
    });
  });

  describe('initializeEnvironment', () => {
    it('does not throw when environment is valid', () => {
      process.env.NEXTAUTH_SECRET = 'test-secret';
      process.env.NEXTAUTH_JWT_SECRET = 'test-jwt-secret';

      expect(() => initializeEnvironment()).not.toThrow();
    });

    it('throws error in production when environment is invalid', () => {
      const originalNodeEnv = process.env.NODE_ENV;
      Object.defineProperty(process.env, 'NODE_ENV', {
        value: 'production',
        writable: true,
      });
      delete process.env.NEXTAUTH_SECRET;
      delete process.env.NEXTAUTH_JWT_SECRET;

      expect(() => initializeEnvironment()).toThrow(
        'Missing required environment variables: NEXTAUTH_SECRET, NEXTAUTH_JWT_SECRET'
      );

      Object.defineProperty(process.env, 'NODE_ENV', {
        value: originalNodeEnv,
        writable: true,
      });
    });

    it('does not throw in development when environment is invalid', () => {
      const originalNodeEnv = process.env.NODE_ENV;
      Object.defineProperty(process.env, 'NODE_ENV', {
        value: 'development',
        writable: true,
      });
      delete process.env.NEXTAUTH_SECRET;
      delete process.env.NEXTAUTH_JWT_SECRET;

      expect(() => initializeEnvironment()).not.toThrow();

      Object.defineProperty(process.env, 'NODE_ENV', {
        value: originalNodeEnv,
        writable: true,
      });
    });

    it('does not throw in test when environment is invalid', () => {
      const originalNodeEnv = process.env.NODE_ENV;
      Object.defineProperty(process.env, 'NODE_ENV', {
        value: 'test',
        writable: true,
      });
      delete process.env.NEXTAUTH_SECRET;
      delete process.env.NEXTAUTH_JWT_SECRET;

      expect(() => initializeEnvironment()).not.toThrow();

      Object.defineProperty(process.env, 'NODE_ENV', {
        value: originalNodeEnv,
        writable: true,
      });
    });
  });
});
