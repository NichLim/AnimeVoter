"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = reducer;
var _core = require("./core");
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _core.INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  //figures out what function to call and calls it, returns current state if undefined and has an empty map as default.
  switch (action.type) {
    case 'SET_ENTRIES':
      return (0, _core.setEntries)(state, action.entries);
    case 'NEXT':
      return (0, _core.next)(state);
    case 'VOTE':
      return state.update('vote', function (voteState) {
        return (0, _core.vote)(voteState, action.entry);
      });
  }
  return state;
  //this allows us to batch operations using a collection and getting the current state at the end
}