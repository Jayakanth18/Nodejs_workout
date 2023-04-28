const httpRouting = require("node:http");

httpRouting
  .createServer((req, res) => {
    if (req.url === "/") {
      res.end("Home Page");
    } else if (req.url === "/about") {
      res.end("About Page");
    } else if (req.url === "/contact") {
      res.end("Contact us");
    } else {
      res.writeHead(404);
      res.end("No page found");
    }
  })
  .listen(3000, () => console.log("server started"));
