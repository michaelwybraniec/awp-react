/**
 * Common Types
 * Shared type definitions used across the application
 */

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

export interface Contact {
  email: string;
  phone?: string;
  website?: string;
  socialMedia?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}

export interface FileUpload {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
  uploadedAt: string;
  uploadedBy: string;
}

export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  actionUrl?: string;
  metadata?: Record<string, any>;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface SortOption {
  field: string;
  direction: 'asc' | 'desc';
}

export interface FilterOption {
  field: string;
  operator:
    | 'eq'
    | 'ne'
    | 'gt'
    | 'gte'
    | 'lt'
    | 'lte'
    | 'in'
    | 'nin'
    | 'like'
    | 'ilike';
  value: any;
}

export interface SearchParams {
  query?: string;
  filters?: FilterOption[];
  sort?: SortOption[];
  pagination?: Partial<Pagination>;
}

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
  group?: string;
}

export interface Breadcrumb {
  label: string;
  href?: string;
  active?: boolean;
}

export interface MenuItem {
  id: string;
  label: string;
  href?: string;
  icon?: React.ComponentType<any>;
  children?: MenuItem[];
  disabled?: boolean;
  external?: boolean;
  badge?: {
    text: string;
    variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  };
}

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
  badge?: string | number;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

export interface ToastProps {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export interface LoadingState {
  isLoading: boolean;
  error?: string;
  retry?: () => void;
}

export interface ErrorState {
  error: string;
  code?: string;
  retry?: () => void;
  details?: Record<string, any>;
}

export interface SuccessState {
  message: string;
  data?: any;
  redirectTo?: string;
}

export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    muted: string;
    border: string;
  };
  fonts: {
    sans: string;
    mono: string;
  };
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
}

export interface AppSettings {
  name: string;
  version: string;
  environment: 'development' | 'staging' | 'production';
  apiUrl: string;
  features: Record<string, boolean>;
  limits: Record<string, number>;
}
