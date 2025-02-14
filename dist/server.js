"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _cors = _interopRequireDefault(require("cors"));
var _categoryRoutes = _interopRequireDefault(require("./routes/categoryRoutes.js"));
var _classRoutes = _interopRequireDefault(require("./routes/classRoutes.js"));
var _userRoutes = _interopRequireDefault(require("./routes/userRoutes.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dotenv["default"].config();
var app = (0, _express["default"])();
var PORT = process.env.PORT || 5000;
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use("/api/category", _categoryRoutes["default"]);
app.use("/api/class", _classRoutes["default"]);
app.use("/api/user", _userRoutes["default"]);
app.listen(PORT, function () {
  console.log("Server running on port ".concat(PORT));
});