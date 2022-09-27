const EventEmitter = require("events")

const emitter = new EventEmitter()

emitter.on("start", function() { //once
    console.log("Emitter started", this);
})



emitter.addListener("start", function(e){
    console.log("another one");
})


emitter.emit("start")