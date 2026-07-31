const { test, expect } = require("@playwright/test");
const { asyncWrapProviders } = require("node:async_hooks");
const { text } = require("node:stream/consumers");

test("has title", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(" https://rahulshettyacademy.com/loginpagePractise/ ");
});

test("get text of the page", async ({ page }) => {
  const userName = page.locator('[id="username"]');
  const signIn = page.locator('[id="signInBtn"]');
  const cardTitles = page.locator(".card-body a");
  await page.goto(" https://rahulshettyacademy.com/loginpagePractise/ ");
  console.log(await page.title());
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
  await page.locator('[id="username"]').fill("rahulshettyacademi");
  await page.locator('[name="password"]').fill("Learning@830$3mK2");
  await page.locator('[id="signInBtn"]').click();
  console.log(await page.locator('[style*="block"]').textContent());

  await expect(page.locator('[style*="block"]')).toContainText("Incorrect");

  // fill and type
  await userName.fill(" "); // wipe up
  await userName.fill("rahulshettyacademy");
  await signIn.click();

  const text = await page.locator(".card-body a").first().textContent();
  console.log(text);
  const text1 = await page.locator(".card-body a").nth(1).textContent();
  console.log(text1);

  // all the tiltle of phones
  const alltiltle = await cardTitles.allTextContents();
  console.log(alltiltle);
});

test("drop down handling", async ({ page }) => {
  const userName = page.locator('#username');
  //const userName = page.locator('[id="username"]');

  const signIn = page.locator('[id="signInBtn"]');
  const documentlink = page.locator("[href*=documents]");

  await page.goto(" https://rahulshettyacademy.com/loginpagePractise/ ");
  await userName.fill("rahulshettyacademy");
  await page.locator('[name="password"]').fill("Learning@830$3mK2");

  const dropdown = page.locator(" select.form-control");
  await dropdown.selectOption("Consultant");
  await page.locator(".checkmark").nth(1).click();
  await page.locator('[id="okayBtn"]').click();

  // assertion
  console.log(await page.locator(".checkmark").nth(1).isChecked());
  await expect(await page.locator(".checkmark").nth(1)).toBeChecked();

  await page.locator('[id="terms"]').check();
  await expect(page.locator('[id="terms"]')).toBeChecked();
  await page.locator('[id="terms"]').uncheck();
  expect(await page.locator("#terms").isChecked()).toBeFalsy();

  await expect(documentlink).toHaveAttribute("class", "blinkingText");

  // await page.pause();
});

test("Child Window handling", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const documentlink = page.locator("[href*=documents]");
  const userName = page.locator('[id="username"]');

  await page.goto(" https://rahulshettyacademy.com/loginpagePractise/ ");
  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    documentlink.click(),
  ]);

  const text = await newPage.locator("[class*=red]").textContent();
  const arrayText = text.split("@");
  const domainname = arrayText[1].split(" ")[0];
  console.log(domainname);

  await page.locator('[id="username"]').fill(domainname);
  console.log(await page.locator('[id="username"]').textContent());
});
