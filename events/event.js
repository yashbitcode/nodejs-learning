// getting the event-emitter class
const EventEmitter = require("node:events");

const emitter = new EventEmitter();

const greetListener = () => console.log(`Hello NodeJS!`);

emitter.on("greet", (username) => console.log(`Hey ${username}!`));
emitter.on("greet", greetListener);
emitter.emit("greet", "YashBitCode");

emitter.removeListener("greet", greetListener);
console.log(emitter.listeners("greet"));

emitter.once("notify-once", () => console.log("notified once"));
emitter.emit("notify-once");

console.log(emitter.listenerCount("greet"));