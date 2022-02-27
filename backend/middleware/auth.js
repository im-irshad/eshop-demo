const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// authorization token
exports.isAuthUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(
      res.status(401).json({
        success: false,
        message: "You are not login",
      })
    );
  }
  const decodeData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodeData.id);
  next();
};

// authorise user admin or normal
exports.authRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        res.status(403).json({
          success: false,
          message: "Access Denied",
        })
      );
    }
    next();
  };
};
