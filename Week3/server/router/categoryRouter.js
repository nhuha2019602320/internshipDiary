const express = require('express');
const categoryRouter= express.Router();
const categoryController = require('../controller/categroyController');


categoryRouter.post('/createCategory', categoryController.createCategory);

categoryRouter.get('/getCategory', categoryController.getAllCategory);

categoryRouter.get('/getCategoryy/', categoryController.getCategory);

categoryRouter.delete('/deleteCategory/:id', categoryController.deleteCategory);

categoryRouter.put('/updateCategory/:id', categoryController.editCaegory)

module.exports = categoryRouter;