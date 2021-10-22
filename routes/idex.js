const express = require('express');

const router = express.Router();

const customersController = require('../controllers/customersController');
const productsController = require('../controllers/productsController');

module.exports = function(){
  //Definir ruta tipo get
  router.get('/customers',customersController.list);
  //Post agregar
  router.post('/customers',customersController.add);
  //Editar
  router.get('/customers/:id',customersController.show);
  //PUT
  router.put('/customers/:id', customersController.update);
  //Delete
  router.delete('/customers/:id', customersController.delete);

  //Producto

  router.get('/products',productsController.list);
  router.post('/products',productsController.add);
  router.get('/products/:id',productsController.show);
  router.put('/products/:id',productsController.update);
  router.delete('/products/:id', productsController.delete);


  return router;

}
