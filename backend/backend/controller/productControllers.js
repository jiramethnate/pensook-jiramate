const mongoose = require('mongoose');
const { Product } = require('../models/Product');

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving products' });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const data = req.body.data
    for (const item of data) {
      const product = await Product.findById(item.product); // Find the product by ID

      if (product) {
        const updatedQty = product.countInStock - item.qty; // Calculate the updated quantity

        product.countInStock = updatedQty; // Update the countInStock field
        await product.save(); // Save the updated product

        console.log(`Updated quantity for product: ${product.name}`);
      } else {
        console.log(`Product not found for ID: ${item.product}`);
      }
    }
  } catch (error) {
    console.error('Error updating product stock:', error);
  }
};

module.exports = {
  getProducts,
  getProductById,
  updateProduct
};
