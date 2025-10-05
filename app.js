const fs = require("fs");
// // const a = 100;

// setImmediate(() => console.log("set-immediate"));
// setTimeout(() => console.log("timeout expired"), 0);

// Promise.resolve("Promise").then(console.log);

// fs.readFile("./file.txt", "utf-8", (_, data) => {
//     // setTimeout(() => console.log("2nd timer"), 0);

//     // process.nextTick(() => console.log("2nd process.nextTick"));

//     // setImmediate(() => console.log("2nd set-immediate"));

//     console.log(data);
// });

// process.nextTick(() => {
//     process.nextTick(() => console.log("inner nexttick"));

//     console.log("process.nextTick");
// });

// nexttick =>
// promise =>

// t -
// p -
// c -
// c -

// last line
// process.nextTick
// innertick
// promise
// timeout expired
// set-immediate
// fil data

// function printA() {
//     console.log("a = ", a);
// }

// printA();

// nexttick =>
// promise =>

// t -
// p -
// c -
// c -

// last line...
// process.nextTick
// promise
// timeout expired
// set-immediate
// file data
// 2nd process.nextTick
// 2nd timer
// 2nd set-immediate

// const a = 100;

// setImmediate(() => console.log("setImmediate"));

// fs.readFile("./file.txt", "utf8", (_, data) => {
//     console.log(data);
// });

// setTimeout(() => console.log("Timer expired"), 0);

// function printA() {
//     console.log("a=", a);
// }

// printA();

// console.log("Last line of the file.");

// OUTPUT
// a = 100
// last line...
// timer expired
// setImmediate
// <file_content>

// const a = 100;

// setImmediate(() => {
//     console.log("setImmediate");
//     process.nextTick(() => console.log("process.nextTick setImm."));
// });

// Promise.resolve("Promise").then(console.log);

// fs.readFile("./file.txt", "utf8", (_, data) => {
//     console.log(data);
// });

// setTimeout(() => {
//     console.log("Timer expired");
//     process.nextTick(() => console.log("process.nextTick settime."));
// }, 0);

// process.nextTick(() => console.log("process.nextTick"));

// function printA() {
//     console.log("a=", a);
// }

// printA();

// console.log("Last line of the file.");

// OUTPUT
// a= 100
// Last line...
// process.nextTick
// Promise
// Timer expired
// process.nextTick settime
// setImmediate
// process.nextTick setImm
// <file content>

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve("promise").then(console.log);

fs.readFile("./file.txt", "utf8", (_, data) => {
    setTimeout(() => console.log("2nd timer"), 0);

    process.nextTick(() => console.log("2nd nextTick"));

    setImmediate(() => console.log("2nd setImmediate"));

    console.log(data);
});

process.nextTick(() => console.log("process.nextTick"));

console.log("Last line of the file.");

// OUTPUT
// Last line of the file.
// process.nextTick
// promise
// Timer expired
// setImmediate
// <file content>
// 2nd nextTick
// 2nd setImmediate
// 2nd timer

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve("promise").then(console.log);

fs.readFile("./file.txt", "utf8", (_, data) => {
    console.log(data);
});

process.nextTick(() => {
    process.nextTick(() => console.log("inner nextTick"));
    console.log("process.nextTick");
});

console.log("Last line of the file.");

// OUTPUT
// process.nextTick
// inner nextTick
// promise
// Timer expired
// setImmediate
// <file content>