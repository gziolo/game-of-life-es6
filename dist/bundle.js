(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.GameOfLife = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractCell = (function () {
  function AbstractCell() {
    _classCallCheck(this, AbstractCell);
  }

  _createClass(AbstractCell, [{
    key: "changesState",

    /*eslint no-unused-vars:0 */
    value: function changesState(numberOfLiveNeighbors) {}
  }, {
    key: "isAlive",
    value: function isAlive() {}
  }]);

  return AbstractCell;
})();

exports["default"] = AbstractCell;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _liveCell = require('./liveCell');

var _liveCell2 = _interopRequireDefault(_liveCell);

var _deadCell = require('./deadCell');

var _deadCell2 = _interopRequireDefault(_deadCell);

var Cell = (function () {
  function Cell() {
    _classCallCheck(this, Cell);
  }

  _createClass(Cell, null, [{
    key: 'createLive',
    value: function createLive() {
      return new _liveCell2['default']();
    }
  }, {
    key: 'createDead',
    value: function createDead() {
      return new _deadCell2['default']();
    }
  }, {
    key: 'createRandom',
    value: function createRandom() {
      var THRESHOLD = 0.5;

      if (Math.random() >= THRESHOLD) {
        return Cell.createLive();
      }

      return Cell.createDead();
    }
  }]);

  return Cell;
})();

exports['default'] = Cell;
module.exports = exports['default'];

},{"./deadCell":3,"./liveCell":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _abstractCell = require('./abstractCell');

var _abstractCell2 = _interopRequireDefault(_abstractCell);

var DeadCell = (function (_AbstractCell) {
  _inherits(DeadCell, _AbstractCell);

  function DeadCell() {
    _classCallCheck(this, DeadCell);

    _get(Object.getPrototypeOf(DeadCell.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(DeadCell, [{
    key: 'changesState',
    value: function changesState(numberOfLiveNeighbors) {
      return this.becomesAlive(numberOfLiveNeighbors);
    }
  }, {
    key: 'isAlive',
    value: function isAlive() {
      return false;
    }
  }, {
    key: 'becomesAlive',
    value: function becomesAlive(numberOfLiveNeighbors) {
      return numberOfLiveNeighbors === 3;
    }
  }]);

  return DeadCell;
})(_abstractCell2['default']);

exports['default'] = DeadCell;
module.exports = exports['default'];

},{"./abstractCell":1}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _abstractCell = require('./abstractCell');

var _abstractCell2 = _interopRequireDefault(_abstractCell);

var LiveCell = (function (_AbstractCell) {
  _inherits(LiveCell, _AbstractCell);

  function LiveCell() {
    _classCallCheck(this, LiveCell);

    _get(Object.getPrototypeOf(LiveCell.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(LiveCell, [{
    key: 'changesState',
    value: function changesState(numberOfLiveNeighbors) {
      return !this.staysAlive(numberOfLiveNeighbors);
    }
  }, {
    key: 'isAlive',
    value: function isAlive() {
      return true;
    }
  }, {
    key: 'staysAlive',
    value: function staysAlive(numberOfLiveNeighbors) {
      return numberOfLiveNeighbors === 2 || numberOfLiveNeighbors === 3;
    }
  }]);

  return LiveCell;
})(_abstractCell2['default']);

exports['default'] = LiveCell;
module.exports = exports['default'];

},{"./abstractCell":1}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _cellCell = require('./cell/cell');

var _cellCell2 = _interopRequireDefault(_cellCell);

var Coordinate = (function () {
  function Coordinate(x, y) {
    var cell = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

    _classCallCheck(this, Coordinate);

    if (x < 1 || y < 1) {
      throw new Error('Invalid coordinates provided: x=' + x + ' y=' + y + '.');
    }
    this.x = x;
    this.y = y;
    if (cell === null) {
      cell = _cellCell2['default'].createRandom();
    }
    this.cell = cell;
    this.neighbors = [];
  }

  _createClass(Coordinate, [{
    key: 'equals',
    value: function equals(otherCoordinate) {
      return otherCoordinate.equalsCoordinate(this.x, this.y);
    }
  }, {
    key: 'equalsCoordinate',
    value: function equalsCoordinate(otherX, otherY) {
      return this.x === otherX && this.y === otherY;
    }
  }, {
    key: 'isNeighbor',
    value: function isNeighbor(otherCoordinate) {
      return otherCoordinate.isNeighborCoordinate(this.x, this.y);
    }
  }, {
    key: 'isNeighborCoordinate',
    value: function isNeighborCoordinate(otherX, otherY) {
      if (this.equalsCoordinate(otherX, otherY)) {
        return false;
      }

      if (Math.abs(otherX - this.x) > 1) {
        return false;
      }

      if (Math.abs(otherY - this.y) > 1) {
        return false;
      }

      return true;
    }
  }, {
    key: 'addNeighbor',
    value: function addNeighbor(coordinate) {
      this.neighbors.push(coordinate);
    }
  }, {
    key: 'getNeighborsCount',
    value: function getNeighborsCount() {
      return this.neighbors.length;
    }
  }, {
    key: 'hasLiveCell',
    value: function hasLiveCell() {
      return this.cell.isAlive();
    }
  }, {
    key: 'changesState',
    value: function changesState() {
      var numberOfLiveNeighbors = 0;

      this.neighbors.forEach(function (coordinate) {
        if (coordinate.hasLiveCell()) {
          numberOfLiveNeighbors += 1;
        }
      });

      return this.cell.changesState(numberOfLiveNeighbors);
    }
  }, {
    key: 'nextState',
    value: function nextState() {
      if (this.hasLiveCell()) {
        this.cell = _cellCell2['default'].createDead();
      } else {
        this.cell = _cellCell2['default'].createLive();
      }
    }
  }]);

  return Coordinate;
})();

exports['default'] = Coordinate;
module.exports = exports['default'];

},{"./cell/cell":2}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _coordinate = require('./coordinate');

var _coordinate2 = _interopRequireDefault(_coordinate);

var World = (function () {
  function World() {
    var columns = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
    var rows = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

    _classCallCheck(this, World);

    this.create(columns, rows);
  }

  _createClass(World, [{
    key: 'create',
    value: function create() {
      var columns = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
      var rows = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

      this.createCoordinates(columns, rows);
      this.addNeighborsToCoordinates();
    }
  }, {
    key: 'createCoordinates',
    value: function createCoordinates(columns, rows) {
      this.coordinates = [];
      for (var i = 1; i <= columns; i++) {
        for (var j = 1; j <= rows; j++) {
          this.coordinates.push(new _coordinate2['default'](i, j));
        }
      }
    }
  }, {
    key: 'addNeighborsToCoordinates',
    value: function addNeighborsToCoordinates() {
      var _this = this;

      this.coordinates.forEach(function (coordinate) {
        _this.coordinates.forEach(function (otherCoordinate) {
          if (coordinate.isNeighbor(otherCoordinate)) {
            coordinate.addNeighbor(otherCoordinate);
          }
        });
      });
    }
  }, {
    key: 'tick',
    value: function tick() {
      var callbacks = [];

      this.coordinates.forEach(function (coordinate) {
        if (coordinate.changesState()) {
          callbacks.push(function () {
            coordinate.nextState();
          });
        }
      });

      callbacks.forEach(function (callback) {
        return callback();
      });
    }
  }, {
    key: 'getCoordinateAt',
    value: function getCoordinateAt(x, y) {
      for (var i = 0, _length = this.coordinatesCount(), expectedCoordinate = new _coordinate2['default'](x, y); i < _length; i++) {
        if (this.coordinates[i].equals(expectedCoordinate)) {
          return this.coordinates[i];
        }
      }

      return null;
    }
  }, {
    key: 'coordinatesCount',
    value: function coordinatesCount() {
      return this.coordinates.length;
    }
  }]);

  return World;
})();

exports['default'] = World;
module.exports = exports['default'];

},{"./coordinate":5}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _domainWorld = require('./domain/world');

var _domainWorld2 = _interopRequireDefault(_domainWorld);

exports.World = _domainWorld2['default'];

},{"./domain/world":6}]},{},[1,2,3,4,5,6,7])(7)
});