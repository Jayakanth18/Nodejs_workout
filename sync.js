var a = "hello";

async function expensive() {
  for (let i = 0; i < 1500000000; i++) {}
  console.log("expensive function");
}

var b = "world";

console.log(a);
expensive();
console.log(b);
