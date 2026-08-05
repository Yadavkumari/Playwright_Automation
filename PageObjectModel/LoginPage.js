class LoginPage {
  constructor(page) {
    this.page = page;
    this.userName = page.locator("#userEmail");
    this.password = page.locator("#userPassword");
    this.signInButton = page.locator("[value='Login']");
    this.clickLogin = page.locator(".card-body b");
  }

  async goTo() {
    await this.page.goto("https://rahulshettyacademy.com/client/");
  }

  async validLogin(userName, password) {
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.signInButton.click();
    await this.clickLogin.first().waitFor();
  }
  //async ValidDasbord() {}
}

module.exports = { LoginPage };
