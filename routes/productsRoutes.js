const express = require('express');

const router = express.Router();

const {
  getAllProductsController,
  productByIdController,
  setNewProductController,
  updateProductController,
  deleteProductController,
} = require('../controller/productsController');

const {
  validateNameProduct,
  validateQuantityProduct,
} = require('../middlewares/productsMiddleware');

router.get('/', getAllProductsController);
router.get('/:id', productByIdController);
router.post('/', validateNameProduct, validateQuantityProduct, setNewProductController);
router.put('/:id', validateNameProduct, validateQuantityProduct, updateProductController);
router.delete('/:id', deleteProductController);

module.exports = router;
