(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.GameOfLife = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _LiveCell = require('./liveCell');

var _LiveCell2 = _interopRequireWildcard(_LiveCell);

var _DeadCell = require('./deadCell');

var _DeadCell2 = _interopRequireWildcard(_DeadCell);

var Cell = (function () {
  function Cell() {
    _classCallCheck(this, Cell);
  }

  _createClass(Cell, null, [{
    key: 'createLive',
    value: function createLive() {
      return new _LiveCell2['default']();
    }
  }, {
    key: 'createDead',
    value: function createDead() {
      return new _DeadCell2['default']();
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

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _AbstractCell2 = require('./abstractCell');

var _AbstractCell3 = _interopRequireWildcard(_AbstractCell2);

var DeadCell = (function (_AbstractCell) {
  function DeadCell() {
    _classCallCheck(this, DeadCell);

    if (_AbstractCell != null) {
      _AbstractCell.apply(this, arguments);
    }
  }

  _inherits(DeadCell, _AbstractCell);

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
})(_AbstractCell3['default']);

exports['default'] = DeadCell;
module.exports = exports['default'];

},{"./abstractCell":1}],4:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _AbstractCell2 = require('./abstractCell');

var _AbstractCell3 = _interopRequireWildcard(_AbstractCell2);

var LiveCell = (function (_AbstractCell) {
  function LiveCell() {
    _classCallCheck(this, LiveCell);

    if (_AbstractCell != null) {
      _AbstractCell.apply(this, arguments);
    }
  }

  _inherits(LiveCell, _AbstractCell);

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
})(_AbstractCell3['default']);

exports['default'] = LiveCell;
module.exports = exports['default'];

},{"./abstractCell":1}],5:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Cell = require('./cell/cell');

var _Cell2 = _interopRequireWildcard(_Cell);

var Coordinate = (function () {
  function Coordinate(x, y) {
    var cell = arguments[2] === undefined ? null : arguments[2];

    _classCallCheck(this, Coordinate);

    if (x < 1 || y < 1) {
      throw new Error('Invalid coordinates provided: x=' + x + ' y=' + y + '.');
    }
    this.x = x;
    this.y = y;
    if (cell === null) {
      cell = _Cell2['default'].createRandom();
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
        this.cell = _Cell2['default'].createDead();
      } else {
        this.cell = _Cell2['default'].createLive();
      }
    }
  }]);

  return Coordinate;
})();

exports['default'] = Coordinate;
module.exports = exports['default'];

},{"./cell/cell":2}],6:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Coordinate = require('./coordinate');

var _Coordinate2 = _interopRequireWildcard(_Coordinate);

var World = (function () {
  function World() {
    var columns = arguments[0] === undefined ? 0 : arguments[0];
    var rows = arguments[1] === undefined ? 0 : arguments[1];

    _classCallCheck(this, World);

    this.create(columns, rows);
  }

  _createClass(World, [{
    key: 'create',
    value: function create() {
      var columns = arguments[0] === undefined ? 0 : arguments[0];
      var rows = arguments[1] === undefined ? 0 : arguments[1];

      this.createCoordinates(columns, rows);
      this.addNeighborsToCoordinates();
    }
  }, {
    key: 'createCoordinates',
    value: function createCoordinates(columns, rows) {
      this.coordinates = [];
      for (var i = 1; i <= columns; i++) {
        for (var j = 1; j <= rows; j++) {
          this.coordinates.push(new _Coordinate2['default'](i, j));
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
      for (var i = 0, _length = this.coordinatesCount(), expectedCoordinate = new _Coordinate2['default'](x, y); i < _length; i++) {
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

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _World = require('./domain/world');

var _World2 = _interopRequireWildcard(_World);

exports.World = _World2['default'];

},{"./domain/world":6}]},{},[1,2,3,4,5,6,7])(7)
});