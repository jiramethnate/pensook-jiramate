const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  productId: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  countInStock: { type: Number, required: true },
  imageUrl: { type: String },
  uom: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);

module.exports = { Product };