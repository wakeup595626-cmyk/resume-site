const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 8765;
const server = http.createServer((req, res) => {
  const p = path.join(__dirname, req.url === "/" ? "index.html" : req.url);
  try {
    const data = fs.readFileSync(p);
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(data);
  } catch {
    res.writeHead(404); res.end("not found");
  }
});
server.listen(port, () => console.log("http://localhost:" + port));
