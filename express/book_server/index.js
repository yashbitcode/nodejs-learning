const express = require("express");
const fs = require("node:fs");
const bookRouter = require("./routes/books.route");

const app = express();
const PORT = 8000;

// app.use((req, res, next) => {
//     express.json()(req, res, next);
// });

// app.use(express.json());

// app.use((req, res, next) => {
//     const log = `[${Date.now()}] ${req.method} ${req.url}\n`;
//     fs.appendFileSync("./express/book_server/log.txt", log, "utf-8");

//     next();
// });
setTimeout(() => console.log("first"));

app.use("/", (req, res, next) => {
    console.log("hihi");
    next();
});

app.all("/ee", (req, res) => res.send("all resss"));

app.get("/geu", (req, res) => {
    try {
        throw new Error("sample error");
    } catch {
        throw new Error("sample error");
        res.status(500).send("errrrrrrrrrrr");
    }
});

app.use("/", (err, req, res, next) => {
    res.status(500).json(err.message);
});

app.get("/", (req, res) => res.send("Hi Bro!!"));
app.use("/books", bookRouter);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
