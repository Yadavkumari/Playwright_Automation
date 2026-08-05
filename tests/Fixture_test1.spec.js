const { test, expect } = require("../Fixtures/Login_fixture");
test("Login using fixture", async ({ page }) => {
  const products = page.locator(".card-body");

  await expect(products.first()).toBeVisible();
});