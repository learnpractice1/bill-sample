const { addProduct,getProducts } = require('../controller/product_price');
const express = require('express');
const router = express.Router();

router.post('/add_product', addProduct);
router.get('/get_products', getProducts);

module.exports = router;