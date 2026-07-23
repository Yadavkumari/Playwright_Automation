import { test, expect } from "@playwright/test";

test("Playwright Special locators", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/angularpractice/");
  await page.locator('[name="name"]').first().fill("Ranju");
  await page.locator('[name="email"]').first().fill("yadav53vdeg@gmail.com");
  await page.getByPlaceholder("Password").fill("Ranjui@123");
  await page.getByLabel("Check me out if you Love IceCreams!").click();
  await page.locator('[id="exampleFormControlSelect1"]').click();
  await page.getByLabel("Gender").selectOption("Female");
  await page.getByLabel("Employed").check();

  //await page.locator('[type="date"]').fill('05-05-2025');

  await page.getByRole("button", { name: "Submit" }).click();
  await page
    .getByText("Success! The Form has been submitted successfully!.")
    .isVisible();

  // 5 sec is the defalut timeout for the assertion

  await expect(
    page.getByText("Success! The Form has been submitted successfully!.")
  ).toBeVisible({ timeout: 10000 });
  await page.getByRole("link", { name: "Shop" }).click();
  await page
    .locator("app-card")
    .filter({ hasText: "Nokia Edge" })
    .getByRole("button")
    .click();
});

test("Wright test level time out  ", async ({ page }) => {

  test.setTimeout(6000)
  const slowexpect = expect.configure({timeout: 10000});
  page.setDefaultTimeout(70000)

  await page.goto("https://rahulshettyacademy.com/angularpractice/");
  await page.locator('[name="name"]').first().fill("Ranju");
  await page.locator('[name="email"]').first().fill("yadav53vdeg@gmail.com");
  await page.getByPlaceholder("Password").fill("Ranjui@123");
  await page.getByLabel("Check me out if you Love IceCreams!").click();
  await page.locator('[id="exampleFormControlSelect1"]').click();
  await page.getByLabel("Gender").selectOption("Female");
  await page.getByLabel("Employed").check();

  //await page.locator('[type="date"]').fill('05-05-2025');

  await page.getByRole("button", { name: "Submit" }).click();
  await page
    .getByText("Success! The Form has been submitted successfully!.")
    .isVisible();

  // 5 sec is the defalut timeout for the assertion

  await slowexpect(
    page.getByText("Success! The Form has been submitted successfully!.")
  ).toBeVisible();
  await page.getByRole("link", { name: "Shop" }).click();

  await slowexpect(page.locator('.my-4').first()).toHaveText('Shop Name');

  await page
    .locator("app-card").filter({hasText:"Nokia Edge"})
    .getByRole("button")
    .click();

});

test.skip('test using codegen', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/angularpractice/');
  await page.locator('form input[name="name"]').click();
  await page.locator('form input[name="name"]').fill('ranju');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('yadavragh@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('4524352452');
  await page.getByRole('checkbox', { name: 'Check me out if you Love' }).check();
  await page.getByLabel('Gender').selectOption('Female');
  await page.getByRole('radio', { name: 'Employed' }).check();
  await page.locator('input[name="bday"]').fill('9999-06-15');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Shop' }).click();
  await page.locator('app-card').filter({ hasText: 'iphone X $24.99 Lorem ipsum' }).getByRole('button').click();
  await page.locator('app-card').filter({ hasText: 'Samsung Note 8 $24.99 Lorem' }).getByRole('button').click();
  await page.getByText('Checkout ( 2 ) (current)').click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('textbox', { name: 'Please choose your delivery' }).click();
  await page.getByRole('textbox', { name: 'Please choose your delivery' }).fill('india');
  await page.getByText('I agree with the term &').click();
  await page.getByRole('button', { name: 'Purchase' }).click();
  await page.getByText('Please choose your delivery').click();
  await expect(page.locator('app-checkout')).toContainText('Please choose your delivery location. Then click on purchase button');
  await expect(page.getByRole('textbox', { name: 'Please choose your delivery' })).toBeVisible();
  await expect(page.getByText('× Success! Thank you! Your')).toBeVisible();
});