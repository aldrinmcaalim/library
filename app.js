const addBookButton = document.querySelector(".addBookButton");
const submitBook = document.querySelector(".submitButton");
const modal = document.querySelector(".modal");
const hideModal = document.querySelector(".hide");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");

addBookButton.addEventListener("click", () => {
  modal.classList.toggle("hide");
});

submitBook.addEventListener("click", (e) => {
  e.preventDefault();
  if (title.value == "" && author.value == "" && pages.value == "") {
    modal.classList.add("hide");
  } else {
    modal.classList.remove("hide");
    const book = document.createElement("div");
    book.innerHTML = `${title.value} ${author.value} ${pages.value}`;
    book.classList.add("formatShelf");
    document.body.appendChild(book);
  }
});
