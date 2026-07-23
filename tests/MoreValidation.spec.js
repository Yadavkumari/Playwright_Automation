const { test, expect } = require("@playwright/test");

test("pop validation", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  //   await page.goto('https://www.google.com/')
  //   await page.goBack();
  //   await page.goForward();
  await expect(page.locator('[id="displayed-text"]')).toBeVisible();
  await page.locator('[id="hide-textbox"]').click();
  await expect(page.locator('[id="displayed-text"]')).toBeHidden();
  page.on("dialog", (dialog) => dialog.accept());
  await page.locator("#confirmbtn").click();
  await page.locator("#mousehover").hover();

  //Iframes handling

  const framepage = page.frameLocator("#courses-iframe");
  await framepage.locator('li a[href="lifetime-access"]:visible').click();
  const values = await framepage.locator(".text h2").textContent();
  console.log(values.split(" ")[1]);
});

// test.only("visual testing  validation", async ({ page }) => {
//     await page.goto("https://www.google.com/");
//     expect (page.screenshot()).toMatchSnapshot('landing.png')

// });
