const path = require("path");

console.log(__filename); // filename and dirname is available globaly.
console.log(__dirname);

console.log(path.dirname(__filename));
console.log(path.dirname(__dirname));

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.extname(__filename));
console.log(path.extname(__dirname));

console.log(path.join("jk", "code", "react", "file.jsx"));
console.log(path.resolve("jk", "code", "react", "file.jsx")); //refer docs or codevolution YT

console.log(path.isAbsolute(__filename));

console.log(path.parse(__filename));
console.log(path.parse(__dirname));
