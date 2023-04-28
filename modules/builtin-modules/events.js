const EventEmitter = require("events");
//EventEmitter is a class. we are creating new instance of EventEmitter.
const emitter = new EventEmitter();

emitter.on("newProcess", () => console.log("Done"));
emitter.addListener("newProcess", () => console.log("process done"));


// both addListener and on are same but always use on().
// order of on() and emit() should be followed otherwise.no output

emitter.emit("newProcess");
