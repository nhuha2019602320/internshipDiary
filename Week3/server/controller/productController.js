const productModel = require("../models/product.model");
const categoryModel = require("../models/category.model");
const { findByIdAndDelete } = require("../models/user.model");
const { productValidate } = require("../validations/productValidation");

const productController = {
//   addProduct : async(req, res) => {
//       const newProduct = new productModel(req.body);
//       const saveProduct = await newProduct.save();
//       if(req.body.category) {
//           const categoryCode = categoryModel.findById(req.body.category);
//           await categoryCode.updateOne({
//               $push: {
//                   products: saveProduct._id
//               }
//           })
//           res.status(200).json(saveProduct);
//       }
//   },
  createProduct: async (req, res) => {
    try {
      const { err } = productValidate(req.body);
      if (err) return res.status(500).send("check data input");
      const productCodeExisted = await productModel.findOne({
        productCode: req.body.productCode,
      });
      if (productCodeExisted) {
        return res.status(400).json("Existed productCode in DB");
      }

      const newProduct = new productModel();
      newProduct.productCode = req.body.productCode;
      newProduct.nameProduct = req.body.nameProduct;
      newProduct.price = req.body.price;
      newProduct.imgaeProduct = req.body.imgaeProduct;
      newProduct.quantity = req.body.quantity;
      newProduct.description = req.body.description;

        const saveProduct = await newProduct.save();
        if (req.body.category) {
            const categoryCode = categoryModel.findById(req.body.category);
            await categoryCode.updateOne({
              $push: {
                products: saveProduct._id,
              },
            });
          }
        res.send(saveProduct);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  getProduct: async (req, res) => {
    try {
      const product = await productModel.find({
        productCode: req.body.productCode.toString(),
      });
      res.send(product);
    } catch (error) {
      res.send("error");
    }
  },
  getAllProducts: async (req, res) => {
    try {
      const products = await productModel.find({}).exec();
      res.send(products);
    } catch (error) {
      res.send(error);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      productModel.findByIdAndDelete(await { _id: req.params.id }, (err) => {
        if (err) {
          res.send("delete failed");
        } else {
          res.send("delete successfully");
        }
      });
    } catch (error) {
      res.status(500).send(error);
    }
  },
  editProduct: async (req, res) => {
    productModel.findByIdAndUpdate(
      await { _id: req.params.id },
      {
        $set: {
          productCode: req.body.productCode,
          nameProduct: req.body.nameProduct,
          price: req.body.price,
          imgaeProduct: req.body.imgaeProduct,
          quantity: req.body.quantity,
          description: req.body.description,
        },
      },
      (err) => {
        if (err) {
          res.status(404).json("update Failed");
        } else {
          res.status(200).json("update successFully");
        }
      }
    );
  },
};

module.exports = productController;
