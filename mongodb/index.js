const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const exhbs = require("express-handlebars");

app.engine(
  "hbs",
  exhbs.engine({ layoutsDir: "views/", defaultLayout: "main", extname: "hbs" })
);
app.set("view engine", "hbs");
app.set("views", "views");

app.get("/", (req, res) => {
  let message = "Hello World!";
  res.render("main", { message });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
