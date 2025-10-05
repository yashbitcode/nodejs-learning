const fs = require("fs");
const a = 100;

setImmediate(() => console.log("set-immediate"));

const p = new Promise((res) => res("Promise"));
p.then(console.log);

fs.readFile("./file.txt", "utf-8", (_, data) => console.log(data));

setTimeout(() => console.log("timeout expired"), 0);

process.nextTick(() => console.log("process.nextTick"));

function printA() {
    console.log("a = ", a);
}

printA();
console.log("last line...");


// promise { [Function (anonymous)] } // not printed
//a = 100
// last line
// next tick
// timeout 
// setimmm
// file content