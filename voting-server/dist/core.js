"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_STATE = void 0;
exports.next = next;
exports.setEntries = setEntries;
exports.vote = vote;
var _immutable = require("immutable");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var INITIAL_STATE = (0, _immutable.Map)();
exports.INITIAL_STATE = INITIAL_STATE;
function setEntries(state, entries) {
  return state.set('entries', (0, _immutable.List)(entries));
}
function getWinners(vote) {
  if (!vote) return [];
  var _vote$get = vote.get('pair'),
    _vote$get2 = _slicedToArray(_vote$get, 2),
    a = _vote$get2[0],
    b = _vote$get2[1];
  var aVotes = vote.getIn(['tally', a], 0);
  var bVotes = vote.getIn(['tally', b], 0);
  if (aVotes > bVotes) return [a];else if (aVotes < bVotes) return [b];else return [a, b];
}
function next(state) {
  var entries = state.get('entries').concat(getWinners(state.get('vote')));
  if (entries.size === 1) {
    //instead of returning Map({winner: entries.first()}), we take an older state  
    //and explicitly remove vote and entries to avoid deleting unrelated data from the state        
    return state.remove('vote').remove('entries').set('winner', entries.first());
  } else {
    return state.merge({
      vote: (0, _immutable.Map)({
        pair: entries.take(2)
      }),
      entries: entries.skip(2)
    });
  }
}
function vote(voteState, entry) {
  return voteState.updateIn(['tally', entry], 0, function (tally) {
    return tally + 1;
  });
}