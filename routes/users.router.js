const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {

  res.json({

    message: 'Hello the API is working Users endpoit',
    method: 'get'
  })

})

router.get('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    message: 'Hello the API is working Users endpoit',
    method: 'get'
  })

})


router.delete('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    message: 'Hello the API is working Users endpoit',
    method: 'delete'
  })

})


router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  res.json({
    id,
    body,
    message: 'Hello the API is working Users endpoit',
    method: 'patch'
  })

})

router.post('/', (req, res) => {
  const product = req.body

  res.json({
    product,
    message: 'Hello the API is working Users endpoit',
    method: 'post'
  })

})


module.exports = router;
