/**
 * Test Utilities
 * Common testing utilities and custom render functions
 */

import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Custom render function that includes providers
type CustomRenderOptions = Omit<RenderOptions, 'wrapper'>;

const customRender = (ui: ReactElement, options: CustomRenderOptions = {}) => {
  const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
  };

  return render(ui, { wrapper: AllTheProviders, ...options });
};

// Re-export everything
export * from '@testing-library/react';
export { customRender as render };

// Custom user event setup
export const setupUser = () => {
  return userEvent.setup();
};

// Test data factories
export const createMockUser = (overrides = {}) => ({
  id: '1',
  email: 'test@example.com',
  name: 'Test User',
  role: 'lab',
  status: 'active',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  ...overrides,
});

export const createMockLab = (overrides = {}) => ({
  id: '1',
  name: 'Test Lab',
  description: 'A test laboratory',
  location: 'Test City, Test State',
  capabilities: ['PCR', 'Sequencing'],
  certifications: ['ISO 17025'],
  contactEmail: 'lab@example.com',
  contactPhone: '+1234567890',
  ...overrides,
});

export const createMockPharmaceutical = (overrides = {}) => ({
  id: '1',
  name: 'Test Pharmaceutical',
  description: 'A test pharmaceutical company',
  location: 'Test City, Test State',
  portfolio: ['Drug A', 'Drug B'],
  requirements: ['Clinical Trials', 'Research'],
  contactEmail: 'pharma@example.com',
  contactPhone: '+1234567890',
  ...overrides,
});

// Wait utilities
export const waitForElementToBeRemoved = (element: Element) => {
  return new Promise<void>(resolve => {
    const observer = new MutationObserver(() => {
      if (!document.contains(element)) {
        observer.disconnect();
        resolve();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
};

// Mock data for API responses
export const mockApiResponses = {
  users: {
    list: [createMockUser(), createMockUser({ id: '2', name: 'User 2' })],
    single: createMockUser(),
  },
  labs: {
    list: [createMockLab(), createMockLab({ id: '2', name: 'Lab 2' })],
    single: createMockLab(),
  },
  pharmaceuticals: {
    list: [
      createMockPharmaceutical(),
      createMockPharmaceutical({ id: '2', name: 'Pharma 2' }),
    ],
    single: createMockPharmaceutical(),
  },
};
