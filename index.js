let a = 1;
let b = 2;
let c = 3;

console.log(a);

setTimeout(async () => {
  await console.log("async");
}, 1000);

console.log(b);
console.log(c);
