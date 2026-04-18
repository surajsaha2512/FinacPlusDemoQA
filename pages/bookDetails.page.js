class BookDetailsPage {
  constructor(page) {
    this.page = page;
    this.bookIndividualDetail=(type)=>page.locator(`#${type} label`).last();
  }

  async bookDetails(){
    return {
    isbn: await this.bookIndividualDetail('ISBN-wrapper').textContent(),
    title: await this.bookIndividualDetail('title-wrapper').textContent(),
    subTitle: await this.bookIndividualDetail('subtitle-wrapper').textContent(),
    author: await this.bookIndividualDetail('author-wrapper').textContent(),
    publisher: await this.bookIndividualDetail('publisher-wrapper').textContent(),
    totalPages: await this.bookIndividualDetail('pages-wrapper').textContent(),
    description: await this.bookIndividualDetail('description-wrapper').textContent(),
    website: await this.bookIndividualDetail('website-wrapper').textContent()
  };
  }
}
module.exports = { BookDetailsPage };