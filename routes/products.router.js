const express = require('express')
const ProductsService = require('../services/product.service')

const router = express.Router()
const service = new ProductsService();


router.get('/', (req, res) => {

  const products = service.search();

  res.json({
    products,
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


router.delete('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    message: 'Hello the API is working',
    method: 'delete'
  })

})


router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  res.json({
    id,
    body,
    message: 'Hello the API is working',
    method: 'patch'
  })

})

router.post('/', (req, res) => {
  const product = req.body

  res.json({
    product,
    message: 'Hello the API is working',
    method: 'post'
  })

})


module.exports = router;
