const EventEmitter = require("node:events");

const emitter1 = new EventEmitter();
emitter1.on("error", (err) => console.error(`Error: ${err?.message}`));
emitter1.emit("error", new Error("Dummy Error"));

console.log("first")

class MyEmitter extends EventEmitter {
    constructor() {
        super();
        this.on("send-msg", (msg) => console.log("Message sent:", msg));
    }

    sendMessage(msg) {
        this.emit("send-msg", msg);
    }
};

const emitter = new MyEmitter();
emitter.sendMessage("My message");
