// Create Book Class
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

  }

  showAlert (message, className){

  }
  deleteBook(target){

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

// Add Event Listeners
  // page load
  // add book
  // delete book