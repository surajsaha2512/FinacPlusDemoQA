class BookStorePage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.locator('#searchBox');
    this.bookStoreBtn=page.getByRole('link',{name:"Book Store",exact:"true"});
    this.searchresultList=page.locator('//table//tbody//tr//td[2]');
    this.book=(bookName)=>page.locator(`//table//tbody//tr//td[2]//a[text()="${bookName}"]`);
  }

  async goto() {
  await this.page.goto('/books'); 
}

  async searchBook(bookName) {
    await this.searchBox.type(bookName);
  }
  async clickOnBoookStoreBtn()
  {
    await this.bookStoreBtn.click({force:true});
  }
  async getSearchResults(bookName) {
    const result=await this.searchresultList.allTextContents();
    return result;
  }

  async clickOnBook(bookName){
    await this.book(bookName).click();
  }
}

module.exports = { BookStorePage };