const express = require("express");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const app = express();
const errorMiddleware = require("./middleware/error");
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());

// routes
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
// stil to add route for payment

// middleware for Errors
app.use(errorMiddleware);

module.exports = app;
