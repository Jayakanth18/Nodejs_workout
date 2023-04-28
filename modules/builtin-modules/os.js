const os = require("os");

console.log(os.arch());
console.log(os.homedir());
console.log(os.platform());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.release());
console.log(os.version());
console.log(os.cpus()/*[0].model*/);
