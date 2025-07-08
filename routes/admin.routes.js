// require express / import express package
const express = require('express');

const adminController = require('../controllers/admin.controller');

//import image upload
const imageUploadMiddleware = require('../middlewares/image-upload');

// construct a router object 
const router = express.Router();

router.get('/products', adminController.getProducts);

router.get('/products/new', adminController.getNewProducts);

router.post('/products', imageUploadMiddleware, adminController.createNewProduct);

router.get('/products/:id', adminController.getUpdateProduct);

router.post('/products/:id', imageUploadMiddleware, adminController.updateProduct);

router.delete('/products/:id', adminController.deleteProduct); // delete method

router.get('/orders', adminController.getOrders);

router.patch('/orders/:id', adminController.updateOrder);

// features objects that should be expose to other file
module.exports = router;