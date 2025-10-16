const express = require("express");
const app = express();
const PORT = 8000;

const books = [
    {
        id: 1, 
        author: "Auth 1",
        title: "Book 1"
    },
    {
        id: 2, 
        author: "Auth 2",
        title: "Book 2"
    },
    {
        id: 3, 

        author: "Auth 3",
        title: "Book 3"
    },
];

app.use(express.json());

app.get("/", (req, res) => res.send("Hi Bro!!"));

app.get("/books", (req, res) => {
    res.json(books);
});

app.get("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);

    if(isNaN(id)) return res.status(400).json({
        error: "Id should be a type number"
    });

    const book = books.find((el) => el.id == id);

    if(!book) return res.status(404).send({
        error: `Book doesn't exist with the id ${id}`
    });

    return res.json(book);
});

app.post("/books", (req, res) => {
    const { title, author } = req.body;

    if(!title) return res.status(400).json({
        error: "title required"
    });

    if(!author) return res.status(400).json({
        error: "author required"
    });

    const id = books.length + 1;

    books.push({
        id, 
        title,
        author
    });

    return res.json(201).json({
        message: "Book created Successfully",
        id
    });
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));