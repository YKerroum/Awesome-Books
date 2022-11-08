export default class Books {
  constructor() {
    this.AllBooks = (localStorage.storagebook != null) ? JSON.parse(localStorage.storagebook) : [];
  }

  addBook=(title,author) =>{
    this.AllBooks.push({ title: title.value, author: author.value });
    this.updateLocalStorage();
  }

  removeBook=(id) =>{
    this.AllBooks.splice(id, 1);
    this.updateLocalStorage();
  }

  updateLocalStorage=()=> {
    localStorage.storagebook = JSON.stringify(this.AllBooks);
  }
}