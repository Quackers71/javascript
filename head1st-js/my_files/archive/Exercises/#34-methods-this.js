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
            console.log("You need to start the engine first.");
            //alert("You need to start the engine first.");
        }
    }
};

fiat.drive();
fiat.start();
fiat.drive();
fiat.stop();
fiat.drive();
fiat.drive(fiat.start());
