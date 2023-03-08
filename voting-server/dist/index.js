"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;
var _store = _interopRequireDefault(require("./src/store"));
var _server = _interopRequireDefault(require("./src/server"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var store = (0, _store["default"])();
exports.store = store;
(0, _server["default"])(store);