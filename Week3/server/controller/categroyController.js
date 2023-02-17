const categoryModel = require('../models/category.model');

const categoryController = {
    createCategory : async (req, res) => {
        const newCategory = new categoryModel();
         newCategory.categoryCode = req.body.categoryCode,
         newCategory.categroyName = req.body.categroyName
 
         try {
            const category = await newCategory.save();
            res.send(category);
         } catch (error) {
            res.send("error");
         }
    }
}

module.exports = categoryController;