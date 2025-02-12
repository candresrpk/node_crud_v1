const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {

  res.json({

    message: 'Hello the API is working',
    method: 'get'
  })

})

router.get('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    message: 'Hello the API is working',
    method: 'get'
  })

})


router.put('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    message: 'Hello the API is working',
    method: 'put'
  })

})

router.post('/', (req, res) => {
  const product = req.body
  res.json({
    product,
    message: 'Hello the API is working',
    method: 'get'
  })

})


module.exports = router;
