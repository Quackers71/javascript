


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