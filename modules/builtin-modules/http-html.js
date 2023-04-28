const httpHTML = require("node:http");
const fs = require("node:fs");

httpHTML
  .createServer((req, res) => {
    // res.writeHead(200, { "content-Type": "text/html" });
    fs.createReadStream(`${__dirname}/http-html.html`).pipe(res);
    // const file = fs.readFileSync(__dirname + "/http-html.html", "utf-8");
    // res.write(file);
    // res.end();
  })
  .listen(3000, () => console.log("server started"));
