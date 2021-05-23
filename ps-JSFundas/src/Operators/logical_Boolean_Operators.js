
if (5 === 5 && 6 === 7) {
    console.log(true);

}
else {
    console.log(false);
}

let userSettings = { name: 'Joe' };
//let userSettings = null;
let defaultSettings = {name: 'Default' };
console.log( userSettings || defaultSettings);
console.log( userSettings && defaultSettings);

let car = null;
console.log( !car);

/* 
if (var1 > 5 && var2 < 100) { }
if (var1 > 5 || var2 < 100) { }
if (var1 > 5 || var2 < 100 && var3 === 5) { } 
if ((var1 > 5 || var2 < 100) && var3 === 5) { } // this will evualate the || or condition 1st

var1 && var2
var1 || var2
!var1
*/

console.log("Hello World!");