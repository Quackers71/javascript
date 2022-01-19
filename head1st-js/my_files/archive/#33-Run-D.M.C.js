var song = {
    name: "Walk This Way",
    artist: "Run-D.M.C.",
    minutes: 4,
    seconds: 3,
    genre: "80s",
    playing: false,
    play: function() {
        if(!this.playing) {
            this.playing = true;
            console.log("Playing " + this.name + " by " + this.artist);
            //console.log("Playing " + song.name + " by " + song.artist); / This also works
        }
    },
    pause: function() {
        if(this.playing) {
            this.playing = false;
        }
    }
}

song.play();
song.pause();
