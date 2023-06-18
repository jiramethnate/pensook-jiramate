const express = require("express");
const router = express.Router();
const {verifyUser} = require('../middleware/middleware')
const {
  getProducts,
  getProductById,
  updateProduct
} = require("../controller/productControllers");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.route('/').post([verifyUser], updateProduct)


module.exports = router;
