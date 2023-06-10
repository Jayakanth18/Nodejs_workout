const router = require("express").Router();

const marketsList = [
  {
    id: 1,
    store: "Alice Super Market",
    km: 7,
  },
  {
    id: 2,
    store: "SM Super Market",
    km: 4,
  },
  {
    id: 3,
    store: "Krishna Provisonal Stores",
    km: 0.5,
  },
  {
    id: 4,
    store: "Ponnu Super Market",
    km: 12,
  },
];

//all stores
router.get("/", (req, res) => {
  res.send(marketsList);
});
// add new stores
router.post("/", (req, res) => {
  let newValue = req.body;
  marketsList.push(newValue);
  res.sendStatus(200);
});
//get specific store with store name
router.get("/:store", (req, res) => {
  //   console.log(req.params);
  let { store } = req.params;
  let singleStore = marketsList.find(
    (s) => s.store.toLowerCase() === store.toLowerCase()
  );
  res.send(singleStore);
});

module.exports = router;
