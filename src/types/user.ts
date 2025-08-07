/**
 * User Types
 * Type definitions for user-related data
 */

import { UserRole, UserStatus } from '@/lib/constants';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  status: UserStatus;
  avatar?: string;
  phone?: string;
  createdAt: string;
  updatedAt: string;
  lastLoginAt?: string;
  emailVerified: boolean;
  twoFactorEnabled: boolean;
}

export interface UserProfile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  bio?: string;
  location?: string;
  website?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  preferences: UserPreferences;
  createdAt: string;
  updatedAt: string;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: string;
  timezone: string;
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  privacy: {
    profileVisibility: 'public' | 'private' | 'connections';
    showEmail: boolean;
    showPhone: boolean;
  };
}

export interface AuthUser {
  user: User;
  profile?: UserProfile;
  session: {
    id: string;
    expiresAt: string;
    createdAt: string;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  role: UserRole;
  acceptTerms: boolean;
}

export interface PasswordResetRequest {
  email: string;
}

export interface PasswordResetConfirm {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface UserUpdateData {
  name?: string;
  email?: string;
  phone?: string;
  avatar?: string;
}

export interface ProfileUpdateData {
  firstName?: string;
  lastName?: string;
  bio?: string;
  location?: string;
  website?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}
