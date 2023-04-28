const global = require("./creatingModules");
//variables
console.log("My Name is:", global.myName);
console.log("My Age is:", global.myAge);

//function
global.greet("jk");


//class
const Car = global.car;

let hyundai = new Car('verna','red')
console.log(hyundai)
