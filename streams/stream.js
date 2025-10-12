const { createReadStream, createWriteStream, write } = require("node:fs");
const path = require("node:path");
const { Buffer } = require("node:buffer");

const inputFilePath = path.join(__dirname, "input.txt"); 
const outputFilePath = path.join(__dirname, "output.txt"); 

const readableStream = createReadStream(inputFilePath, {
    encoding: "utf-8",
    highWaterMark: 15
});

const writeableStream = createWriteStream(outputFilePath);

// readableStream.pipe(writeableStream);

readableStream.on("data", (chunk) => {
    console.log("Received Chunk: ", chunk);
    console.log("Buffer: ", Buffer.from(chunk), '\n');

    writeableStream.write(chunk);
});

readableStream.on("end", () => {
    console.log("File read completed");
    writeableStream.end();
});

readableStream.on("error", (err) => console.error("Error: ", err));
writeableStream.on("error", (err) => console.error("Error: ", err));