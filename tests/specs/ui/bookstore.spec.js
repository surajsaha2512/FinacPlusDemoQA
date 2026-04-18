const { test, expect } = require('../../../fixtures/ui.fixture');
const { writeToFileJson, writeToFileTxt } = require('../../../utils/fileHelper');

test('Bookstore Flow', async ({ loginPage, bookStorePage, bookDetailsPage }) => {

  const username = process.env.STORE_USER_NAME;
  const password = process.env.STORE_PASSWORD;
  const bookName = 'Learning JavaScript Design Patterns';
  let bookDetails={};

  await test.step('Navigate to DemoQA website', async () => {
    await loginPage.goto();
  });
  await test.step('Navigate to Bookstore Application', async () => {
    await loginPage.navToBookStoreApp();
  });

  await test.step('Login with valid credentials in bookstore application', async () => {
    await loginPage.login(username, password);
  });

  await test.step('Validate successful login', async () => {
    await expect(loginPage.userLabel).toHaveText(username);
    await expect(loginPage.logoutBtn).toBeVisible();
  });

  await test.step('Click on bookstore Button', async () => {
    await bookStorePage.clickOnBoookStoreBtn();
  });
  await test.step(`Search for book: ${bookName}`, async () => {
    await bookStorePage.searchBook(bookName);
  });

  await test.step('Validate search result and extract book details', async () => {
    const searchResults=await bookStorePage.getSearchResults(bookName);
    expect(searchResults).toContain(bookName);
  });
  await test.step('Get Book Details', async () => {
    await bookStorePage.clickOnBook(bookName);
    bookDetails = await bookDetailsPage.bookDetails();
});

  await test.step('Write book details to file', async () => {
    await writeToFileJson(bookDetails);
    await writeToFileTxt(bookDetails);
  });

  await test.step('Logout from application', async () => {
    await bookDetailsPage.logout();
  });

});