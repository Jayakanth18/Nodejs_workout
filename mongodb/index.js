const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const exhbs = require("express-handlebars");
const global = require("./db");
const { ObjectId } = require("mongodb");

app.use(bodyParser.urlencoded({ extended: true }));

app.engine(
  "hbs",
  exhbs.engine({ layoutsDir: "views/", defaultLayout: "main", extname: "hbs" })
);
app.set("view engine", "hbs");
app.set("views", "views");

app.get("/", async (req, res) => {
  let database = await global.getData();
  let collection = database.collection("books");
  let cursor = collection.find();
  let data = await cursor.toArray();
  let message = "";
  let edit_id, edit_data;
  if (req.query.edit_id) {
    edit_id = req.query.edit_id;
    edit_data = await collection.findOne({ _id: new global.ObjectID(edit_id) });
  }

  if (req.query.delete_id) {
    await collection.deleteOne({
      _id: new global.ObjectID(req.query.delete_id),
    });
    res.redirect("/?status=3");
  }

  switch (req.query.status) {
    case "1":
      message = "Inserted Succesfully";
      break;
    case "2":
      message = "Updates Succesfully";
      break;
    case "3":
      message = "Deleted Successfully";
      break;
  }
  res.render("main", { message, data, edit_id, edit_data });
});

app.post("/store_data", async (req, res) => {
  let database = await global.getData();
  let collection = database.collection("books");
  let postData = { title: req.body.title, author: req.body.author };
  await collection.insertOne(postData);
  return res.redirect("/?status=1");
});

app.post("/update_data/:edit_id", async (req, res) => {
  let database = await global.getData();
  let collection = database.collection("books");
  let postData = { title: req.body.title, author: req.body.author };
  let edit_id = req.params.edit_id;
  await collection.updateOne(
    { _id: new global.ObjectID(edit_id) },
    { $set: postData }
  );
  return res.redirect("/?status=2");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
