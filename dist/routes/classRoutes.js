"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _classController = require("../controllers/classController.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.get("/", _classController.getAllClasses);
router.get("/:id", _classController.getClassById);
router.post("/", _classController.createClass);
router.patch("/:id", _classController.updateClass);
router["delete"]("/:id", _classController.deleteClass);
var _default = exports["default"] = router;