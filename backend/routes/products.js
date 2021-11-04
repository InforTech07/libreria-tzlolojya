const express = require('express');
const ctrl = require('../controllers/product.ctrl.js');

const router = express.Router();

router.get('/',ctrl.getProducts);
router.get('/:id',ctrl.getProduct);
router.post('/',ctrl.newProduct);
router.put('/:id',ctrl.updateProduct);
router.delete('/:id',ctrl.deleteProduct);
module.exports=router;
