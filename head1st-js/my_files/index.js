var eightBall = {
    index: 0,
    advice: ["yes", "no", "maybe", "not a chance"],
    shake: function() {
        this.index = this.index + 1;
        if (this.index >= this.advice.length) {
            this.index = 0;
        }
    },
    look: function() {
        return this.advice[this.index];
    }
};

for (var i = 1; i < 22; i++) {
    eightBall.shake();
    console.log("#" + (i) + "   " + eightBall.look());
}
