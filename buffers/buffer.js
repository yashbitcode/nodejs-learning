const { Buffer } = require("node:buffer");

// const buf = Buffer.alloc(10);
// console.log(buf);

// const buf = Buffer.from("H");
// console.log(buf);

// const buf = Buffer.allocUnsafeSlow(100);
// console.log(buf.toString());

const buf = Buffer.from("YashBitCode");
// console.log(buf.toString("utf16le", 0, 4));
buf[0] = 0x0048;

console.log(buf);
console.log(buf.toString());