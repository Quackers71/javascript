


var dt = new Date();
console.log(dt.getFullYear()); 
// 2021


var dt = new Date();
console.log(dt.toTimeString()); 
// 21:13:48 GMT+0100 (British Summer Time)


var dt = new Date();
console.log(dt.toDateString()); 
// Sat Jun 12 2021


var dt = new Date(Date.now());
console.log(dt); 
// Sat Jun 12 2021 21:12:38 GMT+0100 (British Summer Time)


var dt = Date.now();
console.log(dt); 
// 1623528720323


var dt = new Date(Date.UTC(2022, 0));
console.log(dt); 
// Sat Jan 01 2022 00:00:00 GMT+0000 (Greenwich Mean Time)


var dt = Date.UTC(2000, 0);
console.log(dt); // 946684800000


var dt = Date.parse('Yo, Yo!');
console.log(dt); // NaN


var dt = new Date('Yo, Yo!');
console.log(dt); // Invalid Date


var dt = new Date('June 14, 2021');
console.log(dt);
// Mon Jun 14 2021 00:00:00 GMT+0100 (British Summer Time)


var dt = new Date('1/1/2022');
console.log(dt);
// Sat Jan 01 2022 00:00:00 GMT+0000 (Greenwich Mean Time)


var dt = new Date(0);
console.log(dt);
// Thu Jan 01 1970 01:00:00 GMT+0100 (Greenwich Mean Time)


var dt = new Date();
console.log(dt);
// Sat Jun 12 2021 21:00:31 GMT+0100 (British Summer Time)