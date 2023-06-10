const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("<h1> Home Page </h2>");
});

module.exports = router;
