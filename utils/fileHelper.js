const fs = require('fs/promises');

async function writeToFileJson(book) {
  const content = JSON.stringify(book, null, 2);
  await fs.writeFile('files/bookDetails.json', content);
}

async function writeToFileTxt(book){
  const textContent = `
ISBN: ${book.isbn}
Title: ${book.title}
Sub Title: ${book.subTitle}
Author: ${book.author}
Publisher: ${book.publisher}
Total Pages: ${book.totalPages}
Description: ${book.description}
Website: ${book.website}
`;
  await fs.writeFile('files/bookDetails.txt', textContent.trim());
}

module.exports = { writeToFileJson,writeToFileTxt };