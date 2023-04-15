
// var li = document.getElementsByTagName('li');
// // console.log(li);
// // console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[2].style.backgroundColor = 'green';

// for (var i = 0; i < li.length; i++){
//     li[i].style.fontWeight = 'bold';
// }

// //queryselector
// var lastItem = document.querySelector('.list-group-item:nth-child(2)');
// lastItem.style.backgroundColor = "green";

// var secondItem = document.querySelector('.list-group-item:nth-child(3)');
// secondItem.style.display = "none";

// //queryselectorAll
// var items = document.querySelectorAll('li:nth-child(2)');
// items[0].style.color = 'green';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for (var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = "green";
// }


// //parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

// //firstChild
// console.log(itemList.firstChild);

// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// //lastChild
// console.log(itemList.lastChild);

// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// //nextSibling
// console.log(itemList.nextSibling);

// //nextElementSibling
// console.log(itemList.nextElementSibling);

// //previousSibling
// console.log(itemList.previousSibling);

// //previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//createElement
//create a div
var newDiv = document.createElement('div');

//create text node
var newDivText = document.createTextNode('Hello World');

