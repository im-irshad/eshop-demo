const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
  getAdminProducts,
} = require("../controllers/productController");
const { isAuthUser, authRoles } = require("../middleware/auth");
const router = express.Router();

router
  .route("/admin/products")
  .get(isAuthUser, authRoles("admin"), getAdminProducts);

router
  .route("/admin/product/new")
  .post(isAuthUser, authRoles("admin"), createProduct);

router
  .route("/admin/product/:id")
  .put(isAuthUser, authRoles("admin"), updateProduct)
  .delete(isAuthUser, authRoles("admin"), deleteProduct);

router.route("/review").put(isAuthUser, createProductReview);

router.route("/products").get(getAllProducts);
router.route("/product/:id").get(getProductDetails);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthUser, deleteReview);

module.exports = router;
