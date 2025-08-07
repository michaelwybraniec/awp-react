import { describe, expect, it } from 'vitest';
import {
  API_ENDPOINTS,
  ERROR_MESSAGES,
  FILE_UPLOAD,
  NotificationType,
  PAGINATION,
  ProposalStatus,
  SUCCESS_MESSAGES,
  UI,
  UserRole,
  UserStatus,
  VALIDATION,
} from './constants';

describe('Constants Module', () => {
  describe('UserRole enum', () => {
    it('has correct role values', () => {
      expect(UserRole.LAB).toBe('lab');
      expect(UserRole.PHARMACEUTICAL).toBe('pharmaceutical');
      expect(UserRole.ADMIN).toBe('admin');
    });

    it('has all required roles', () => {
      const roles = Object.values(UserRole);
      expect(roles).toHaveLength(3);
      expect(roles).toContain('lab');
      expect(roles).toContain('pharmaceutical');
      expect(roles).toContain('admin');
    });
  });

  describe('UserStatus enum', () => {
    it('has correct status values', () => {
      expect(UserStatus.ACTIVE).toBe('active');
      expect(UserStatus.INACTIVE).toBe('inactive');
      expect(UserStatus.PENDING).toBe('pending');
      expect(UserStatus.SUSPENDED).toBe('suspended');
    });

    it('has all required statuses', () => {
      const statuses = Object.values(UserStatus);
      expect(statuses).toHaveLength(4);
      expect(statuses).toContain('active');
      expect(statuses).toContain('inactive');
      expect(statuses).toContain('pending');
      expect(statuses).toContain('suspended');
    });
  });

  describe('ProposalStatus enum', () => {
    it('has correct proposal status values', () => {
      expect(ProposalStatus.DRAFT).toBe('draft');
      expect(ProposalStatus.SUBMITTED).toBe('submitted');
      expect(ProposalStatus.UNDER_REVIEW).toBe('under_review');
      expect(ProposalStatus.APPROVED).toBe('approved');
      expect(ProposalStatus.REJECTED).toBe('rejected');
      expect(ProposalStatus.COMPLETED).toBe('completed');
    });

    it('has all required proposal statuses', () => {
      const statuses = Object.values(ProposalStatus);
      expect(statuses).toHaveLength(6);
      expect(statuses).toContain('draft');
      expect(statuses).toContain('submitted');
      expect(statuses).toContain('under_review');
      expect(statuses).toContain('approved');
      expect(statuses).toContain('rejected');
      expect(statuses).toContain('completed');
    });
  });

  describe('NotificationType enum', () => {
    it('has correct notification type values', () => {
      expect(NotificationType.INFO).toBe('info');
      expect(NotificationType.SUCCESS).toBe('success');
      expect(NotificationType.WARNING).toBe('warning');
      expect(NotificationType.ERROR).toBe('error');
    });

    it('has all required notification types', () => {
      const types = Object.values(NotificationType);
      expect(types).toHaveLength(4);
      expect(types).toContain('info');
      expect(types).toContain('success');
      expect(types).toContain('warning');
      expect(types).toContain('error');
    });
  });

  describe('API_ENDPOINTS', () => {
    it('has correct auth endpoints', () => {
      expect(API_ENDPOINTS.AUTH.LOGIN).toBe('/api/auth/login');
      expect(API_ENDPOINTS.AUTH.REGISTER).toBe('/api/auth/register');
      expect(API_ENDPOINTS.AUTH.LOGOUT).toBe('/api/auth/logout');
      expect(API_ENDPOINTS.AUTH.REFRESH).toBe('/api/auth/refresh');
    });

    it('has correct user endpoints', () => {
      expect(API_ENDPOINTS.USERS.PROFILE).toBe('/api/users/profile');
      expect(API_ENDPOINTS.USERS.UPDATE).toBe('/api/users/update');
      expect(API_ENDPOINTS.USERS.DELETE).toBe('/api/users/delete');
    });

    it('has correct lab endpoints', () => {
      expect(API_ENDPOINTS.LABS.LIST).toBe('/api/labs');
      expect(API_ENDPOINTS.LABS.CREATE).toBe('/api/labs');
      expect(API_ENDPOINTS.LABS.UPDATE).toBe('/api/labs/[id]');
      expect(API_ENDPOINTS.LABS.DELETE).toBe('/api/labs/[id]');
    });

    it('has correct pharmaceutical endpoints', () => {
      expect(API_ENDPOINTS.PHARMACEUTICALS.LIST).toBe('/api/pharmaceuticals');
      expect(API_ENDPOINTS.PHARMACEUTICALS.CREATE).toBe('/api/pharmaceuticals');
      expect(API_ENDPOINTS.PHARMACEUTICALS.UPDATE).toBe(
        '/api/pharmaceuticals/[id]'
      );
      expect(API_ENDPOINTS.PHARMACEUTICALS.DELETE).toBe(
        '/api/pharmaceuticals/[id]'
      );
    });

    it('has correct proposal endpoints', () => {
      expect(API_ENDPOINTS.PROPOSALS.LIST).toBe('/api/proposals');
      expect(API_ENDPOINTS.PROPOSALS.CREATE).toBe('/api/proposals');
      expect(API_ENDPOINTS.PROPOSALS.UPDATE).toBe('/api/proposals/[id]');
      expect(API_ENDPOINTS.PROPOSALS.DELETE).toBe('/api/proposals/[id]');
    });
  });

  describe('PAGINATION', () => {
    it('has correct pagination values', () => {
      expect(PAGINATION.DEFAULT_PAGE_SIZE).toBe(10);
      expect(PAGINATION.MAX_PAGE_SIZE).toBe(100);
      expect(PAGINATION.DEFAULT_PAGE).toBe(1);
    });

    it('has reasonable pagination limits', () => {
      expect(PAGINATION.DEFAULT_PAGE_SIZE).toBeGreaterThan(0);
      expect(PAGINATION.MAX_PAGE_SIZE).toBeGreaterThan(
        PAGINATION.DEFAULT_PAGE_SIZE
      );
      expect(PAGINATION.DEFAULT_PAGE).toBeGreaterThan(0);
    });
  });

  describe('FILE_UPLOAD', () => {
    it('has correct file size limit', () => {
      expect(FILE_UPLOAD.MAX_SIZE).toBe(10 * 1024 * 1024); // 10MB
    });

    it('has allowed file types', () => {
      expect(FILE_UPLOAD.ALLOWED_TYPES).toContain('image/jpeg');
      expect(FILE_UPLOAD.ALLOWED_TYPES).toContain('image/png');
      expect(FILE_UPLOAD.ALLOWED_TYPES).toContain('image/gif');
      expect(FILE_UPLOAD.ALLOWED_TYPES).toContain('application/pdf');
      expect(FILE_UPLOAD.ALLOWED_TYPES).toContain('application/msword');
      expect(FILE_UPLOAD.ALLOWED_TYPES).toContain(
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      );
    });

    it('has reasonable file size limit', () => {
      expect(FILE_UPLOAD.MAX_SIZE).toBeGreaterThan(0);
      expect(FILE_UPLOAD.MAX_SIZE).toBeLessThanOrEqual(50 * 1024 * 1024); // Max 50MB
    });
  });

  describe('VALIDATION', () => {
    it('has correct password validation rules', () => {
      expect(VALIDATION.PASSWORD.MIN_LENGTH).toBe(8);
      expect(VALIDATION.PASSWORD.REQUIRE_UPPERCASE).toBe(true);
      expect(VALIDATION.PASSWORD.REQUIRE_LOWERCASE).toBe(true);
      expect(VALIDATION.PASSWORD.REQUIRE_NUMBERS).toBe(true);
      expect(VALIDATION.PASSWORD.REQUIRE_SPECIAL_CHARS).toBe(true);
    });

    it('has email validation pattern', () => {
      expect(VALIDATION.EMAIL.PATTERN).toBeInstanceOf(RegExp);
      expect(VALIDATION.EMAIL.PATTERN.test('test@example.com')).toBe(true);
      expect(VALIDATION.EMAIL.PATTERN.test('invalid-email')).toBe(false);
    });

    it('has phone validation pattern', () => {
      expect(VALIDATION.PHONE.PATTERN).toBeInstanceOf(RegExp);
      expect(VALIDATION.PHONE.PATTERN.test('+1234567890')).toBe(true);
      expect(VALIDATION.PHONE.PATTERN.test('123-456-7890')).toBe(true);
      expect(VALIDATION.PHONE.PATTERN.test('invalid-phone')).toBe(false);
    });
  });

  describe('UI', () => {
    it('has correct breakpoints', () => {
      expect(UI.BREAKPOINTS.SM).toBe(640);
      expect(UI.BREAKPOINTS.MD).toBe(768);
      expect(UI.BREAKPOINTS.LG).toBe(1024);
      expect(UI.BREAKPOINTS.XL).toBe(1280);
      expect(UI.BREAKPOINTS['2XL']).toBe(1536);
    });

    it('has correct z-index values', () => {
      expect(UI.Z_INDEX.DROPDOWN).toBe(1000);
      expect(UI.Z_INDEX.STICKY).toBe(1020);
      expect(UI.Z_INDEX.FIXED).toBe(1030);
      expect(UI.Z_INDEX.MODAL_BACKDROP).toBe(1040);
      expect(UI.Z_INDEX.MODAL).toBe(1050);
      expect(UI.Z_INDEX.POPOVER).toBe(1060);
      expect(UI.Z_INDEX.TOOLTIP).toBe(1070);
    });

    it('has correct animation durations', () => {
      expect(UI.ANIMATION.DURATION.FAST).toBe(150);
      expect(UI.ANIMATION.DURATION.NORMAL).toBe(300);
      expect(UI.ANIMATION.DURATION.SLOW).toBe(500);
    });

    it('has correct animation easing', () => {
      expect(UI.ANIMATION.EASING.EASE_IN).toBe('cubic-bezier(0.4, 0, 1, 1)');
      expect(UI.ANIMATION.EASING.EASE_OUT).toBe('cubic-bezier(0, 0, 0.2, 1)');
      expect(UI.ANIMATION.EASING.EASE_IN_OUT).toBe(
        'cubic-bezier(0.4, 0, 0.2, 1)'
      );
    });
  });

  describe('ERROR_MESSAGES', () => {
    it('has all required error messages', () => {
      expect(ERROR_MESSAGES.REQUIRED).toBe('This field is required');
      expect(ERROR_MESSAGES.INVALID_EMAIL).toBe(
        'Please enter a valid email address'
      );
      expect(ERROR_MESSAGES.PASSWORD_TOO_SHORT).toContain('8 characters long');
      expect(ERROR_MESSAGES.PASSWORD_REQUIREMENTS).toContain(
        'uppercase, lowercase, number'
      );
      expect(ERROR_MESSAGES.INVALID_PHONE).toBe(
        'Please enter a valid phone number'
      );
      expect(ERROR_MESSAGES.FILE_TOO_LARGE).toContain('MB');
      expect(ERROR_MESSAGES.INVALID_FILE_TYPE).toBe('File type not allowed');
      expect(ERROR_MESSAGES.NETWORK_ERROR).toBe(
        'Network error. Please try again.'
      );
      expect(ERROR_MESSAGES.UNAUTHORIZED).toBe(
        'You are not authorized to perform this action'
      );
      expect(ERROR_MESSAGES.NOT_FOUND).toBe('Resource not found');
      expect(ERROR_MESSAGES.SERVER_ERROR).toBe(
        'Server error. Please try again later.'
      );
    });

    it('has meaningful error messages', () => {
      const messages = Object.values(ERROR_MESSAGES);
      messages.forEach(message => {
        expect(message).toBeTruthy();
        expect(typeof message).toBe('string');
        expect(message.length).toBeGreaterThan(0);
      });
    });
  });

  describe('SUCCESS_MESSAGES', () => {
    it('has all required success messages', () => {
      expect(SUCCESS_MESSAGES.PROFILE_UPDATED).toBe(
        'Profile updated successfully'
      );
      expect(SUCCESS_MESSAGES.PROPOSAL_CREATED).toBe(
        'Proposal created successfully'
      );
      expect(SUCCESS_MESSAGES.PROPOSAL_UPDATED).toBe(
        'Proposal updated successfully'
      );
      expect(SUCCESS_MESSAGES.PROPOSAL_DELETED).toBe(
        'Proposal deleted successfully'
      );
      expect(SUCCESS_MESSAGES.MESSAGE_SENT).toBe('Message sent successfully');
      expect(SUCCESS_MESSAGES.FILE_UPLOADED).toBe('File uploaded successfully');
    });

    it('has meaningful success messages', () => {
      const messages = Object.values(SUCCESS_MESSAGES);
      messages.forEach(message => {
        expect(message).toBeTruthy();
        expect(typeof message).toBe('string');
        expect(message.length).toBeGreaterThan(0);
      });
    });
  });
});
