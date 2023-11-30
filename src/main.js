import bookData from './book-data.json'


console.log('connected');

let title = document.getElementById("book-title");

// allow user to sort by title, author, 
export function search_bar() {
    console.log('inside search bar');
    // Declare variables
    let input, filter, a, i, txtValue;
    input = document.getElementById('searchbar');
    filter = input.value.toUpperCase();
    console.log(filter);
    // title = document.getElementById("book-title");


    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < title.length; i++) {
        a = title[i].getElementsByTagName("")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            title[i].style.display = "";
        } else {
            title[i].style.display = "none";
        }
    }
}


export function sort_books() {
    console.log('inside sort function');
    bookData.sort(function (a, b) {
        console.log(bookData[0].title);
        return (a.title.toString - b.title.toString);
    },

    )
}

// function displayBooks() {
//     document.getElementById('display')
// }