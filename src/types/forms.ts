/**
 * Form Types
 * Type definitions for form handling and validation
 */

export interface FormField {
  name: string;
  label: string;
  type:
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'tel'
    | 'url'
    | 'textarea'
    | 'select'
    | 'checkbox'
    | 'radio'
    | 'file'
    | 'date'
    | 'datetime-local';
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  options?: FormFieldOption[];
  validation?: FormValidation;
  defaultValue?: unknown;
}

export interface FormFieldOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface FormValidation {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  min?: number;
  max?: number;
  custom?: (value: unknown) => string | undefined;
}

export interface FormState<T = Record<string, unknown>> {
  values: T;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  isValid: boolean;
  isDirty: boolean;
}

export interface FormConfig<T = Record<string, unknown>> {
  initialValues: T;
  validationSchema?: unknown; // Zod schema or similar
  onSubmit: (values: T) => void | Promise<void>;
  onError?: (errors: Record<string, string>) => void;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  validateOnSubmit?: boolean;
}

export interface FormFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  touched?: boolean;
  value?: unknown;
  onChange?: (value: unknown) => void;
  onBlur?: () => void;
  options?: FormFieldOption[];
}

export interface FormSection {
  title: string;
  description?: string;
  fields: FormField[];
  collapsible?: boolean;
  collapsed?: boolean;
}

export interface FormLayout {
  sections: FormSection[];
  submitText?: string;
  cancelText?: string;
  showCancel?: boolean;
  onSubmit?: () => void;
  onCancel?: () => void;
}

export interface FormError {
  field: string;
  message: string;
}

export interface FormSuccess {
  message: string;
  data?: unknown;
}

export interface FormContextValue<T = Record<string, unknown>> {
  formState: FormState<T>;
  setFieldValue: (name: string, value: unknown) => void;
  setFieldError: (name: string, error: string) => void;
  setFieldTouched: (name: string, touched: boolean) => void;
  handleSubmit: (e?: React.FormEvent) => void;
  handleReset: () => void;
  validateField: (name: string) => void;
  validateForm: () => Promise<boolean>;
}
