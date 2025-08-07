# Environment Configuration

This document describes the environment variables and configuration setup for the AWP React Platform.

## Environment Files

### `.env.example`

This file contains example environment variables with placeholder values. It serves as a template for setting up your local environment.

### `.env.local`

This file contains your local environment variables. It should not be committed to version control.

## Required Environment Variables

### Authentication

- `NEXTAUTH_SECRET`: Secret key for NextAuth.js (required for production)
- `NEXTAUTH_JWT_SECRET`: Secret key for JWT tokens (required for production)
- `NEXTAUTH_URL`: The base URL of your application (defaults to http://localhost:3000)

### Application Configuration

- `NEXT_PUBLIC_APP_NAME`: The name of your application (defaults to "AWP React Platform")
- `NEXT_PUBLIC_APP_VERSION`: The version of your application (defaults to "0.1.0")
- `NEXT_PUBLIC_APP_URL`: The base URL of your application (defaults to http://localhost:3000)

### Feature Flags

- `NEXT_PUBLIC_DEBUG`: Enable debug mode (defaults to false)
- `NEXT_PUBLIC_ENABLE_ANALYTICS`: Enable analytics features (defaults to false)
- `NEXT_PUBLIC_ENABLE_NOTIFICATIONS`: Enable notification features (defaults to false)

## Optional Environment Variables

### Database (for future backend integration)

- `DATABASE_URL`: PostgreSQL connection string

### External APIs (for future integrations)

- `GOOGLE_CLIENT_ID`: Google OAuth client ID
- `GOOGLE_CLIENT_SECRET`: Google OAuth client secret
- `GITHUB_CLIENT_ID`: GitHub OAuth client ID
- `GITHUB_CLIENT_SECRET`: GitHub OAuth client secret

### File Storage (for future document management)

- `AWS_ACCESS_KEY_ID`: AWS access key for S3
- `AWS_SECRET_ACCESS_KEY`: AWS secret key for S3
- `AWS_REGION`: AWS region (defaults to us-east-1)
- `AWS_S3_BUCKET`: S3 bucket name for file storage

### Email Configuration (for future notifications)

- `SMTP_HOST`: SMTP server host
- `SMTP_PORT`: SMTP server port
- `SMTP_USER`: SMTP username
- `SMTP_PASS`: SMTP password

## Setup Instructions

1. Copy the example environment file:

   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and set the required values:

   ```bash
   # Generate a secure secret for NextAuth
   openssl rand -base64 32
   ```

3. Set the generated secret in your `.env.local`:

   ```
   NEXTAUTH_SECRET=your-generated-secret-here
   NEXTAUTH_JWT_SECRET=your-generated-secret-here
   ```

4. Update other variables as needed for your environment.

## Environment Validation

The application includes environment validation that will:

- Check for required environment variables on startup
- Provide helpful error messages for missing variables
- Allow the application to start in development mode with warnings
- Fail fast in production mode if required variables are missing

## Configuration Access

Environment variables are accessed through the configuration system:

```typescript
import { config } from '@/lib/config';

// Access app configuration
console.log(config.app.name);
console.log(config.app.version);

// Access feature flags
if (config.features.analytics) {
  // Enable analytics
}

// Access auth configuration
console.log(config.auth.url);
```

## Security Notes

- Never commit `.env.local` or any file containing real secrets to version control
- Use strong, unique secrets for `NEXTAUTH_SECRET` and `NEXTAUTH_JWT_SECRET`
- Rotate secrets regularly in production
- Use different secrets for different environments (development, staging, production)
- Consider using a secrets management service in production

## Development vs Production

### Development

- Environment validation shows warnings but doesn't prevent startup
- Debug mode can be enabled for additional logging
- Local development URLs are used by default

### Production

- Environment validation is strict and will prevent startup if required variables are missing
- Debug mode should be disabled
- Production URLs and secrets must be properly configured
- All external service credentials must be set
