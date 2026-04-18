const base = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const { BookStorePage } = require('../pages/bookstore.page');
const {BookDetailsPage} = require('../pages/bookDetails.page')
exports.test = base.test.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },

  bookStorePage: async ({ page }, use) => {
    const bookStorePage = new BookStorePage(page);
    await use(bookStorePage);
  },

  bookDetailsPage: async ({page}, use) => {
    const bookDetailsPage = new BookDetailsPage(page);
    await use(bookDetailsPage);
  }
});

exports.expect = base.expect;