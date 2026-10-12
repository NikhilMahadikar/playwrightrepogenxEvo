const { test, expect } = require('@playwright/test');

test('Cart count and success message validation', async ({ page }) => {
  await page.goto('https://your-application-url.com');

  const cartCount = page.locator('#cart-count');
  const addToCartButton = page.getByRole('button', { name: 'Add to cart' });
  const successMessage = page.getByText('Successfully added to cart');

  // Capture the initial cart count
  const initialCount = Number(await cartCount.textContent());

  // Add an item to the cart
  await addToCartButton.click();

  // Validate that the cart count increases
  await expect.poll(async () => {
    return Number(await cartCount.textContent());
  }).toBe(initialCount + 1);

  // Validate that the success message appears
  await expect(successMessage).toBeVisible();

  // Validate that the message disappears within 2 seconds
  await expect(successMessage).toBeHidden({ timeout: 2000 });
});