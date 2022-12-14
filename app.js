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
    <td>${book.rating} <i class="fa-solid fa-star"></i></td>
    <td><a href="#" class="delete">X</a></td>
    `
    list.appendChild(row)
  }

  showAlert (message, className){
    // Create div, add classes, add text, get parent, get form, insert alert
    const div = document.createElement('div')
    div.className = `alert ${className}`
    div.appendChild(document.createTextNode(message))
    const container = document.querySelector('.container')
    const form = document.getElementById('book-form')
    container.insertBefore(div, form)
    // Timeout after 2 seconds
    setTimeout(function(){
      document.querySelector('.alert').remove()
    }, 2000)
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
 

// Local Storage Class
class LocalStorage {
  static getBooks(){
    let books;
    if(localStorage.getItem('books') === null){
      books = []
    } else {
      books = JSON.parse(localStorage.getItem('books'))
    }

    return books
  }
  static displayBooks(){
    const books = LocalStorage.getBooks()
    books.forEach(function(book){
      const ui = new UI
      ui.addBook(book)
    })
  }
  static addBook(book){
    const books = LocalStorage.getBooks()
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
  }
  static deleteBook(title){
    const books = LocalStorage.getBooks()
    books.forEach(function(book, index){
      if(book.title === title){
        books.splice(index, 1)
      }
    })
    localStorage.setItem('books', JSON.stringify(books))
  }
}
 

// Event Listeners - page load, add book, delete book
  document.addEventListener('DOMContentLoaded', LocalStorage.displayBooks)
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
    ui.showAlert('Please ensure all fields are filled in', 'error')
  } else {
    // Add book to list, clear fields, show success, add to LS
    console.log(book)
    ui.addBook(book)
    ui.showAlert('Book added successfully!', 'success')
    LocalStorage.addBook(book)
    ui.clearFields()
  }

  e.preventDefault()
}

function deleteBookFromList(e){
  // Instantiate UI
  const ui = new UI()
  // Delete book from list and show success
  ui.deleteBook(e.target)
  ui.showAlert('Book successfully deleted!', 'success')
  // Delete from local storage
  LocalStorage.deleteBook(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent)


  e.preventDefault()
}