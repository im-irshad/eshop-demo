const Order = require("../models/orderModel");
const Product = require("../models/productModel");
exports.newOrder = async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    user: req.user._id,
  });
  res.status(201).json({
    success: true,
    order,
  });
};

// get single order
exports.getSingleOrder = async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order) {
    return next(
      res.status(404).json({
        success: false,
        message: "Order not found with this id ",
      })
    );
  }

  res.status(200).json({
    success: true,
    order,
  });
};

// get my orders
exports.myOrders = async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    orders,
  });
};

// get all orders ---admin
exports.getAllOrders = async (req, res, next) => {
  const orders = await Order.find();
  let totalAmount = 0;
  orders.forEach((order) => {
    totalAmount += order.totalPrice;
  });
  res.status(200).json({
    success: true,
    totalAmount,
    orders,
  });
};

// get update order status ---admin
exports.updateOrder = async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  console.log(order.paymentInfo.status);
  if (order.paymentInfo.status === "Delivered") {
    return next(
      res.status(400).json({
        success: false,
        message: " already devliered ",
      })
    );
  }

  order.orderItems.forEach(async (o) => {
    await updateStock(o.product, o.quantity);
  });
  order.orderStatus = req.body.status;
  if (req.body.status === "Delivered") {
    order.deliveredAt = Date.now();
  }
  await order.save({ validateBeforeSave: false });
  order.deliveredAt = res.status(200).json({
    success: true,
    order,
  });

  async function updateStock(id, quantity) {
    const product = await Product.findById(id);
    product.Stock -= quantity;
    await product.save({ validateBeforeSave: false });
  }
};

// delete order ---admin
exports.deleteOrder = async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    return next(
      res.status(404).json({
        success: false,
        message: "Order not found with this id ",
      })
    );
  }
  await order.remove();
  res.status(200).json({
    success: true,
    order,
  });
};
