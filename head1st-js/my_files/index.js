var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021,
    transmission: "Auto",
    registration: "0MG",
    started: false,
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
        console.log("Zoom zoom!");
        //alert("Zoom zoom!");
        } else {
            console.log("You need to start your "+this.make+" engine first.");
            // alert("You need to start your "+this.make+" engine first.");
        }
    }
};

var cadi = {
    make: "General Motors",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892,
    transmission: "Auto",
    registration: "D00M3R",
    started: false,
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
        console.log("Zoom zoom!");
        // alert("Zoom zoom!");
        } else {
            console.log("You need to start your "+this.model+" engine first.");
            // alert("You need to start your "+this.model+" engine first.");
        }
    }
};

var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341,
    transmission: "Auto",
    registration: "J0E8AX1",
    started: false,
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
        console.log("Zoom zoom!");
        // alert("Zoom zoom!");
        } else {
            console.log("You need to start your "+this.model+" engine first.");
            // alert("You need to start your "+this.model+" engine first.");
        }
    }
};

var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    transmission: "Manual",
    registration: "N99WEB",
    started: false,
    fuel: 0,
    start: function() {
        if (this.fuel == 0) {
            console.log("The "+this.make+" "+this.model+" is on empty, fill up before starting!");
        } else {
        this.started = true;
        }
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            if (this.fuel > 0) {
                console.log("Your "+this.make+" "+this.model+" engine has started");
                console.log(this.make+" "+this.model+" goes zoom zoom!");
                // alert("Zoom zoom!");
                this.fuel = this.fuel - 1;
            } else {
                console.log("Uh oh, you're out of fuel.");
                this.stop();
            }
        } else {
            console.log("You need to start your "+this.make+" "+this.model+" engine first.");
            // alert("You need to start your "+this.make+" "+this.model+" engine first.");
        }
        
    },
    addFuel: function(amount) {
        this.fuel = this.fuel + amount;
        console.log("You now have "+this.fuel+" ltr(s) of fuel in the tank");
    }
};


fiat.drive();
fiat.start();
fiat.addFuel(1);
fiat.start();
fiat.drive();
console.log("You have "+fiat.fuel+" ltr(s) of fuel in the tank");
fiat.drive();
fiat.addFuel(1);
fiat.start();
fiat.drive();

fiat.stop();
fiat.drive();

/* chevy.drive();
chevy.start();
chevy.drive();
chevy.stop();

cadi.drive();
cadi.start();
cadi.drive();

taxi.drive();
taxi.start();
taxi.drive();

console.log("\n")

for (var property in chevy) {
    console.log(property+ ": "+chevy[property]);
}

chevy.color = "pink";
console.log("The "+chevy.make+" is now "+chevy.color);
chevy["color"] = "beige"
console.log("The "+chevy.make+" is now "+chevy.color);
chevy["co"+"lor"] = "blue"
console.log("The "+chevy.make+" is now "+chevy.color); */