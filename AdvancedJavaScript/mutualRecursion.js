


a(1); // 39

function a(foo) {
    if (foo > 20) return foo;
    return b(foo+2);
}
function b(foo) {
    return c(foo) + 1;
}
function c(foo) {
    return a(foo*2);
}