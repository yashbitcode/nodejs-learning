const fs = require("node:fs");
const http = require("node:http");
// const url = require("url");

const server = http.createServer((req, res) => {
    let body = "";

    req.on("data", (chunk) => {
        body += chunk.toString();
    });

    req.on("end", () => {
        const logData = `Timestamp: ${Date.now()}\nRequest Method: ${req.method}\nRequest URL: ${req.url}\n\n`;

        fs.appendFileSync("./httpServer/logs.txt", logData);

        switch (req.method) {
            case "GET": {
                switch (req.url) {
                    case "/": {
                        res.writeHead(200);
                        res.end("Homepage, HELLO BRO!");

                        break;
                    }

                    case "/contact-us": {
                        res.writeHead(200, {
                            "Content-Type": "application/json",
                        });
                        res.end(
                            JSON.stringify({
                                name: "YashBitCode",
                                email: "yash@bit.code",
                                contact: "+91 99XXX XXXXX",
                            })
                        );

                        break;
                    }

                    case "/about-us": {
                        res.writeHead(200);
                        res.end("About page");

                        break;
                    }

                    case "/tweets": {
                        res.writeHead(200, {
                            "Content-Type": "application/json",
                        }).end(
                            JSON.stringify({
                                data: ["tweet-1", "tweet-2", "tweet-3"],
                            })
                        );
                        break;
                    }

                    default: {
                        res.writeHead(404);
                        res.end("Invalid page");
                    }
                }

                break;
            }

            case "POST": {
                switch (req.url) {
                    case "/tweets": {
                        console.log(body);
                        res.writeHead(201).end("Tweet Created Successfully");
                        break;
                    }

                    default: {
                        res.writeHead(404).end("Invalid POST request");
                    }
                }

                break;
            }

            default: {
                res.writeHead(404).end("Invalid Request");
            }
        }
    });
});

server.listen(8000, () => {
    console.log("https server up and running on port 8000");
});
