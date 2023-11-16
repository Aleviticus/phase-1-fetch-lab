function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((data) => {
    const character =data[2]
    const fifthBook = data[4]
    let keys = Object.numberofpages = data[0, 10]
    console.log(keys)
    console.log(character)
    console.log(fifthBook)
    console.log(data);

    renderBooks(data)
  })
  // To pass the tests, don't forget to return your fetch!
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
