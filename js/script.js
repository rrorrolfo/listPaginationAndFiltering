
const page_container = document.querySelector(".page");
const student_item = document.querySelectorAll(".student-item");

// Function for displaying specific students
const showPage = (list, start_list, end_list) => {

  // Loop for hidding all students
  const hideAll = list.forEach(student => student.style.display = "none");

  // Loop for displaying selected students
  for ( let i = start_list; i <= end_list; i += 1 ) {
    list[i].style.display = "block"
  }
}


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
  ul.className = "pagination";
  ul.innerHTML = pages;
  page_container.appendChild(ul);

}

showPage(student_item, 0, 9);
appendPageLinks(student_item);

// Event listener for filtering the student displayed according to pagination

const page_buttons = document.querySelector(".pagination");
const page_buttons_max = document.querySelectorAll(".pagination li");

// Event listener
page_buttons.addEventListener("click", (event) => {

  let a = parseInt(event.target.textContent);

  if (a === page_buttons_max.length) {
    showPage(student_item, (a -1) * 10, student_item.length - 1);
  } else {
    showPage(student_item, (a -1) * 10 , (a * 10) -1);
  }

});
