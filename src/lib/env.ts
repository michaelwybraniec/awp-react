/**
 * Environment Variable Validation
 * Utilities for validating and accessing environment variables
 */

/**
 * Validates that all required environment variables are set
 * @throws Error if required variables are missing
 */
export function validateEnvironment(): void {
  const requiredVars = ['NEXTAUTH_SECRET', 'NEXTAUTH_JWT_SECRET'];

  const missingVars = requiredVars.filter(
    envVar => !process.env[envVar] || process.env[envVar] === ''
  );

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
  }
}

/**
 * Gets an environment variable with a fallback value
 * @param key - Environment variable key
 * @param fallback - Fallback value if environment variable is not set
 * @returns The environment variable value or fallback
 */
export function getEnvVar(key: string, fallback?: string): string {
  const value = process.env[key];

  if (value === undefined || value === '') {
    if (fallback !== undefined) {
      return fallback;
    }
    throw new Error(`Environment variable ${key} is required but not set`);
  }

  return value;
}

/**
 * Gets a boolean environment variable
 * @param key - Environment variable key
 * @param fallback - Fallback value if environment variable is not set
 * @returns Boolean value
 */
export function getBooleanEnvVar(
  key: string,
  fallback: boolean = false
): boolean {
  const value = process.env[key];

  if (value === undefined || value === '') {
    return fallback;
  }

  return value.toLowerCase() === 'true';
}

/**
 * Gets a number environment variable
 * @param key - Environment variable key
 * @param fallback - Fallback value if environment variable is not set
 * @returns Number value
 */
export function getNumberEnvVar(key: string, fallback?: number): number {
  const value = process.env[key];

  if (value === undefined || value === '') {
    if (fallback !== undefined) {
      return fallback;
    }
    throw new Error(`Environment variable ${key} is required but not set`);
  }

  const num = parseInt(value, 10);

  if (isNaN(num)) {
    throw new Error(`Environment variable ${key} must be a valid number`);
  }

  return num;
}

/**
 * Checks if the application is running in development mode
 * @returns True if in development mode
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development';
}

/**
 * Checks if the application is running in production mode
 * @returns True if in production mode
 */
export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production';
}

/**
 * Checks if the application is running in test mode
 * @returns True if in test mode
 */
export function isTest(): boolean {
  return process.env.NODE_ENV === 'test';
}

/**
 * Gets the current environment name
 * @returns Environment name
 */
export function getEnvironment(): string {
  return process.env.NODE_ENV || 'development';
}

/**
 * Validates environment variables on app startup
 * This should be called early in the application lifecycle
 */
export function initializeEnvironment(): void {
  try {
    validateEnvironment();
    console.log('✅ Environment variables validated successfully');
  } catch (error) {
    console.error('❌ Environment validation failed:', error);
    if (isProduction()) {
      throw error;
    }
  }
}
