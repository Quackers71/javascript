


var ratings = [5, 2, 4];
console.log(ratings.join('|')); // 5|2|4


var ratings = [5, 2, 4];
console.log(ratings.valueOf()); // (3) [5, 2, 4]


var entries = ['Planes', 'Trains', 'Automobiles'];
console.log(entries.toString()); // Planes,Trains,Automobiles


var entries = ['Planes', 'Trains', 'Automobiles'];
entries[entries.length] = 'Bicycles';
console.log(entries.length); // 4


var entries = ['Planes', 'Trains', 'Automobiles'];
entries[42] = 'Cars';
console.log(entries[42]); // Cars
console.log(entries.length); // 43


var entries = ['Planes', 'Trains', 'Automobiles'];
entries[2] = 'Cars';
console.log(entries[2]); // Cars


var entries = ['Planes', 'Trains'];
entries.length = 1;
console.log(entries[1]); // undefined


var entries = ['Planes', 'Trains'];
entries.length = 10;
console.log(entries.length); // 10


var entries = [,,,];
console.log(entries.length); // 3 (or 4 in IE8 and lower)


var entries = [];
console.log(entries.length); // 0


var entries = new Array("5");
console.log(entries.length); // 1


var entries = new Array(5);
console.log(entries.length); // 5


var entries = ['Trains', 'Planes', 'Automobiles'];
console.log(entries[3]); // undefined


var entries = ['Trains', 'Planes', 'Automobiles'];
console.log(entries[0]); // Trains


var entries = ['Trains', 'Planes', 'Automobiles'];
console.log(entries instanceof Array); // true


var entries = Array('Trains', 'Planes', 'Automobiles');
console.log(entries instanceof Array); // true


var entries = new Array('Trains', 42, true);
console.log(entries instanceof Array); // true


var entries = new Array('Trains', ' Plains', 'Automobiles');
console.log(entries instanceof Array); // true