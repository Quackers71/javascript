var dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls"
};

function loseWeight(dog, amount) {
    dog.weight = dog.weight - amount;
}

loseWeight(dog, 10);
console.log(dog.name + " now weighs " + dog.weight);
