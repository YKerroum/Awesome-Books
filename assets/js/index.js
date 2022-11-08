import { DateTime } from "../../modules/luxon.js";
import Books from "../../modules/books.js";
const listPage=document.querySelector('#list-container');
const addPage=document.querySelector('#addBook-container');
const contactPage=document.querySelector('#contact-container');
const navList=document.querySelector('#nav-list');
const navAdd=document.querySelector('#nav-add');
const navContact=document.querySelector('#nav-contact');




const fillList=()=> {
  navList.classList.add('active');
  listPage.classList.add('active');
  document.querySelector('h1').innerHTML="All awesome Books";
const books= new Books();
console.log(books.AllBooks);
document.querySelector('#list-all').innerHTML='';
books.AllBooks.forEach((element,index) => {

    document.querySelector('#list-all').innerHTML+=`
    <li>
        <span>"${element.title}" by ${element.author}</span> 
        <button type="button" id=${index} class="btn-remove">Remove</button>
    </li>
    `
});

}



window.onload=()=>{
  document.querySelector('#nav-date').innerHTML=DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  fillList();
  navList.addEventListener('click', ()=>{
  fillList();
  });
  
}


