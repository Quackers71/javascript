


try {
    throw new RangeError('Range Error');
}
catch(e) {
    if (e instanceof RangeError)
    console.log(e.name);
}
// Range Error


try {
    var i = 42;
}
catch(e) {
    console.log(e.name + ' - ' + e.message);
}
finally {
    console.log('Finally done.');
}
// Finally done.


try {
    throw new Error('Custom Error');
}
catch(e) {
    console.log(e.name + ' - ' + e.message);
}
finally {
    console.log('Finally done.');
}
// Error - Custom Error
// Finally done.


try {
    throw new Error('Custom Error');
}
catch(e) {
    console.log(e.name + ' - ' + e.message);
}
// Error - Custom Error