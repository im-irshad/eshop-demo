const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../controllers/userController");
const { isAuthUser, authRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/me").get(isAuthUser, getUserDetails);
router.route("/password/update").put(isAuthUser, updatePassword);
router.route("/me/update").put(isAuthUser, updateProfile);
router.route("/admin/users").get(isAuthUser, authRoles("admin"), getAllUser);
router
  .route("/admin/user/:id")
  .get(isAuthUser, authRoles("admin"), getSingleUser)
  .put(isAuthUser, authRoles("admin"), updateUserRole)
  .delete(isAuthUser, authRoles("admin"), deleteUser);

module.exports = router;
