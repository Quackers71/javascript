function whatShallIWear(temp) {
    if (temp < 60) {
        console.log("The temperature is " + temp + ", so wear a jacket");
    } else if (temp < 70) {
        console.log("The temperature is " + temp + ", so wear a sweater");
    } else {
        console.log("The temperature is " + temp + ", so wear a t-shirt");
    }
}

whatShallIWear(50);
whatShallIWear(80);
whatShallIWear(60);