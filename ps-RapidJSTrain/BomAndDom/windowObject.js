


console.log(new Date().getSeconds());
var id = setInterval(function() {
    var secs = new Date().getSeconds();
    console.log(secs);
    if (secs === 10)
        clearInterval(id);
}, 1000);
// 4
// 5
// 6
// 7
// 8
// 9
// 10


console.log(new Date().getSeconds());
var id = setTimeout(function() {
    console.log(new Date().getSeconds());
}, 1000);
clearTimeout(id); // 45


console.log(new Date().getSeconds());
setTimeout(function() {
    console.log(new Date().getSeconds());
}, 1000);
// 58
// 59


window.open('https://www.pluralsight.com', '_blank');


console.log(window.innerWidth + ', ' + window.outerWidth);
// 485, 960


console.log(window.screenLeft + ', ' + window.screenTop);
// 960, 0