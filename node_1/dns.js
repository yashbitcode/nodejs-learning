// const dns = require("node:dns");

// dns.lookup("pokeversebit.vercel.app", (err, address, family) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(address);
//     console.log(family);
// });

// dns.resolve4("node.org", (err, address) => {
//     if(err) {
//         console.log(err);
//         return;
//     }

//     address.forEach((add) => {
//         dns.reverse(add, (err, hostnames) => {
//             if(err) {
//                 console.log(err);
//                 return;
//             }

//             console.log("reverse:", add, ":", hostnames);
//         });
//     })
// });
// const fs = require('node:fs');

// function someAsyncOperation(callback) {
//   // Assume this takes 95ms to complete
//   fs.readFile('./file.txt', callback);
// }

// const timeoutScheduled = Date.now();

// setTimeout(() => {
//   const delay = Date.now() - timeoutScheduled;

//   console.log(`${delay}ms have passed since I was scheduled`);
// }, 100);

// // do someAsyncOperation which takes 95 ms to complete
// someAsyncOperation(() => {
//   const startCallback = Date.now();

//   // do something that will take 10ms...
//   while (Date.now() - startCallback < 600) {
//     // do nothing
//   }

//   console.log("dsds")
// });

// timeout_vs_immediate.js
const fs = require("fs");

setTimeout(() => {
  console.log('timeout');
}, 0);

setImmediate(() => {
  console.log('immediate');
});

// console.log("first")