const { expect } = require("@playwright/test");
class DoasboardPage {
    constructor(page) {
        this.userName = page.locator("#userEmail");
      this.products = page.locator('[class="card-body"]');
      this.productsText = page.locator(".card-body b");
      this.cart = page.locator('[routerlink*="cart"]');
      this.loadProduct = page.locator("div li");
      this.productName1 = page.locator("h3:has-text('ZARA COAT 3')");
      this.checkoutNutton = page.locator("text =Checkout");
      this.cardDeatil = page.locator('[class*="credit-card"]');
      this.cardDeatil1 = page.locator('[class="input txt"]');
      this.country = page.locator('[placeholder="Select Country"]');
      this.dropDown = page.locator(".ta-results");
      this.submitButton = page.locator(".action__submit");
      this.thankYouText =page.locator(".hero-primary");
      this.userName1 = page.locator('.user__name [type="text"]').first();
    }
    async SearchProduct(productName) {
      const titles = await this.products.allTextContents();
      console.log(titles);
      const count = await this.products.count();
      for (let i = 0; i < count; ++i) {
        if (
          (await this.products.nth(i).locator("b").textContent()) === productName
        ) {
          //add to cart
          await this.products.nth(i).locator("text= Add To Cart").click();
          break;
        }
      }
    }
  
    async navigateToCart() {
      await this.cart.click();
    }
  
    async CheckoutProduct() {
      await this.loadProduct.first().waitFor();
  
      const bool = await this.productName1.isVisible();
      await expect(bool).toBeTruthy();
      await this.checkoutNutton.click();
      await this.cardDeatil1.first().fill("123");
      await this.cardDeatil1.last().fill("Credit Card");
      await this.country.pressSequentially("ind", { delay: 150 });
      const dropdown = this.dropDown;
      await dropdown.waitFor();
      const optionsCount = await dropdown.locator("button").count();
      for (let i = 0; i < optionsCount; ++i) {
        const text = await dropdown.locator("button").nth(i).textContent();
        if (text === " India") {
          await dropdown.locator("button").nth(i).click();
          break;
        }
 await expect(this.userName1).toHaveText(
    userName
  );
    await this.submitButton();
     await expect(this.thankYouText).toHaveText(
    " Thankyou for the order. "
  );


  // );

      }
    }
  }
  module.exports = { DoasboardPage }
