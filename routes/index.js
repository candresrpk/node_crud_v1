const express = require('express');
const productsRouter = require('./products.router');
const categoryRouter = require('./category.router');
const usersRouter = require('./users.router');
const clientRouter = require('./clients.router');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1/', router)
  router.use('/products/', productsRouter);
  router.use('/categories/', categoryRouter);
  router.use('/users/', usersRouter);
  router.use('/clients/', clientRouter);

}


module.exports = routerApi;
