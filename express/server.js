const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (_, res) => {
    res.send("<p>HI bro</p>");
});

app.get("/about", (_, res) => res.send("<h1>About US</h1>"));

app.post("/tweet", (req, res) => {
    let body = '';

    req.on("data", (chunk) => {
        console.log(chunk);
        body += chunk.toString();
    });

    req.on("end", () => {
        console.log(body);

        res.status(201).send(`Tweet created: ${body}`);
    })
});

app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));