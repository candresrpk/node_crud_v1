const boom = require('@hapi/boom');
const pool = require('../libs/postgres');

class ProductsService {

  constructor() {
    this.products = [];
    this.dbpool = pool;
    this.dbpool.on('error', (err) => console.error('Unexpected error on idle client', err))
  }



  async create(data) {

    return { "message": "Product created", "data": data }
  }


  async search() {

    const query = 'SELECT * FROM tasks';
    const { rows } = await this.dbpool.query(query)

    return { "message": "Products found", "data": rows }
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
