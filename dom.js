
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

//queryselectorAll
var items = document.querySelectorAll('li:nth-child(2)');
items[0].style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
for (var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = "green";
}