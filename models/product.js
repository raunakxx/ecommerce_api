const mongoose = require('mongoose');

const VariantSchema = new mongoose.Schema({
  name: String,
  SKU: String,
  additionalCost: Number,
  stockCount: Number
});

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  variants: [VariantSchema]
});

module.exports = mongoose.model('Product', ProductSchema);
