

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
