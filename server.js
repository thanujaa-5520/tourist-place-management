const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    let filePath = "." + (req.url === "/" ? "/index.html" : req.url);

    const extname = path.extname(filePath).toLowerCase();

    let contentType = "text/html";
    if (extname === ".css") contentType = "text/css";
    else if (extname === ".js") contentType = "text/javascript";
    else if (extname === ".json") contentType = "application/json";
    else if (extname === ".png") contentType = "image/png";
    else if (extname === ".jpg" || extname === ".jpeg") contentType = "image/jpeg";
    else if (extname === ".mp4") contentType = "video/mp4";

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("404 - File Not Found");
        } else {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content);
        }
    });
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});