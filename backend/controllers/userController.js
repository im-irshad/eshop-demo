const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

// Register User
exports.registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
  });
  // get JWT token
  sendToken(user, 201, res);
};

//Login User
exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  // checking if username and password entered
  if (!email || !password) {
    return next(
      res.status(400).json({
        success: false,
        message: "email or password not entered",
      })
    );
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(
      res.status(401).json({
        success: false,
        message: "invalid email or password",
      })
    );
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(
      res.status(401).json({
        success: false,
        message: "invalid email and password",
      })
    );
  }
  sendToken(user, 200, res);
};

// Log out route
exports.logout = async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
};

//get user details
exports.getUserDetails = async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
};

// update password
exports.updatePassword = async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");
  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);
  if (!isPasswordMatched) {
    return next(
      res.status(400).json({
        success: false,
        message: "old password is incorrect",
      })
    );
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(
      res.status(400).json({
        success: false,
        message: "password & confirm password doesnot match",
      })
    );
  }
  user.password = req.body.newPassword;
  user.save();
  sendToken(user, 200, res);
};

// update profile
exports.updateProfile = async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  };

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
};

// get all users ---admin route

exports.getAllUser = async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
};

// get single users ---admin route
exports.getSingleUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      res.status(400).json({
        success: false,
        message: "user does not exist with entered id ",
      })
    );
  }
  res.status(200).json({
    success: true,
    user,
  });
};

// update user Role------admin
exports.updateUserRole = async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  const user = await User.findByIdAndUpdate(req.params.id);

  if (!user) {
    return next(
      res.status(400).json({
        success: false,
        message: "user not found ",
      })
    );
  }

  res.status(200).json({
    success: true,
  });
};

// Delete user ------admin
exports.deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      res.status(400).json({
        success: false,
        message: "user not found ",
      })
    );
  }
  await user.remove();
  res.status(200).json({
    success: true,
    message: "user deleted successfully",
  });
};
