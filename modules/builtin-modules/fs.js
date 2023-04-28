const fs = require("fs");

//sync or blocking code
const files1 = fs.readdirSync("./");
console.log(files1);

//async code
const AsyncFiles = fs.readdir("./", (err, files) => {
  if (err) console.log("error in code", err);
  else console.log("sucess", files);
});
console.log(AsyncFiles);


// fs.writeFile("./greet.txt", "hello user", (err, res) => {
//   if (err) {
//     console.log(err, "erroe");
//   } else {
//     console.log(res, "sucess");
//   }
// });
fs.cp