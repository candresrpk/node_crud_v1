const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ProductsService {

  constructor() {
    this.products = [];
  }



  async create(data) {

    const newProduct = await models.Product.create(data)
    return { "message": "Product created", "data": newProduct }
  }


  async search() {

    const products = await models.Product.findAll()

    return { "message": "Products found", "data": products }
  }

  async searchOne(id) {
    const product = await models.Product.findByPk(id)

    if (!product) {
      throw boom.notFound('Product not found')
    }

    return { "message": "Product found", "product": product }

  }

  async productUpdate(id, data) {
    const { product } = await this.searchOne(id)

    const updateProduct = await product.update(data)
    return { "message": "Product updated", "id": id, "data": updateProduct }

  }

  async delete(id) {
    const { product } = await this.searchOne(id)
    await product.destroy()
    return { "message": "Product deleted", "id": id }

  }

}



module.exports = ProductsService;
