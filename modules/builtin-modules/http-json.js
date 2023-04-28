const httpJSON = require("node:http");

httpJSON
  .createServer((req, res) => {
    const details = {
      first_name: "Jakayanth",
      last_name: "R",
      age: 22,
      place: "Thiruvallur",
      state: "Tamil Nadu",
    };
    // res.writeHead(200, { "content-Type": "application/json" });
    // res.write(JSON.stringify(details));
    res.end(JSON.stringify(details));
  })
  .listen(5500, () => console.log("Server Started on localhost:5500"));
