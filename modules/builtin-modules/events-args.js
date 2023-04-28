const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("logging", (eventArgs) => console.log("Done", eventArgs));

emitter.emit("logging", "user is logging");
