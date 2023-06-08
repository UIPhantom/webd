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

//Form submit event
form.addEventListener('submit', addItem);
//Delete event
itemList.addEventListener('click',removeItem);

//Add item
function addItem(e) {
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('item').value;

    //Create new li element
    var li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create edit button element
    var editBtn = document.createElement('button');

    //Add classes to edit button
    editBtn.className = 'btn btn-danger btn-sm float-right edit';
    
    //Append text node
    editBtn.appendChild(document.createTextNode('Edit'));

    //Append button to li
    li.appendChild(editBtn);

    //create del button element
    var deleteBtn = document.createElement('button');

    //Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    
    //Append text node
    deleteBtn.appendChild(document.createTextNode('x'));

    //Append button to li
    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}