const express = require('express');
const categoryRouter= express.Router();
const categoryController = require('../controller/categroyController');


categoryRouter.post('/createCategory', categoryController.createCategory);

module.exports = categoryRouter;