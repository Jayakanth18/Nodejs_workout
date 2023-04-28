const dns = require("node:dns");

//hostname to ipaddress
dns.lookup("www.google.com", (err, address, family) => {
  console.log(`ip address is: ${address}`);
});

//ip to host
const ipAddress = "112.133.205.24";
dns.reverse(ipAddress, (err, address) => {
  console.log(`address is: ${address}`);
});
