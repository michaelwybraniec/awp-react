import { expect, test } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load the home page successfully', async ({ page }) => {
    await page.goto('/');

    // Check that the page loads
    await expect(page).toHaveTitle(/AWP React/);

    // Check that the main heading is visible
    await expect(
      page.getByRole('heading', { name: /Connect Labs & Pharmaceuticals/i })
    ).toBeVisible();
  });

  test('should display navigation elements', async ({ page }) => {
    await page.goto('/');

    // Check that the logo is visible
    await expect(page.getByText('AWP React')).toBeVisible();

    // Check that navigation links are present
    await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Labs' })).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'Pharmaceuticals' })
    ).toBeVisible();
    await expect(page.getByRole('link', { name: 'Proposals' })).toBeVisible();
  });

  test('should display call-to-action buttons', async ({ page }) => {
    await page.goto('/');

    // Check that CTA buttons are visible
    await expect(page.getByRole('link', { name: 'Get Started' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Learn More' })).toBeVisible();
  });

  test('should display feature sections', async ({ page }) => {
    await page.goto('/');

    // Check that feature sections are visible
    await expect(
      page.getByRole('heading', { name: /Why Choose AWP React\?/i })
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: /Lab Discovery/i })
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: /Pharma Partnerships/i })
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: /Collaboration Tools/i })
    ).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check that the page loads on mobile
    await expect(
      page.getByRole('heading', { name: /Connect Labs & Pharmaceuticals/i })
    ).toBeVisible();

    // Check that navigation is still accessible (might be in hamburger menu)
    await expect(page.getByText('AWP React')).toBeVisible();
  });
});
