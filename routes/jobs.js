const express = require('express')
const router = express.Router()

//Jobs route
router.get('/', (req, res) => {
  res.send("Hello I am job route");
})

module.exports = router;