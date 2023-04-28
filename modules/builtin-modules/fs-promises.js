const fsPromises = require("fs/promises");

fsPromises
  .readdir(__dirname)
  .then((resolve) => console.log(resolve))
  .catch((err) => console.log(err));
