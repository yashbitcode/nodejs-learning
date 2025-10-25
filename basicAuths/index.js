const express = require("express");
const app = express();
const PORT = 8000;

const diary = {};
const entries = new Set();

app.use(express.json());

app.post("/signup", (req, res) => {
    try {
        const { name, email, password } = req.body || {};
        if (entries.has(email)) throw Error("Email already in use");

        const token = Date.now();
        diary[token] = {
            name,
            email,
            password,
        };

        res.json({
            success: true,
            token,
        });
    } catch (err) {
        res.status(400).json({
            error: err.message,
        });
    }
});

// 1761379973211
app.post("/me", (req, res) => {
    try {
        const { token } = req.body || {};

        if (!token) throw Error("Missing token");
        if (!diary[token]) throw Error("Invalid token");

        res.json({
            success: true,
            data: diary[token],
        });
    } catch (err) {
        res.status(400).json({
            error: err.message,
        });
    }
});

app.post("/login", (req, res) => {
    try {
        const { token } = req.body || {};

        if (!token) throw Error("Missing token");
        if (!diary[token]) throw Error("Invalid token");

        res.json({
            success: true,
            privateData: "Access Granted"
        });
    } catch (err) {
        res.status(400).json({
            error: err.message,
        });
    }
});

app.listen(PORT, () => console.log(`Server up and running on PORT: ${PORT}`));
