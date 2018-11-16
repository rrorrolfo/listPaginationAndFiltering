<h1 align="center">List Pagination and Filtering</h1>

<h3 align="center">Usage of web development technique "pagination"</h3>
<p>Pagination is used to make it easier for an user to find information within a website and to read it.</p>
<p>This project is built using a "progressive enhancement" development approach, meaning that the website is not dependant upon the added JavaScript. The JavaScript has been added to paginate and improve the project without altering the project in such a way that the JavaScript becomes required to use or view the web page</p>


<h2 align="center">How to use</h2>

<p>If Javacript is enabled, a list of items will be paginated with a maximum of 10 list items for each page. The user can write a name or email in the search box and the results matching the search term will be displayed, if the results are more than 10, they will be paginated, again,  with 10 results maximum per page. If JavaScript is disabled, the user will still be able to see all the list items.</p> 


This is how the basic markup should look like for the list that will be paginated and used as a reference for the search functionality:

```
<div class="page">

      <div class="page-header cf">
        <h2>Students</h2>
        <!-- Dynamically added search form goes here -->
        
      </div>
      
      <ul class="student-list">
        <li class="student-item cf">
        </li>
      </ul>
      
      <!-- Dynamically added pagination links go here -->
      
 </div>
```
The list to be paginated and used as a reference for the search functionality must be nested inside a container with a class of "page": `<div class="page">`

<h4 align="center"> Pagination</h4>

To enable pagination functionality, the list must have a class of "student-list": `<ul class="student-list">`

For the list items to be paginated, each list item must have classes of "student-item cf": `<li class="student-item cf">`

The pagination will be added dynamically according to the number of items that the initial list contains and later on, according to the number of results that the value or values to search in the search box generates.

<h4 align="center">Search Functionality</h4>

Searchbox input will be generated dnamically within the container with the classes "page-header cf": `<div class="page-header cf">`

For enabling the search functionality, each list item must have the following minimum markup:

```
 <li class="student-item cf">
     <h3>Item</h3>
     <span class="email">email@example.com</span>
 </li>
```
The search functionality will take the `.textContent` of the `<h3>` and the `<span class="email">` elements within the `<li class="student-item cf">`as a reference to match the value inserted in the searchbox.

<h4 align="center">License<h4>

MIT © rrorrolfo
