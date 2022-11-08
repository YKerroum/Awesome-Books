import { DateTime } from "../../modules/luxon.js";
import Books from "../../modules/books.js";
const listPage=document.querySelector('#list-container');
const addPage=document.querySelector('#addBook-container');
const contactPage=document.querySelector('#contact-container');
const navList=document.querySelector('#nav-list');
const navAdd=document.querySelector('#nav-add');
const navContact=document.querySelector('#nav-contact');
const title=document.querySelector('#title');
const author=document.querySelector('#author');


const showContact=()=>{
  navList.classList.remove('active');
  navContact.classList.add('active');
  navAdd.classList.remove('active');
  listPage.classList.remove('active');
  addPage.classList.remove('active');
  contactPage.classList.add('active');
  document.querySelector('h1').innerHTML="Contact information";
  

}

const showAdd=()=>{
  navList.classList.remove('active');
  navContact.classList.remove('active');
  navAdd.classList.add('active');
  listPage.classList.remove('active');
  addPage.classList.add('active');
  contactPage.classList.remove('active');
  document.querySelector('h1').innerHTML="Add a new book";

}

const showList=()=> {
  navList.classList.add('active');
  navContact.classList.remove('active');
  navAdd.classList.remove('active');
  listPage.classList.add('active');
  addPage.classList.remove('active');
  contactPage.classList.remove('active');
  document.querySelector('h1').innerHTML="All awesome Books";
  const books= new Books();
  console.log(books.AllBooks);
  document.querySelector('#list-all').innerHTML='';
  books.AllBooks.forEach((element,index) => {
    document.querySelector('#list-all').innerHTML+=`
    <li class="list  ${index%2===0 ? 'grey' : ''}">
        <span>"${element.title}" by ${element.author}</span> 
        <button type="button" id=${index} class="btn btn-remove">Remove</button>
    </li>
    `
  });
  const btnRemove=document.querySelectorAll('.btn-remove');
  btnRemove.forEach((element) => {
    element.addEventListener('click', () =>{
      books.removeBook(element.id);
      showList();
    });
  })


  
}



window.onload=()=>{
  document.querySelector('#nav-date').innerHTML=DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  showList();
  navList.addEventListener('click', ()=>{
  showList();
  });
  navAdd.addEventListener('click', ()=>{
  showAdd();
  })
  navContact.addEventListener('click', ()=>{
  showContact();
  })
  document.querySelector('#addBook-form').addEventListener('submit',()=>{
    const books= new Books();
    books.addBook(title.value,author.value);
  title.value=author.value='';
  });

}


