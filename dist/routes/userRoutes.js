"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userController = require("../controllers/userController.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();

// Auth Routes
router.post("/register", _userController.registerUser);
router.post("/login", _userController.loginUser);

// Protected Routes (hanya bisa diakses jika login)
router.get("/", _userController.authenticateUser, _userController.getUsers);
router.get("/:id", _userController.authenticateUser, _userController.getUserById);
router.patch("/:id", _userController.authenticateUser, _userController.updateUser);
router["delete"]("/:id", _userController.authenticateUser, _userController.deleteUser);
var _default = exports["default"] = router;