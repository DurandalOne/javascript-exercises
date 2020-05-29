const getTheTitles = function(book) {
    const bookTitles = book.map(book => book.title);
    return bookTitles;
}

module.exports = getTheTitles;
