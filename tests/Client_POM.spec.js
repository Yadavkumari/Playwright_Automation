const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../PageObjectModel/LoginPage");

test("@Web Client App login", async ({ page }) => {
  const products = page.locator('[class="card-body"]');
  const userName = "yadavranju0615@gmail.com";
  const password = "Ranju@123";
  const productName = "ZARA COAT 3";

  // Login
  const loginPage = new LoginPage(page);

  await loginPage.goTo();
  await loginPage.validLogin(userName, password);
})

  // await page.waitForLoadState("networkidle");
  // await page.locator(".card-body b").first().waitFor();
  // const titles = await page.locator(".card-body b").allTextContents();
  // console.log(titles);
  // const count = await products.count();
  // for (let i = 0; i < count; ++i) {
  //   if ((await products.nth(i).locator("b").textContent()) === productName) {
  //     //add to cart
  //     await products.nth(i).locator("text= Add To Cart").click();
  //     break;
  //   }
  // }

  // await page.locator('[routerlink*="cart"]').click();

  // await page.locator("div li").first().waitFor();

  // const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
  // expect(bool).toBeTruthy();

  // await page.locator("text =Checkout").click();

  // //await page.locator('[class*="credit-card"]').click();

  // await page.locator('[class="input txt"]').first().fill("123");
  // await page.locator('[class="input txt"]').last().fill("Credit Card");
  // // await page.locator('input[type="text"]').nth(4).fill("anshika@gmail.com");

  // await page
  //   .locator('[placeholder="Select Country"]')
  //   .pressSequentially("ind", { delay: 150 });

  // const dropdown = page.locator(".ta-results");
  // await dropdown.waitFor();
  // const optionsCount = await dropdown.locator("button").count();
  // for (let i = 0; i < optionsCount; ++i) {
  //   const text = await dropdown.locator("button").nth(i).textContent();
  //   if (text === " India") {
  //     await dropdown.locator("button").nth(i).click();
  //     break;
  //   }
  // }

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
//   }
// });
