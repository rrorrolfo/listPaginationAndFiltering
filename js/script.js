
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


//////////////// Funtion for creating pages container

const pages_container = class_name => {
  let div = document.createElement("DIV");

  div.className = class_name;
  page_container.appendChild(div);
}


///////////////// Function for adding total pages
const appendPageLinks = total_students => {
  
  const pagination_div = document.querySelector(".pagination");

  // for obtaining the amount of pages to create depending on amount of students
  let number_of_pages = Math.floor(total_students.length / 10);

  // UL to create and its content
  
  let pages = "<ul>";

  //Loop for creating pages as list items
  for (let i = 0; i <= number_of_pages; i += 1) {
    
    pages += `
    <li>
      <a href="#">${i + 1}</a>
    </li>
    `
  }

  pages += "</ul>"

  //Output pages
  
  pagination_div.innerHTML = pages;
  
}

// Displays only first 10 students, and shows pages with 10 students each
showPage(student_item, 0, 9);
pages_container("pagination");
appendPageLinks(student_item);

// Event listener for filtering the student displayed according to pagination

const page_buttons = document.querySelector(".pagination");
const page_buttons_max = document.querySelectorAll(".pagination li");

// Event listener
page_buttons.addEventListener("click", (event) => {

  if(event.target.tagName === "A") {

    let a = parseInt(event.target.textContent);

    if (a === page_buttons_max.length) {
      showPage(student_item, (a -1) * 10, student_item.length - 1);
    } else {
      showPage(student_item, (a -1) * 10 , (a * 10) -1);
    }

  }
});


///////////////////// Display search bar
const search_container = document.querySelector(".page-header");
const search_bar = document.createElement("DIV");

search_bar.innerHTML = `
<input placeholder="Search for students...">
<button>Search</button>
`
search_bar.className = "student-search";
search_container.appendChild(search_bar);

///////////////////7 Search functionality //////////////////////

const student_to_search = document.querySelector(".student-search input");
const search_button = document.querySelector(".student-search button");


// Search function
const searchFunction = () => {
  
  value_to_search = student_to_search.value.toUpperCase();
  const name = document.querySelectorAll(".student-item h3");
  const email = document.querySelectorAll(".student-item .email");
  const initial_list = document.querySelector(".student-list");
  const search_results = [];

  // Hides initial display of students when search function is called
  initial_list.style.display = "none"; 
  
  // Adds matching results to array to be displayed
  for (let i = 0; i < student_item.length; i += 1) {
      
      if (name[i].textContent.toUpperCase().indexOf(value_to_search) > -1 || email[i].textContent.toUpperCase().indexOf(value_to_search) > -1) {
          search_results.push(student_item[i].innerHTML);
      }
  
  }
  
  // Creates new UL for displaying search results
  let ul = document.createElement("UL");
  page_container.insertBefore(ul, page_buttons);

  ul.className = "results-list";

  // Resets content of search results UL for every search
  const results_list = document.querySelector(".results-list");
  results_list.innerHTML = "";

  // Output search results array in UL 
  const x = search_results.map( item => `<li class="student-item cf flag">${item}</li>`);
  results_list.innerHTML = x.join("");

  // Shows initial display
  if (value_to_search === "" || value_to_search === null ) {
    results_list.style.display = "none";
    initial_list.style.display = "block";
    showPage(student_item, 0, 9);
  }

  // Creates amount of pages according to the results  (10 results per page)
  appendPageLinks(search_results);

  const search_results_10 = document.querySelectorAll(".flag");
  if (search_results_10.length >= 10) {
    showPage(search_results_10, 0, 9);
  } 
  
}

// Event listener for keyup event
student_to_search.addEventListener("keyup", () => {
  searchFunction();
});

// Event listener for clicking search button
search_button.addEventListener("click", () => {
  searchFunction();
});
