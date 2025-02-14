"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCategoryValidation = exports.createCategoryValidation = void 0;
var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var createCategoryValidation = exports.createCategoryValidation = function createCategoryValidation(payload) {
  var schema = _joi["default"].object({
    name: _joi["default"].string().required()
  });
  return schema.validate(payload);
};
var updateCategoryValidation = exports.updateCategoryValidation = function updateCategoryValidation(payload) {
  var schema = _joi["default"].object({
    name: _joi["default"].string()
  }).min(1);
  return schema.validate(payload);
};