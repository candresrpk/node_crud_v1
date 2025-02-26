const express = require('express')
const ProductsService = require('../services/product.service')
const validatorHandler = require('../Middlewares/validator.handler')
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/product.schema')


const router = express.Router()
const service = new ProductsService();


router.get('/', async (req, res, next) => {

  try {
    const products = await service.search();
    res.json({
      products,
      message: 'Hello the API is working',
      method: 'get'
    })
  }
  catch (error) {
    next(error)
  }

})

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const product = await service.searchOne(id);
      res.json({
        product,
        message: 'Hello the API is working',
        method: 'get'
      })
    } catch (error) {
      next(error)
    }

  })


router.delete('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const productDelete = await service.delete(id);
      res.json({
        productDelete,
        message: 'Hello the API is working',
        method: 'delete'
      })
    } catch (error) {
      next(error)
    }

  })


router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res) => {
    try {
      const { id } = req.params
      const body = req.body

      const productUpdate = await service.update(id, body);
      res.json({
        productUpdate,
        message: 'Hello the API is working',
        method: 'patch'
      })
    } catch (error) {
      next(error)

    }

  })

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    try {
      const body = req.body
      const product = await service.create(body);
      res.json({
        product,
        message: 'Hello the API is working',
        method: 'post'
      })
    } catch (error) {
      next(error)
    }

  })


module.exports = router;
