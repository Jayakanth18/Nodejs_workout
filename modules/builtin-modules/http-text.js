const http = require("node:http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-Type": "text/plain" });
    res.write("hello world");
    console.log(req);
    res.end();
  })
  .listen(3300, () => console.log("server started"));
