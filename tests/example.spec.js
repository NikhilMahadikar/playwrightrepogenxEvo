import { test, expect } from "@playwright/test";

test("form fill ups", async ({ page }) => {
  await page.goto("https://www.playwrightautomation.com/practice.html");

  const userName = page.getByPlaceholder("Enter your name");
  const userEmail = page.getByPlaceholder("Enter your email");
  const address = page.getByPlaceholder("Enter your address");
  const submitButton = page.getByRole("button", { name: "Submit" });
  const resetButton = page.getByTestId("btn-reset-text-inputs");
  const radioButtonMale = page.locator("#gender-male");
  const radioButtonFemale = page.locator("#gender-female");
  const checkbox = page.locator("#day-select-all");

  await expect(userName).toBeVisible();
  await expect(userEmail).toBeVisible();
  await expect(address).toBeVisible();
  await expect(submitButton).toBeVisible();
  await expect(resetButton).toBeVisible();
  await expect(radioButtonMale).toBeVisible();
  await expect(radioButtonFemale).toBeVisible();
  await expect(checkbox).toBeVisible();

  await userName.fill("Nikhil");
  await userEmail.fill("nikkhil.mp@gmail.com");
  await address.fill("This is the address from Banglore");

  await expect(userName).toHaveValue("Nikhil");
  await expect(userEmail).toHaveValue("nikkhil.mp@gmail.com");
  await expect(address).toHaveValue("This is the address from Banglore");

  await radioButtonMale.check();
  await expect(radioButtonMale).toBeChecked();

  await checkbox.check();
  await expect(checkbox).toBeChecked();

  await resetButton.click();

  await expect(userName).toHaveValue("");
  await expect(userEmail).toHaveValue("");
  await expect(address).toHaveValue("");

  await userName.fill("Nikhil");
  await userEmail.fill("nikkhil.mp@gmail.com");
  await address.fill("This is the address from Banglore");

  await submitButton.click();
  await expect(submitButton).toBeEnabled();
});