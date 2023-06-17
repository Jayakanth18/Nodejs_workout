const {Router} = require("express");
const router = Router()

router.get('*', (req,res) => {
  res.send("<h1 style='text-align: center'>Page Not Found</h1>");
})

module.export = router;
