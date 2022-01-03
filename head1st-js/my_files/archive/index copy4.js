function bark(name, weight) {
    if (weight > 20) {
        console.log(name + " says WOOF WOOF!");
    } else {
        console.log(name + " says woof woof");
    }
}

bark("Rover", 23);
bark("Spot", 13);
bark("Spike", 53);
bark("Lady", 17);

console.log("\n");
bark("Juno", 20);
bark("Scottie", -1);
bark("Dino", 0, 0);
bark("Fido", "20");
bark("Lady", 10);
bark("Bruno", 21);