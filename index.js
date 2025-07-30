let books = [
  {
    id: 1,
    title: "Kitabın adı",
    author: "Müəllifin adı",
    details: "Kitab haqqında qısa məlumat",
    year: 2023,
    is_read: false,
  },
  {
    id: 2,
    title: "Kitabın adı",
    author: "Müəllifin adı",
    details: "Kitab haqqında qısa məlumat",
    year: 2024,
    is_read: false,
  },
  {
    id: 3,
    title: "Kitabın adı",
    author: "Müəllifin adı",
    details: "Kitab haqqında qısa məlumat",
    year: 2025,
    is_read: false,
  },
];

function swithcer() {
  const librarySection = +prompt(
    "What do you want to do: Add book - 1, Edit book - 2, Show all books - 3, Find book by id - 4, Read book by id - 5, Delete by id - 6, Search by title - 7"
  );
  switch (librarySection) {
    case 1:
      addBook(books);
      break;
    case 2:
      editBook(books);
      break;
    case 3:
      showAll(books);
      break;
    case 4:
      findById(books);
      break;
    case 5:
      isRead(books);
      break;
    case 6:
      deleteById(books);
      break;
    case 7:
      sortBy(books);
      break;

    default:
      break;
  }
}

swithcer();

function addBook(books) {
  const title = prompt("Enter title");
  const author = prompt("Enter author");
  const details = prompt("Enter details");
  let year = +prompt("Enter year");

  const newBook = {
    id: new Date().getTime(),
    title,
    author,
    details,
    year,
    is_read: false,
  };

  books.push(newBook);
  console.log(newBook);
}

console.log(new Date().getTime());

function editBook(books) {
  const id = +prompt("Enter id");
  let book = books.find((book) => book.id === id);
  console.log(book);
  if (book) {
    book.id = id;
    book.title = prompt("Enter title");
    book.author = prompt("Enter author");
    book.details = prompt("Enter details");
    book.year = +prompt("Enter year");
    book.is_read = prompt("Enter is read");
  } else {
    alert(`There is no book by ${id}`);
  }

  //   console.log(`Your edited book is: ${book}`);
  console.log(`Your edited book is:books.find((book) => book.id === id)`);
  console.log(books, "books in edited fn");
}

function showAll(books) {
  books.forEach((book) => {
    console.log(book);
  });
}

function findById(books) {
  const id = +prompt("Enter id");
  const book = books.find((book) => book.id === id);
  if (book) {
    console.log(`Book title: ${book.title}`);
    console.log(`Book author: ${book.author}`);
    console.log(`Book details: ${book.details}`);
    console.log(`Book year: ${book.year}`);
    console.log(`Book read: ${book.is_read}`);
  } else {
    alert(`There is no book by ${id}`);
  }
}

function isRead(books) {
  const id = +prompt("Enter id");
  const book = books.find((book) => book.id === id);
  if (book) {
    book.is_read = true;
    console.log(`${book.title} ${book.is_read ? "was not" : "was"} read `);
  } else {
    alert(`There is no book by ${id}`);
  }
}

function deleteById(books) {
  const id = +prompt("Enter id");
  books = books.filter((book) => book.id !== id);
  console.log(`Book deleted`);
  return showAll(books);
}

function sortBy(books) {
  const type = prompt("asc or desc");
  if (type == "asc") {
    books.sort((a, b) => a.year - b.year);
    showAll(books);
  } else {
    books.sort((a, b) => b.year - a.year);
    showAll(books);
  }
}
