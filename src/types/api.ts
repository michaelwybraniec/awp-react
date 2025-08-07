/**
 * API Types
 * Type definitions for API requests and responses
 */

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  errors?: Record<string, string[]>;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    totalPages?: number;
  };
}

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
  details?: Record<string, unknown>;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  search?: string;
  filters?: Record<string, unknown>;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface ApiRequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  headers?: Record<string, string>;
  params?: Record<string, unknown>;
  data?: unknown;
  timeout?: number;
  withCredentials?: boolean;
}

export interface ApiClient {
  get<T>(url: string, config?: ApiRequestConfig): Promise<ApiResponse<T>>;
  post<T>(
    url: string,
    data?: unknown,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<T>>;
  put<T>(
    url: string,
    data?: unknown,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<T>>;
  patch<T>(
    url: string,
    data?: unknown,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<T>>;
  delete<T>(url: string, config?: ApiRequestConfig): Promise<ApiResponse<T>>;
}

export interface ApiEndpoint {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  requiresAuth?: boolean;
  requiredPermissions?: string[];
}

export interface ApiEndpoints {
  auth: {
    login: ApiEndpoint;
    register: ApiEndpoint;
    logout: ApiEndpoint;
    refresh: ApiEndpoint;
    forgotPassword: ApiEndpoint;
    resetPassword: ApiEndpoint;
    verifyEmail: ApiEndpoint;
  };
  users: {
    profile: ApiEndpoint;
    update: ApiEndpoint;
    delete: ApiEndpoint;
    list: ApiEndpoint;
  };
  labs: {
    list: ApiEndpoint;
    create: ApiEndpoint;
    update: ApiEndpoint;
    delete: ApiEndpoint;
    details: ApiEndpoint;
  };
  pharmaceuticals: {
    list: ApiEndpoint;
    create: ApiEndpoint;
    update: ApiEndpoint;
    delete: ApiEndpoint;
    details: ApiEndpoint;
  };
  proposals: {
    list: ApiEndpoint;
    create: ApiEndpoint;
    update: ApiEndpoint;
    delete: ApiEndpoint;
    details: ApiEndpoint;
  };
}
