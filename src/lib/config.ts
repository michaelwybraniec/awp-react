/**
 * Application Configuration
 * Centralized configuration management with type safety
 */

export interface AppConfig {
  app: {
    name: string;
    version: string;
    url: string;
    debug: boolean;
  };
  features: {
    analytics: boolean;
    notifications: boolean;
  };
  auth: {
    url: string;
    secret: string;
    jwtSecret: string;
  };
  database: {
    url: string;
  };
}

export const config: AppConfig = {
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || 'AWP React Platform',
    version: process.env.NEXT_PUBLIC_APP_VERSION || '0.1.0',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    debug: process.env.NEXT_PUBLIC_DEBUG === 'true',
  },
  features: {
    analytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
    notifications: process.env.NEXT_PUBLIC_ENABLE_NOTIFICATIONS === 'true',
  },
  auth: {
    url: process.env.NEXTAUTH_URL || 'http://localhost:3000',
    secret: process.env.NEXTAUTH_SECRET || '',
    jwtSecret: process.env.NEXTAUTH_JWT_SECRET || '',
  },
  database: {
    url: process.env.DATABASE_URL || '',
  },
};

// Validation function to ensure required environment variables are set
export function validateConfig(): void {
  const requiredEnvVars = ['NEXTAUTH_SECRET', 'NEXTAUTH_JWT_SECRET'];

  const missingVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

  if (missingVars.length > 0) {
    console.warn(
      `Warning: Missing required environment variables: ${missingVars.join(
        ', '
      )}`
    );
  }
}

// Export individual config sections for convenience
export const { app, features, auth, database } = config;
