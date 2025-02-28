const { addProduct,getProducts,updateProduct } = require('../controller/product_price');
const express = require('express');
const router = express.Router();

router.post('/lists', addProduct);
router.get('/lists', getProducts);
router.patch('/lists/:id', updateProduct);

module.exports = router;