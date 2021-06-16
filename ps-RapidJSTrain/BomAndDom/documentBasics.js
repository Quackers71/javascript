


var a = document.getElementById('article1');
console.log(a.childNodes);
// NodeList(11) [text, h4, text, h3, text, p, text, p, text, p.special, text]


var a = document.getElementById('article1');
a.setAttribute('class', 'dynamic-style');
console.log(a.getAttribute('class'));
// dynamic-style


var a = document.getElementById('article1');
console.log(a.getAttribute('class'));
// my-custom-class


var element = document.getElementsByTagName('p');
console.log(element);
// HTMLCollection(3) [p, p, p.special]


var element = document.getElementsByTagName('p');
console.log(element);
// HTMLCollection(3) [p, p, p]


var element = document.getElementById('article1');
console.log(element);
// <artivle id="article1">...</article>