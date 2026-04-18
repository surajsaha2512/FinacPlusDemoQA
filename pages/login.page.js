class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('#userName');
    this.password = page.locator('#password');
    this.loginBtnMain = page.getByRole('button',{name:"Login"});
    this.userLabel = page.locator('#userName-value');
    this.logoutBtn = page.getByRole('button',{name:"Logout"});
    this.loginBtn=page.locator('#login');
    this.bookStoreAppIcon=page.getByRole('heading',{name:"Book Store Application"});
  }

  async goto() {
    await this.page.goto('/');
  }
  async navToBookStoreApp(){
    await this.bookStoreAppIcon.click();
  }

  async login(user, pass) {
    await this.loginBtnMain.click();
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
}

module.exports = { LoginPage };