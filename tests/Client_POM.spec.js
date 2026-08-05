const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../PageObjectModel/LoginPage");
const { DoasboardPage} = require("../PageObjectModel/DasboardPage");

test("@Web Client App login", async ({ page }) => {
  const products = page.locator('[class="card-body"]');
  const userName = "yadavranju0615@gmail.com";
  const password = "Ranju@123";
  const productName = "ZARA COAT 3";

  // Login
  const loginPage = new LoginPage(page);

  await loginPage.goTo();
  await loginPage.validLogin(userName, password);
  await page.locator(".card-body b").first().waitFor();
  const dashboardPage = new DoasboardPage(page);
  await dashboardPage.SearchProduct(productName);
  await dashboardPage.navigateToCart();
  await dashboardPage.CheckoutProduct();

  // await expect(page.locator('.user__name [type="text"]').first()).toHaveText(
  //   userName
  // );

  // await page.locator(".action__submit").click();
  // await expect(page.locator(".hero-primary")).toHaveText(
  //   " Thankyou for the order. "
  // );

  // const orderId = await page
  //   .locator(".em-spacer-1 .ng-star-inserted")
  //   .textContent();
  // console.log(orderId);

  // // dynamic locator

  // await page.locator("tbody tr").first().waitFor();
  // await page.locator('button[routerlink*="myorders"]').click();

  // const rows = page.locator("tbody tr");

  // for (let i = 0; i < (await rows.count()); i++) {
  //   const rowOrderId = await rows.nth(i).locator("th").textContent();
  //   {
  //     if (orderId.includes(rowOrderId)) {
  //       await rows.nth(i).locator("button").first().click();
  //       break;
  //     }
  //   }

  //   // assertion

  //   const orderIdDetails = await page
  //     .locator('[class="col-text -main"]')
  //     .textContent();
  //   expect(orderId.includes(orderIdDetails)).toBeTruthy();

  //   console.log(orderIdDetails);
});
