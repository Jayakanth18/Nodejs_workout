const router = require("express").Router();
//another method
// i.  const { Router } = require('express');
// ii. const router = Router();
let groceriesList = [
  {
    item: "Apple",
    quantity: 12,
  },
  {
    item: "Avacado",
    quantity: 3,
  },
  {
    item: "Drum Stick",
    quantity: 4,
  },
  {
    item: "Cucumber",
    quantity: 8,
  },
];

// to fetch data
router.get("/", (req, res) => {
  console.log(req.query)
  res.send(groceriesList);
});
//to post data
router.post("/", (req, res) => {
  groceriesList.push(req.body);
  res.sendStatus(201);
});

// to get single item with req.params
router.get("/:item", (req, res) => {
  let { item } = req.params;
  let newList = groceriesList.find(
    (el) => el.item.toLowerCase() === item.toLowerCase()
  );
  if (newList) {
    res.send(newList);
  } else {
    res.status(404).send("<h1>Not Found</h1>");
  }
});

module.exports = router;
