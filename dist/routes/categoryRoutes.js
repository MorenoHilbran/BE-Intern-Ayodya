"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _categoryController = require("../controllers/categoryController.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.get("/", _categoryController.getAllCategories);
router.post("/", _categoryController.createCategory);
router.get("/:id", _categoryController.getCategoryById);
router["delete"]("/:id", _categoryController.deleteCategory);
router.patch("/:id", _categoryController.updateCategory);
var _default = exports["default"] = router;