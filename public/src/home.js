function getTotalBooksCount(books) {
   return helpCount(books);
}

function getTotalAccountsCount(accounts) {
  let total = 0;
   accounts.forEach((account) => total++)
   return total;
}

function getBooksBorrowedCount(books) {
  let count = 0;
  for (let i = 0; i < books.length; i++) {
    const borrow = books[i].borrows[0];
    if (!borrow.returned) {
      count++;
    }
  }
  return count;
}

function getMostCommonGenres(books) {
  let obj = {};
  books.forEach((book) => {
    if(obj[book.genre]){
      obj[book.genre]++;
    } else {
      obj[book.genre] = 1;
    }
  });
  let genreCount = [];
  //const entries = Object.entries(obj);
  //for (const [key, value] of entries)
  const keys = Object.keys(obj);

    /*entries.forEach(([key,value]) => 
    genreCount.push({
      'name' : key,
      'count' : value
    }) */
    keys.forEach((key) => 
    genreCount.push({
      'name' : key,
      'count' : obj[key]
    })
  )
  genreCount.sort((a, b) => b.count - a.count);
  return genreCount.slice(0, 5);
}

function getMostPopularBooks(books) {
  return books.map((book) => 
  {return {name: book.title, count: book.borrows.length}}).sort((a, b) => 
  (a.count < b.count ? 1 : -1)).slice(0,5)
}
function getMostPopularAuthors(books, authors) {
  return books.map((book) => {
    return { name: authors.find((author) => 
      author.id == book.authorId).name.first + ' ' + authors.find((author) => 
      author.id == book.authorId).name.last, count: book.borrows.length}}).sort((a, b) => 
      (a.count < b.count ? 1 : -1)).slice(0,5)
}
function helpCount(count) {
  let total = 0;
   count.forEach((account) => total++)
   return total;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
