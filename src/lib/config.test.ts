import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  app,
  auth,
  config,
  database,
  features,
  validateConfig,
} from './config';

// Mock process.env
const originalEnv = process.env;

describe('Config Module', () => {
  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
    // Clear any test environment variables
    delete process.env.NEXT_PUBLIC_APP_NAME;
    delete process.env.NEXT_PUBLIC_APP_VERSION;
    delete process.env.NEXT_PUBLIC_APP_URL;
    delete process.env.NEXT_PUBLIC_DEBUG;
    delete process.env.NEXT_PUBLIC_ENABLE_ANALYTICS;
    delete process.env.NEXT_PUBLIC_ENABLE_NOTIFICATIONS;
  });

  describe('config object', () => {
    it('has correct app configuration structure', () => {
      expect(config.app).toHaveProperty('name');
      expect(config.app).toHaveProperty('version');
      expect(config.app).toHaveProperty('url');
      expect(config.app).toHaveProperty('debug');
    });

    it('has correct features configuration structure', () => {
      expect(config.features).toHaveProperty('analytics');
      expect(config.features).toHaveProperty('notifications');
    });

    it('has correct auth configuration structure', () => {
      expect(config.auth).toHaveProperty('url');
      expect(config.auth).toHaveProperty('secret');
      expect(config.auth).toHaveProperty('jwtSecret');
    });

    it('has correct database configuration structure', () => {
      expect(config.database).toHaveProperty('url');
    });
  });

  describe('environment variable handling', () => {
    it('uses default values when environment variables are not set', async () => {
      // Clear environment and re-import to get fresh config
      delete process.env.NEXT_PUBLIC_APP_NAME;
      const { config: freshConfig } = await import('./config');

      expect(freshConfig.app.name).toBe('AWP React Platform');
      expect(freshConfig.app.version).toBe('0.1.0');
      expect(freshConfig.app.url).toBe('http://localhost:3000');
      expect(freshConfig.app.debug).toBe(false);
    });

    it('uses environment variables when set', async () => {
      process.env.NEXT_PUBLIC_APP_NAME = 'Test App';
      process.env.NEXT_PUBLIC_APP_VERSION = '1.0.0';
      process.env.NEXT_PUBLIC_APP_URL = 'https://test.com';
      process.env.NEXT_PUBLIC_DEBUG = 'true';

      // Re-import to get fresh config
      const { config: freshConfig } = await import('./config');

      expect(freshConfig.app.name).toBe('Test App');
      expect(freshConfig.app.version).toBe('1.0.0');
      expect(freshConfig.app.url).toBe('https://test.com');
      expect(freshConfig.app.debug).toBe(true);
    });

    it('handles boolean environment variables correctly', async () => {
      process.env.NEXT_PUBLIC_DEBUG = 'false';
      process.env.NEXT_PUBLIC_ENABLE_ANALYTICS = 'true';
      process.env.NEXT_PUBLIC_ENABLE_NOTIFICATIONS = 'false';

      const { config: freshConfig } = await import('./config');

      expect(freshConfig.app.debug).toBe(false);
      expect(freshConfig.features.analytics).toBe(true);
      expect(freshConfig.features.notifications).toBe(false);
    });
  });

  describe('validateConfig function', () => {
    it('does not throw when required environment variables are set', () => {
      process.env.NEXTAUTH_SECRET = 'test-secret';
      process.env.NEXTAUTH_JWT_SECRET = 'test-jwt-secret';

      expect(() => validateConfig()).not.toThrow();
    });

    it('handles missing environment variables gracefully', () => {
      delete process.env.NEXTAUTH_SECRET;
      delete process.env.NEXTAUTH_JWT_SECRET;

      expect(() => validateConfig()).not.toThrow();
    });
  });

  describe('exported config sections', () => {
    it('exports app configuration section', () => {
      expect(app).toBe(config.app);
    });

    it('exports features configuration section', () => {
      expect(features).toBe(config.features);
    });

    it('exports auth configuration section', () => {
      expect(auth).toBe(config.auth);
    });

    it('exports database configuration section', () => {
      expect(database).toBe(config.database);
    });
  });
});
