var a = "hello";
var b = "world";

console.log(a);

setTimeout(() => {
  console.log("async");
}, 1500);

console.log(b);
