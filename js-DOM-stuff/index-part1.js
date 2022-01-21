// EXAMINE THE DOCUMENT OBJECT //

//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all[10]);
// //document.all[10].textContent = "Yo!";
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = "LISTEN";
// headerTitle.innerText = "Don't Listen";
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello Lister</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
/* var items = document.getElementsByClassName('list-group-item');
console.log(items[1]);
items[1].textContent = 'Item 20';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow'; */

// gives error
//items.style.backgroundColor = '#f4f4f4';

/* for(var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = 'grey';
} */

// GETELEMENTSBYTAGNAME //
var li = document.getElementsByTagName('li');
/* console.log(li[1]);
li[1].textContent = 'Item 20';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow'; */

// gives error
//items.style.backgroundColor = '#f4f4f4';

for(var i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = 'teal';
}

// QUERYSELECTOR //
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 50px #000';

var input = document.querySelector('input');
input.value = "items to add...";

var sumbit = document.querySelector('input[type="submit"]');
sumbit.value="SUBMIT"

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';

// QUERYSELECTORALL //

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = "Add the Items";

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var a = 0; a < odd.length; a++) {
    odd[a].style.backgroundColor = "pink";
    even[a].style.backgroundColor = "green";
}