


var a1 = [1, 2, 3];
var a2 = a1; // this copies the array pointer from a1 to a2
a1[0] = 99;
console.log(a2[0]); // 99



var blog = {
    name: 'Ski Utah'
};
function changeBlogname(localBlog) {
    localBlog.name = 'no name';
}
changeBlogname(blog);
console.log(blog.name); // no name



var blog = {
    name: 'Ski Utah'
};

var updatedBlog = blog;
updatedBlog.name = 'Rocky Mountain Skiing'
console.log(blog.name); // Rocky Mountain Skiing



var blog = {
    name: 'Ski Utah'
};

var updatedBlog = blog;
blog.name = 'Rocky Mountain Skiing'
console.log(updatedBlog.name); // Rocky Mountain Skiing



var blog = {
    name: 'Ski Utah'
};

var updatedBlog = blog;
console.log(updatedBlog.name); // Ski Utah
