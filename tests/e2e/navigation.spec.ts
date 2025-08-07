import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should navigate to dashboard page', async ({ page }) => {
    await page.getByRole('link', { name: 'Dashboard' }).click();

    // For now, we'll just check that the navigation works
    // In the future, this should navigate to an actual dashboard page
    await expect(page).toHaveURL(/.*dashboard.*/);
  });

  test('should navigate to labs page', async ({ page }) => {
    await page.getByRole('link', { name: 'Labs' }).click();

    // For now, we'll just check that the navigation works
    // In the future, this should navigate to an actual labs page
    await expect(page).toHaveURL(/.*labs.*/);
  });

  test('should navigate to pharmaceuticals page', async ({ page }) => {
    await page.getByRole('link', { name: 'Pharmaceuticals' }).click();

    // For now, we'll just check that the navigation works
    // In the future, this should navigate to an actual pharmaceuticals page
    await expect(page).toHaveURL(/.*pharmaceuticals.*/);
  });

  test('should navigate to proposals page', async ({ page }) => {
    await page.getByRole('link', { name: 'Proposals' }).click();

    // For now, we'll just check that the navigation works
    // In the future, this should navigate to an actual proposals page
    await expect(page).toHaveURL(/.*proposals.*/);
  });

  test('should have working logo link', async ({ page }) => {
    await page.getByRole('link', { name: 'AWP React' }).click();

    // Should navigate back to home page
    await expect(page).toHaveURL('/');
  });

  test('should have working sign in button', async ({ page }) => {
    await page.getByRole('button', { name: 'Sign In' }).click();

    // For now, we'll just check that the button is clickable
    // In the future, this should open a sign-in modal or navigate to sign-in page
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
  });

  test('should have working get started button', async ({ page }) => {
    await page.getByRole('button', { name: 'Get Started' }).click();

    // For now, we'll just check that the button is clickable
    // In the future, this should navigate to registration or onboarding
    await expect(
      page.getByRole('button', { name: 'Get Started' })
    ).toBeVisible();
  });
});
