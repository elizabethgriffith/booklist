// Book Class
class Book {
  constructor(title, author, genre, rating){
    this.title = title
    this.author = author
    this.genre = genre
    this.rating = rating
  }
}
// Create UI Class
class UI {
  addBook (book){
    const list = document.getElementById('book-list')

    // Create tr, insert columns, append to list
    const row = document.createElement('tr')
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.genre}</td>
    <td>${book.rating}</td>
    <td><a href="#" class="delete">X</a></td>
    `
    list.appendChild(row)
  }

  showAlert (message, className){

  }
  deleteBook(target){
    if (target.className === 'delete'){
      target.parentElement.parentElement.remove()
    }
  }
  clearFields(){
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('genre').value = ''
    document.getElementById('rating').value = ''
  }
}
 

// Create Local Storage Class
  // Add methods
    // getBooks
    // displayBooks
    // addBook
    // deleteBook

// Event Listeners - page load, add book, delete book
  // add page load listener

  document.getElementById('book-form').addEventListener('submit', addBookToList)
  document.getElementById('book-list').addEventListener('click', deleteBookFromList)

function addBookToList(e){
  // Get form input values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    genre = document.getElementById('genre').value,
    rating = document.getElementById('rating').value
  // Instantiate Book and UI
  const book = new Book(title, author, genre, rating)
  const ui = new UI()
  
  // Validation
  if (title === '' || author === '' || genre === '' || rating === ''){
    alert('Fail')
  } else {
    // Add book to list, clear fields
    console.log(book)
    ui.addBook(book)
    ui.clearFields()
  }
  
  

  e.preventDefault()
}

function deleteBookFromList(e){
  // Instantiate UI
  const ui = new UI()
  // Delete book from list
  ui.deleteBook(e.target)


  e.preventDefault()
}