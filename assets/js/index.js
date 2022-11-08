import { DateTime } from "../../modules/luxon.js";




window.onload=()=>{
  document.querySelector('#nav-date').innerHTML=DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);

}