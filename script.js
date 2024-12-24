//Array of Book objects
const myLibrary = []; 

const bookShelfContainer = document.querySelector('.book-shelf-container');
const addButton = document.getElementById('add-button');
const HTMLdialog = document.getElementById('add-book-dialog');

//Book constructor
function Book(title, author, pages, readingStatus){
  this.Title = title;
  this.Author = author;
  this.Pages = pages;
  this["Reading Status"] = readingStatus;
};

function renderMyLib(){
  bookShelfContainer.innerHTML="";
  for(let book of myLibrary){
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container")
    const bookUl = document.createElement("ul");
    for (const key of Object.keys(book)) {
      const bookLI = document.createElement("li");
      bookLI.textContent = key + " : " + book[key];
      bookUl.appendChild(bookLI);
    }
    bookContainer.appendChild(bookUl);
    bookShelfContainer.appendChild(bookContainer);
  }
}

myLibrary.push(new Book("A Game of Thrones", "George R. R. Martin", 694, "Not read"));

myLibrary.push(new Book("Meditations", "Marcus Aurelius", 181, "Reading"));

myLibrary.push(new Book("Meditations", "Marcus Aurelius", 181, "Reading"));

myLibrary.push(new Book("Meditations", "Marcus Aurelius", 181, "Reading"));

myLibrary.push(new Book("Meditations", "Marcus Aurelius", 181, "Reading"));

myLibrary.push(new Book("Meditations", "Marcus Aurelius", 181, "Reading"));

renderMyLib();

addButton.addEventListener('click', showDetailsForm);

function showDetailsForm(){
  const HTMLdialog = document.getElementById('add-book-dialog');
  HTMLdialog.showModal();
  // To close Modal if click outside of dialog
  HTMLdialog.addEventListener("click", e => {
    const dialogDimensions = HTMLdialog.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      HTMLdialog.close()
    }
  })
  const closeDialogButton = document.getElementById('close-book-dialog-btn');
  closeDialogButton.addEventListener('click', (e)=>{
    e.preventDefault();
    HTMLdialog.close();
  });
}

const addBookBtn = document.getElementById('add-book-object-btn');
const addBookForm = document.getElementById('add-book-form');

addBookForm.addEventListener('submit', addBookToLibrary)

//Function to add new objects to myLibrary
function addBookToLibrary(e) {
  e.preventDefault();
  const titleValue = document.getElementById('title').value;
  const authorValue = document.getElementById('author').value;
  const pagesValue = document.getElementById('pages').value;
  const readStatusValue = document.getElementById('readStatus').value;

  const newBook = new Book(titleValue, authorValue, pagesValue, readStatusValue);

  myLibrary.push(newBook);
  renderMyLib();

}

//Loop through myLibrary and 