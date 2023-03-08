"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = startServer;
var _socket = _interopRequireDefault(require("socket.io"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function startServer() {
  var io = new _socket["default"]().attach(8090);
  store.subscribe(function () {
    return io.emit('state', store.getState().toJS());
  });
  io.on('connection', function (socket) {
    socket.emit('state', store.getState().toJS());
  });
}