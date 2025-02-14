"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _client = require("@prisma/client");
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cors = _interopRequireDefault(require("cors"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _classValidation = require("./validation/classValidation.js");
var _categoryValidation = require("./validation/categoryValidation.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var prisma = new _client.PrismaClient();
var app = (0, _express["default"])();
_dotenv["default"].config();
var PORT = process.env.PORT;
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.use((0, _cors["default"])());
//ReadMany
app.get("/api/class", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var classes;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return prisma["class"].findMany({
            where: {
              status: true
            },
            include: {
              category: true
            }
          });
        case 3:
          classes = _context.sent;
          res.status(200).json({
            message: "Success get classes data",
            datas: classes
          });
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: "Error fetching classes",
            error: _context.t0
          });
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

//ReadbyId
app.get("/api/class/:id", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var id, classData;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.next = 3;
          return prisma["class"].findFirst({
            where: {
              id: id,
              status: true
            }
          });
        case 3:
          classData = _context2.sent;
          res.status(200).json({
            message: "Success get class data by id",
            data: classData
          });
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

//Create
app.post("/api/class", /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _createClassValidatio, error, value, newClass;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _createClassValidatio = (0, _classValidation.createClassValidation)(req.body), error = _createClassValidatio.error, value = _createClassValidatio.value;
          if (!error) {
            _context3.next = 3;
            break;
          }
          return _context3.abrupt("return", res.status(422).json({
            message: error.details[0].message
          }));
        case 3:
          _context3.prev = 3;
          _context3.next = 6;
          return prisma["class"].create({
            data: value
          });
        case 6:
          newClass = _context3.sent;
          res.status(201).json({
            message: "Kelas berhasil ditambahkan!",
            data: newClass
          });
          _context3.next = 14;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](3);
          console.error("Error adding class:", _context3.t0);
          res.status(500).json({
            message: "Gagal menambahkan kelas.",
            error: _context3.t0
          });
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[3, 10]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

//Update
app.patch("/api/class/:id", /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var id, _updateClassValidatio, error, value, updatedClass;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _updateClassValidatio = (0, _classValidation.updateClassValidation)(req.body), error = _updateClassValidatio.error, value = _updateClassValidatio.value;
          if (!error) {
            _context4.next = 4;
            break;
          }
          return _context4.abrupt("return", res.status(422).json({
            message: error.details[0].message
          }));
        case 4:
          _context4.prev = 4;
          _context4.next = 7;
          return prisma["class"].update({
            where: {
              id: id
            },
            data: value
          });
        case 7:
          updatedClass = _context4.sent;
          res.status(200).json({
            message: "Kelas berhasil diperbarui!",
            data: updatedClass
          });
          _context4.next = 15;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](4);
          console.error("Error updating class:", _context4.t0);
          res.status(500).json({
            message: "Gagal memperbarui kelas.",
            error: _context4.t0
          });
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[4, 11]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

//Delete
app["delete"]("/api/class/:id", /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var id, classData;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.next = 3;
          return prisma["class"].update({
            where: {
              id: id,
              status: true
            },
            data: {
              status: false
            }
          });
        case 3:
          classData = _context5.sent;
          res.status(200).json({
            message: "Success delete class data",
            data: classData
          });
        case 5:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

//ReadManyCategory
app.get("/api/category", /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var categories;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return prisma.category.findMany({
            where: {
              status: true
            }
          });
        case 2:
          categories = _context6.sent;
          res.status(200).json({
            message: "Success get categories data",
            datas: categories
          });
        case 4:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());

//CreateCategory
app.post("/api/category", /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _createCategoryValida, error, value, categoryData;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _createCategoryValida = (0, _categoryValidation.createCategoryValidation)(req.body), error = _createCategoryValida.error, value = _createCategoryValida.value;
          _context7.prev = 1;
          if (!error) {
            _context7.next = 4;
            break;
          }
          return _context7.abrupt("return", res.status(422).json({
            message: error.details[0].message
          }));
        case 4:
          _context7.next = 6;
          return prisma.category.create({
            data: value
          });
        case 6:
          categoryData = _context7.sent;
          res.status(201).json({
            message: "Success create category data",
            data: categoryData
          });
          _context7.next = 14;
          break;
        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](1);
          console.error("Error creating category:", _context7.t0);
          res.status(500).json({
            message: "Gagal membuat kategori.",
            error: _context7.t0
          });
        case 14:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 10]]);
  }));
  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());
app.listen(PORT, function () {
  console.log("Example app listening on port ".concat(PORT));
});

//ReadbyIdCategory
app.get("/api/category/:id", /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var id, categoryData;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          id = req.params.id;
          _context8.next = 3;
          return prisma.category.findFirst({
            where: {
              id: id,
              status: true
            }
          });
        case 3:
          categoryData = _context8.sent;
          res.status(200).json({
            message: "Success get category data by id",
            data: categoryData
          });
        case 5:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}());

//UpdateCategory
app.patch("/api/category/:id", /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var id, _updateCategoryValida, error, value, categoryData;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          id = req.params.id;
          _updateCategoryValida = (0, _categoryValidation.updateCategoryValidation)(req.body), error = _updateCategoryValida.error, value = _updateCategoryValida.value;
          _context9.prev = 2;
          if (!error) {
            _context9.next = 5;
            break;
          }
          return _context9.abrupt("return", res.status(422).json({
            message: error.details[0].message
          }));
        case 5:
          _context9.next = 7;
          return prisma.category.create({
            where: id,
            data: value
          });
        case 7:
          categoryData = _context9.sent;
          res.status(201).json({
            message: "Success create category data",
            data: categoryData
          });
          _context9.next = 15;
          break;
        case 11:
          _context9.prev = 11;
          _context9.t0 = _context9["catch"](2);
          console.error("Error creating category:", _context9.t0);
          res.status(500).json({
            message: "Gagal membuat kategori.",
            error: _context9.t0
          });
        case 15:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[2, 11]]);
  }));
  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}());

//Delete
app["delete"]("/api/category/:id", /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var id, categoryData;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          id = req.params.id;
          _context10.next = 3;
          return prisma.category.update({
            where: {
              id: id,
              status: true
            },
            data: {
              status: false
            }
          });
        case 3:
          categoryData = _context10.sent;
          res.status(200).json({
            message: "Success delete category data",
            data: categoryData
          });
        case 5:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}());

//REGISTER
app.post("/api/user/register", /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var _req$body, name, email, phone, password, existingUser, hashedPassword, userData;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _req$body = req.body, name = _req$body.name, email = _req$body.email, phone = _req$body.phone, password = _req$body.password; // Validasi input
          if (!(!name || !email || !phone || !password)) {
            _context11.next = 4;
            break;
          }
          return _context11.abrupt("return", res.status(400).json({
            message: "All fields are required"
          }));
        case 4:
          _context11.next = 6;
          return prisma.user.findFirst({
            where: {
              OR: [{
                email: email
              }, {
                phone: phone
              }]
            }
          });
        case 6:
          existingUser = _context11.sent;
          if (!existingUser) {
            _context11.next = 9;
            break;
          }
          return _context11.abrupt("return", res.status(400).json({
            message: "Email or Phone already exists"
          }));
        case 9:
          _context11.next = 11;
          return _bcryptjs["default"].hash(password, 10);
        case 11:
          hashedPassword = _context11.sent;
          _context11.next = 14;
          return prisma.user.create({
            data: {
              name: name,
              email: email,
              phone: phone,
              password: hashedPassword
            }
          });
        case 14:
          userData = _context11.sent;
          res.status(201).json({
            message: "User created successfully",
            data: userData
          });
          _context11.next = 21;
          break;
        case 18:
          _context11.prev = 18;
          _context11.t0 = _context11["catch"](0);
          res.status(500).json({
            message: "Internal Server Error",
            error: _context11.t0.message
          });
        case 21:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 18]]);
  }));
  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}());

//Login
app.post("/api/user/login", /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var _req$body2, email, password, user, isPasswordValid, token;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password; // Validasi input
          if (!(!email || !password)) {
            _context12.next = 4;
            break;
          }
          return _context12.abrupt("return", res.status(400).json({
            message: "Email and password are required"
          }));
        case 4:
          _context12.next = 6;
          return prisma.user.findUnique({
            where: {
              email: email
            }
          });
        case 6:
          user = _context12.sent;
          if (user) {
            _context12.next = 9;
            break;
          }
          return _context12.abrupt("return", res.status(404).json({
            message: "Pengguna Tidak Ditemukan"
          }));
        case 9:
          _context12.next = 11;
          return _bcryptjs["default"].compare(password, user.password);
        case 11:
          isPasswordValid = _context12.sent;
          if (isPasswordValid) {
            _context12.next = 14;
            break;
          }
          return _context12.abrupt("return", res.status(401).json({
            message: "Invalid password"
          }));
        case 14:
          // Buat JWT Token
          token = _jsonwebtoken["default"].sign({
            id: user.id,
            email: user.email
          }, "SECRET_KEY", {
            expiresIn: "1h"
          });
          res.status(200).json({
            message: "Login successful",
            token: token
          });
          _context12.next = 21;
          break;
        case 18:
          _context12.prev = 18;
          _context12.t0 = _context12["catch"](0);
          res.status(500).json({
            message: "Internal Server Error",
            error: _context12.t0.message
          });
        case 21:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 18]]);
  }));
  return function (_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}());

//GET ALL USERS
app.get("/api/user", /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var users;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return prisma.user.findMany();
        case 3:
          users = _context13.sent;
          res.status(200).json({
            message: "Success get users data",
            datas: users
          });
          _context13.next = 10;
          break;
        case 7:
          _context13.prev = 7;
          _context13.t0 = _context13["catch"](0);
          res.status(500).json({
            message: "Internal Server Error",
            error: _context13.t0.message
          });
        case 10:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 7]]);
  }));
  return function (_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}());

//GET USER BY ID
app.get("/api/user/:id", /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var id, userData;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          id = req.params.id;
          _context14.next = 4;
          return prisma.user.findUnique({
            where: {
              id: id
            }
          });
        case 4:
          userData = _context14.sent;
          if (userData) {
            _context14.next = 7;
            break;
          }
          return _context14.abrupt("return", res.status(404).json({
            message: "User not found"
          }));
        case 7:
          res.status(200).json({
            message: "Success get user data",
            data: userData
          });
          _context14.next = 13;
          break;
        case 10:
          _context14.prev = 10;
          _context14.t0 = _context14["catch"](0);
          res.status(500).json({
            message: "Internal Server Error",
            error: _context14.t0.message
          });
        case 13:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 10]]);
  }));
  return function (_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}());

//UPDATE USER
app.patch("/api/user/:id", /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var id, data, existingUser, updatedUser;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          id = req.params.id;
          data = req.body; // Cek apakah user ada
          _context15.next = 5;
          return prisma.user.findUnique({
            where: {
              id: id
            }
          });
        case 5:
          existingUser = _context15.sent;
          if (existingUser) {
            _context15.next = 8;
            break;
          }
          return _context15.abrupt("return", res.status(404).json({
            message: "User not found"
          }));
        case 8:
          _context15.next = 10;
          return prisma.user.update({
            where: {
              id: id
            },
            data: data
          });
        case 10:
          updatedUser = _context15.sent;
          res.status(200).json({
            message: "Success update user data",
            data: updatedUser
          });
          _context15.next = 17;
          break;
        case 14:
          _context15.prev = 14;
          _context15.t0 = _context15["catch"](0);
          res.status(500).json({
            message: "Internal Server Error",
            error: _context15.t0.message
          });
        case 17:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 14]]);
  }));
  return function (_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}());

//DELETE USER
app["delete"]("/api/user/:id", /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var id, existingUser;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          id = req.params.id; // Cek apakah user ada
          _context16.next = 4;
          return prisma.user.findUnique({
            where: {
              id: id
            }
          });
        case 4:
          existingUser = _context16.sent;
          if (existingUser) {
            _context16.next = 7;
            break;
          }
          return _context16.abrupt("return", res.status(404).json({
            message: "User not found"
          }));
        case 7:
          _context16.next = 9;
          return prisma.user["delete"]({
            where: {
              id: id
            }
          });
        case 9:
          res.status(200).json({
            message: "User deleted successfully"
          });
          _context16.next = 15;
          break;
        case 12:
          _context16.prev = 12;
          _context16.t0 = _context16["catch"](0);
          res.status(500).json({
            message: "Internal Server Error",
            error: _context16.t0.message
          });
        case 15:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[0, 12]]);
  }));
  return function (_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}());

//Crea