const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connection succed");
});

connection.query("SELECT * FROM emp2", (err, result) => {
  if (err) throw err;
  console.log(result);
});
