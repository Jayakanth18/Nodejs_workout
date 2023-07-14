const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectId

const getData = async () => {
  const connection = await MongoClient.connect("mongodb://127.0.0.1:27017");
  let database = connection.db("library");
  if (!database) console.log("error in db");
  return database;
};

module.exports = {
  getData,
  ObjectID
};
