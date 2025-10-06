const crypto = require("crypto");

crypto.pbkdf2("password", "salt", 1000000, 50, "sha512", (_, key) => console.log(1, "key"));
crypto.pbkdf2("password", "salt", 1000000, 50, "sha512", (_, key) => console.log(2, "key"));
crypto.pbkdf2("password", "salt", 1000000, 50, "sha512", (_, key) => console.log(3, "key"));
crypto.pbkdf2("password", "salt", 1000000, 50, "sha512", (_, key) => console.log(4, "key"));
crypto.pbkdf2("password", "salt", 1000000, 50, "sha512", (_, key) => console.log(5, "key"));