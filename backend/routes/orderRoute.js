const express = require("express");
const router = express.Router();
const {
  newOrder,
  getSingleOrder,
  myOrders,
  deleteOrder,
  getAllOrders,
  updateOrder,
} = require("../controllers/orderController");

const { isAuthUser, authRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthUser, newOrder);
router.route("/order/:id").get(isAuthUser, getSingleOrder);
router.route("/orders/me").get(isAuthUser, myOrders);

router.route("/admin/orders").get(isAuthUser, authRoles("admin"), getAllOrders);
router
  .route("/admin/order/:id")
  .put(isAuthUser, authRoles("admin"), updateOrder)
  .delete(isAuthUser, authRoles("admin"), deleteOrder);
module.exports = router;
