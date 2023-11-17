function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((data) => {
    const character =data[2]
    const fifthBook = data[4]
    let keys = Object.numberofpages = data[0, 10]
    console.log(keys)
    console.log(character)
    console.log(fifthBook.numberOfPages)
    console.log(data);

    
    let totalPages = 0
    data.forEach(book => {
      totalPages = totalPages + book.numberOfPages
    })
    console.log("Total number of pages:", totalPages)
  })
  //To pass the tests, don't forget to return your fetch!
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.numberOfPages;
    main.appendChild(h2);
  });
  renderBooks(data)
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

fetchBooks("https://anapioficeandfire.com/api/books")