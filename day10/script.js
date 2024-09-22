let products = [
    {'name': 'dell', 'description': 'laptop dell apple mac', 'price': '20$'},
    {'name': 'apple', 'description': 'laptop dell', 'price': '30$'},
    {'name': 'hp', 'description': 'laptop dell apple mac', 'price': '50$'},
    {'name': 'mac', 'description': 'this is description', 'price': '20$'}
];

const productTable = document.getElementById('product-table');
const tbody = document.getElementById('data-items');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

window.onload = function() {
    loadTable(products);
}
    
function loadTable(products) {
    tbody.innerHTML = "";  // Clear the table before loading new data
    for (let i = 0; i < products.length; i++) {
        let tr = document.createElement('tr');
        
        for (let key in products[i]) {
            let td = document.createElement('td');
            td.innerText = products[i][key];
            tr.appendChild(td);
        }
        
        tbody.appendChild(tr);
    }
}

searchBtn.addEventListener('click', function() {
    let filteredArray = [];  // Initialize a new array for filtered results
    let targetText = searchInput.value.toLowerCase();  // Get the search input value and convert to lowercase
    searchInput.value = '';  // Clear the search input

    if (targetText === '') return;  // If the search is empty, return

    for (let i = 0; i < products.length; i++) {
        for (let key in products[i]) {
            if (products[i][key].toLowerCase().includes(targetText)) {
                filteredArray.push(products[i]);  // Add matching product to the filtered array
                break;  // Move to the next product if a match is found
            }
        }
    }

    loadTable(filteredArray);  // Reload the table with filtered results
});
