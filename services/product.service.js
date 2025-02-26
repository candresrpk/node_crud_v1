const boom = require('@hapi/boom');


class ProductsService {

  constructor() {
    this.products = [];
  }



  async create(data) {

    return { "message": "Product created", "data": data }
  }


  async search() {
    return 'search products'
  }

  async searchOne(id) {
    return { "message": "Product found", "id": id }

  }

  async update(id, data) {
    return { "message": "Product updated", "id": id, "data": data }

  }

  async delete(id) {
    return { "message": "Product deleted", "id": id }

  }

}



module.exports = ProductsService;
