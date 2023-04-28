//in .mjs file we can use esmudiles

import EventEmitter from "events";
const emitter = new EventEmitter();

emitter.on("order-biryani", (type, masala) => {
  console.log(`making ${masala} ${type} biryani`);
});

// we can also handle more than one event

emitter.on("order-biryani", (type) => {
  if (type === "mutton") {
    console.log(`giving complimentary drink for ${type} biryani`);
  }
});

emitter.emit("order-biryani", "mutton", "spicy");
