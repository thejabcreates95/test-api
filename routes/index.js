const express = require('express');
const router = express.Router();


router.post('/get-sum', async (req, res) => {
  const { num1, num2 } = req.body

  res.send({
    data : parseInt(num1) + parseInt(num2)
  })
})

module.exports = router
