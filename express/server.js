const express = require("express");
const homeRoute = require("./routes/home");
const groceriesRoute = require("./routes/groceries");
const marketRoute = require("./routes/market");

const app = express();
// middleware
app.use(express.json());
//home
app.use("/", homeRoute);
//groceries
app.use("/groceries", groceriesRoute);
//market
app.use("/markets", marketRoute);

app.listen(8080, () => console.log("server started"));
