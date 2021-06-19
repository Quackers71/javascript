


try {
    throw new RangeError('Range Error');
}
catch(e) {
    if (e instanceof RangeError)
    console.log(e.name);
}
// Range Error