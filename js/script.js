
const page_container = document.querySelector(".page");
const student_item = document.querySelectorAll(".student-item");


const showPage = (list, start_list, end_list) => {

  // Loop for hidding all students
  const hideAll = list.forEach(student => student.style.display = "none");

  // Loop for displaying selected students
  for ( let i = start_list; i <= end_list; i += 1 ) {
    list[i].style.display = "block"
  }
}


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

// Function for adding total pages

const appendPageLinks = total_students => {

  // for obatining the amount of pages to create depending on amount of students
  let number_of_pages = Math.floor(total_students.length / 10);

  // UL to create and its content
  let ul = document.createElement("UL");
  let pages = "";

  //Loop for creating pages as list items
  for (let i = 0; i <= number_of_pages; i += 1) {
    
    pages += `
    <li>
      <a href="#">${i + 1}</a>
    </li>
    `
  }

  //Output pages
  ul.innerHTML = pages;
  page_container.appendChild(ul);

}
