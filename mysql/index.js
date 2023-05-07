const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sql@123",
  database: "test",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connection succed");
});

connection.query("SELECT * FROM emp", (err, result) => {
  if (err) throw err;
  console.log(result);
});
