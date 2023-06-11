// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// myForm.addEventListener('submit', onsubmit);

// function onSubmit(e) {
//     e.preventDefault();

//     if (nameInput.value === '' || emailInput === '') {
//         msg.classList.add('error');
//         msg.innerHTML = 'Please enter all fields';

//         setTimeout(() => msg.remove(), 3000);
//     } else {
//         const li = document.createElement('li');
//         li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

//         userList.appendChild(li);

//         nameInput.value = '';
//         emailInput.value = '';
//     }
// }

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get input values
    var newItem = document.getElementById('item').value;
    var newDescription = document.getElementById('description').value;

    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';

    // Create item name element
    var itemName = document.createElement('span');
    itemName.textContent = newItem + ' - ';
    li.appendChild(itemName);

    // Create item description element
    var itemDescription = document.createElement('span');
    itemDescription.textContent = newDescription + ' ';
    li.appendChild(itemDescription);

    // Create edit button element
    var editBtn = document.createElement('button');
    // Add classes to edit button
    editBtn.className = 'btn btn-sm float-right edit';
    // Append text node
    editBtn.appendChild(document.createTextNode('Edit'));

    // Create delete button element
    var deleteBtn = document.createElement('button');
    // Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('x'));

    // Append buttons to li
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    itemList.appendChild(li);

    // Clear input fields
    document.getElementById('item').value = '';
    document.getElementById('description').value = '';
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e) {
    // Convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item) {
      var itemName = item.getElementsByTagName('span')[0]?.textContent?.toLowerCase() || '';
      var itemDescription = item.getElementsByTagName('span')[1]?.textContent?.toLowerCase() || '';
      var itemText = itemName + " " + itemDescription; // Combine name and description
  
      if (itemText.indexOf(text) !== -1) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }  