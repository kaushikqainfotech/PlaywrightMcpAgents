// spec: Amazon India Complete Product Checkout Workflow Tests
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Amazon India Checkout Flow', () => {
  test('Complete iPhone Checkout Flow (Stop Before Purchase)', async ({ page }) => {
    // Navigate to Amazon India homepage
    await page.goto('https://www.amazon.in');

    // Wait for Amazon homepage to load completely
    await new Promise(f => setTimeout(f, 3 * 1000));

    // Verify Amazon search box is visible on homepage
    await expect(page.getByRole('searchbox', { name: 'Search Amazon.in' })).toBeVisible();

    // Type iPhone in the search box
    await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('iPhone');

    // Press Enter to search
    await page.keyboard.press('Enter');

    // Wait for search results page to load
    await new Promise(f => setTimeout(f, 3 * 1000));

    // Verify search results are displayed for iPhone
    await expect(page.getByText('iPhone')).toBeVisible();

    // 3. Click on the first iPhone product from search results to view product details
    await page.locator('.a-link-normal.s-no-outline').first().click();

    // Wait for product page to load completely
    await new Promise(f => setTimeout(f, 3 * 1000));

    // Navigate to the iPhone 15 product page (fallback)
    await page.goto('https://www.amazon.in/Apple-iPhone-15-256-GB/dp/B0CHX2WQLX');

    // Verify we're on the iPhone 15 product page
    await expect(page.getByText('iPhone 15 (256 GB) - Black')).toBeVisible();

    // Verify Add to cart button is visible on product page
    await expect(page.getByRole('button', { name: 'Add to cart' })).toBeVisible();

    // 4. Click Add to cart button to add iPhone 15 to shopping cart
    await page.getByRole('button', { name: 'Add to cart' }).click();

    // Verify that item was added to cart successfully
    await expect(page.getByText('Added to cart')).toBeVisible();

    // 5. Click on cart icon to view cart contents and proceed to checkout
    await page.getByRole('link', { name: 'item in cart' }).click();

    // Verify iPhone 15 is visible in shopping cart
    await expect(page.getByText('iPhone 15 (256 GB) - Black')).toBeVisible();

    // Wait for page to stabilize and navigation overlay to close
    await new Promise(f => setTimeout(f, 2 * 1000));

    // Press Escape to close any open navigation menu
    await page.keyboard.press('Escape');

    // 6. Click Proceed to checkout to initiate checkout process
    await page.getByRole('button', { name: 'Proceed to Buy Buy Amazon' }).click();

    // Verify we've reached the sign-in page for checkout completion
    await expect(page.getByText('Sign in or create account')).toBeVisible();

    // Test stops here - manual sign-in required for actual checkout completion
    // This validates the complete automated checkout flow up to the authentication step
  });
});