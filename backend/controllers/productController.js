const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");

// add product by admin user
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};
// get product
exports.getAllProducts = async (req, res) => {
  const product = await Product.find(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

// get single product by admin user
exports.getProductDetails = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    //return next(new ErrorHandler("product not found", 404));
    res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }
  res.status(200).json({
    success: true,
    product,
  });
};

// update product by admin user
exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
};

// delete product by admin user
exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }
  await Product.deleteOne();
  res.status(200).json({
    success: true,
    message: "product deleted succesfully ",
  });
};
