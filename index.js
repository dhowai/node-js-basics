const fs = require("fs");
const http = require("http");

// SERVER

const server = http.createServer((req, res) => {
  res.end("Hello");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on 8000");
});
