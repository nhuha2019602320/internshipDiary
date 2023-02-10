const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  productCode: {
    type: String,
    require: true,
  },
  nameProduct: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  imgaeProduct: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Categries",
  },
});

module.exports = mongoose.model("Products", ProductSchema);
