"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateClassValidation = exports.createClassValidation = void 0;
var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var createClassValidation = exports.createClassValidation = function createClassValidation(payload) {
  var schema = _joi["default"].object({
    name: _joi["default"].string().required(),
    categoryId: _joi["default"].string().required(),
    code: _joi["default"].string().required(),
    type: _joi["default"].string().valid("Premium", "Free").required(),
    level: _joi["default"].string().required(),
    price: _joi["default"].number().required(),
    content: _joi["default"].string().required()
  });
  return schema.validate(payload);
};
var updateClassValidation = exports.updateClassValidation = function updateClassValidation(payload) {
  var schema = _joi["default"].object({
    name: _joi["default"].string(),
    categoryId: _joi["default"].string(),
    code: _joi["default"].string(),
    type: _joi["default"].string().valid("Premium", "Free"),
    level: _joi["default"].string(),
    price: _joi["default"].number(),
    content: _joi["default"].string()
  }).min(1);
  return schema.validate(payload);
};