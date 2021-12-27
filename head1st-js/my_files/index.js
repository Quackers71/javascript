
var word = "bottles";
var word2 = "bottle";
var count = 99;
while (count > 1) {
    console.log(count + " " + word + " of beer on the wall");
    console.log(count + " " + word + " of beer,");
    console.log("Take one down, pass it around,\n\n");
    count = count - 1;

    if (count == 1) {
        console.log(count + " " + word2 + " of beer on the wall.");
        console.log(count + " " + word2 + " of beer,");
        console.log("Take one down, pass it around,\n\n");
        count = count - 1;
    }
    if (count < 1) {
        console.log("No more " + word + " of beer on the wall.");
    }
}
