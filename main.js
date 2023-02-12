// Examine the document object
// console.dir(document);
// console.log(document.domain);
// console.log(document.body);
// console.log(document.body.outerText);
// console.log(document.body.lastChild);
// console.log(document.body.children);
// console.log(document.body);
// console.log(document.title);
// console.log(document.all);
// console.log(document.images);
// console.log(document.head);

// Selectors 
// GET ELEMENT BY ID
console.log(document.getElementById('main-title'))
var headerTitle = document.getElementById('main-title');
headerTitle.textContent = 'Hello';
headerTitle.style.backgroundColor = 'orange';
headerTitle.style.color = 'green';
headerTitle.style.padding = "25px";
headerTitle.style.textAlign = 'center';

// GET ELEMENT BY ClASS
console.log(document.getElementsByClassName('list-group-item'));
var items = document.getElementsByClassName('list-group-item');
console.log(items[1].innerHTML);
items[0].textContent = 'Random Tet';
items[1].textContent = 'Random Tet2';
items[2].textContent = 'Random Tet3';

for (var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4';
    items[i].style.padding = '15px';
    items[i].style.border = '2px solid #333'
    items[i].style.margin = '10px';
    items[i].style.borderRadius = '5px'
}


// GET ELEMENT BY TAG NAME
console.log(document.getElementsByTagName('li'));
var li = document.getElementsByTagName('li');
li[1].style.backgroundColor = '#ccc';
li[1].style.fontWeight = 'bold';


// GET ELEMENT BY ID
console.log(document.querySelector('#second'));
var secondTitle = document.querySelector('#second');
secondTitle.style.border = '3px solid #333';
secondTitle.style.padding = '15px';
secondTitle.style.textAlign = 'center';

console.log(document.getElementsByTagName('input'));
var input = document.getElementsByTagName('input');
input.value = 'addedValue';
console.log(input);

console.log(document.querySelector('input[type="submit"]'));
var submit = document.querySelector('input[type="submit"]');
submit.value = 'Send';
console.log(submit.parentNode);
console.log(submit.children);
console.log(submit.nextSibling);
console.log(submit.previousSibling.previousSibling);
submit.previousSibling.previousSibling.style.backgroundColor = '#ccc';
console.log(submit.previousSibling.previousSibling.previousSibling.previousSibling)


// Create div
var newDiv = document.createElement('div');
newDiv.className = 'createdDiv';
newDiv.id = 'hello';
newDiv.setAttribute('title', 'Hello div');
var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

headerTitle.append(newDiv);

// Events
var button = document.getElementById('btn').addEventListener('click', btnClick);

function btnClick(e) {
    e.preventDefault();
    console.log('Button Click');
    document.getElementById('second').textContent = 'Changed';
    document.getElementById('second').style.backgroundColor = 'orange';
    document.getElementById('second').style.color = 'green';
}







