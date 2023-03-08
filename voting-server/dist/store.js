"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = makeStore;
var _redux = require("redux");
var _reducer = _interopRequireDefault(require("./reducer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//using legacy_createStore because I couldn't get configureStore to work :(

function makeStore() {
  return (0, _redux.legacy_createStore)(_reducer["default"]);
}