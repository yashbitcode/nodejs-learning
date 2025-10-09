const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    // const parsedUrl = url.parse(req.url, true);
    // const queries = parsedUrl.query;

    // console.log(req.method);

    // if(Object.keys(queries).length > 0) res.end(JSON.stringify(queries));
    // else res.end(JSON.stringify({
    //     queries: "Queries Needed"
    // }));

    console.log(req.url);

    switch(req.url) {
        case "/": {
            res.writeHead(200);
            return res.end("Homepage");
        }

        case "/contact-us": {
            res.writeHead(200);
            return res.end("Contact page");
        }

        case "/about-us": {
            res.writeHead(200);
            return res.end("About page");
        }

        default: {
            res.writeHead(404);
            return res.end("Invalid page");
        }
    }
    res.end("dsds");
});

server.listen(8000, () => {
    console.log("https server up and running on port 8000");
});