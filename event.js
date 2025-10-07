const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("greet-me", (fullName) => {
    console.log("hi bro", fullName);
});

emitter.addListener("greet-me", (fullName) => {
    console.log("hi world", fullName);
});

emitter.emit("greet-me", "YashBitCode");