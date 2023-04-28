const start = Date.now();

for(let i=0;i<1000000000;i++){}

console.log(Date.now() - start);
