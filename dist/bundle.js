(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.GameOfLife || (g.GameOfLife = {})).World = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var AbstractCell = (function () {
  function AbstractCell() {
    _classCallCheck(this, AbstractCell);
  }

  _createClass(AbstractCell, {
    changesState: {
      /*eslint no-unused-vars:0 */

      value: function changesState(numberOfLiveNeighbors) {}
    },
    isAlive: {
      value: function isAlive() {}
    }
  });

  return AbstractCell;
})();

module.exports = AbstractCell;

},{}],2:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var LiveCell = _interopRequire(require("./liveCell"));

var DeadCell = _interopRequire(require("./deadCell"));

var Cell = (function () {
  function Cell() {
    _classCallCheck(this, Cell);
  }

  _createClass(Cell, null, {
    createLive: {
      value: function createLive() {
        return new LiveCell();
      }
    },
    createDead: {
      value: function createDead() {
        return new DeadCell();
      }
    },
    createRandom: {
      value: function createRandom() {
        /*eslint no-undef:0 */
        if (Math.random() >= 0.5) {
          return Cell.createLive();
        }

        return Cell.createDead();
      }
    }
  });

  return Cell;
})();

module.exports = Cell;

},{"./deadCell":3,"./liveCell":4}],3:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var AbstractCell = _interopRequire(require("./abstractCell"));

var DeadCell = (function (_AbstractCell) {
  function DeadCell() {
    _classCallCheck(this, DeadCell);

    if (_AbstractCell != null) {
      _AbstractCell.apply(this, arguments);
    }
  }

  _inherits(DeadCell, _AbstractCell);

  _createClass(DeadCell, {
    changesState: {
      value: function changesState(numberOfLiveNeighbors) {
        return this.becomesAlive(numberOfLiveNeighbors);
      }
    },
    isAlive: {
      value: function isAlive() {
        return false;
      }
    },
    becomesAlive: {
      value: function becomesAlive(numberOfLiveNeighbors) {
        return numberOfLiveNeighbors === 3;
      }
    }
  });

  return DeadCell;
})(AbstractCell);

module.exports = DeadCell;

},{"./abstractCell":1}],4:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var AbstractCell = _interopRequire(require("./abstractCell"));

var LiveCell = (function (_AbstractCell) {
  function LiveCell() {
    _classCallCheck(this, LiveCell);

    if (_AbstractCell != null) {
      _AbstractCell.apply(this, arguments);
    }
  }

  _inherits(LiveCell, _AbstractCell);

  _createClass(LiveCell, {
    changesState: {
      value: function changesState(numberOfLiveNeighbors) {
        return !this.staysAlive(numberOfLiveNeighbors);
      }
    },
    isAlive: {
      value: function isAlive() {
        return true;
      }
    },
    staysAlive: {
      value: function staysAlive(numberOfLiveNeighbors) {
        return numberOfLiveNeighbors === 2 || numberOfLiveNeighbors === 3;
      }
    }
  });

  return LiveCell;
})(AbstractCell);

module.exports = LiveCell;

},{"./abstractCell":1}],5:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Cell = _interopRequire(require("./cell/cell"));

var Coordinate = (function () {
  function Coordinate(x, y) {
    var cell = arguments[2] === undefined ? null : arguments[2];

    _classCallCheck(this, Coordinate);

    if (x < 1 || y < 1) {
      throw new Error("Invalid coordinates provided: x=" + x + " y=" + y + ".");
    }
    this.x = x;
    this.y = y;
    if (cell === null) {
      cell = Cell.createRandom();
    }
    this.cell = cell;
    this.neighbors = [];
  }

  _createClass(Coordinate, {
    equals: {
      value: function equals(otherCoordinate) {
        return otherCoordinate.equalsCoordinate(this.x, this.y);
      }
    },
    equalsCoordinate: {
      value: function equalsCoordinate(otherX, otherY) {
        return this.x === otherX && this.y === otherY;
      }
    },
    isNeighbor: {
      value: function isNeighbor(otherCoordinate) {
        return otherCoordinate.isNeighborCoordinate(this.x, this.y);
      }
    },
    isNeighborCoordinate: {
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
    },
    addNeighbor: {
      value: function addNeighbor(coordinate) {
        this.neighbors.push(coordinate);
      }
    },
    getNeighborsCount: {
      value: function getNeighborsCount() {
        return this.neighbors.length;
      }
    },
    hasLiveCell: {
      value: function hasLiveCell() {
        return this.cell.isAlive();
      }
    },
    changesState: {
      value: function changesState() {
        var numberOfLiveNeighbors = 0;

        this.neighbors.forEach(function (coordinate) {
          if (coordinate.hasLiveCell()) {
            numberOfLiveNeighbors += 1;
          }
        });

        return this.cell.changesState(numberOfLiveNeighbors);
      }
    },
    nextState: {
      value: function nextState() {
        if (this.hasLiveCell()) {
          this.cell = Cell.createDead();
        } else {
          this.cell = Cell.createLive();
        }
      }
    }
  });

  return Coordinate;
})();

module.exports = Coordinate;

},{"./cell/cell":2}],6:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Coordinate = _interopRequire(require("./coordinate"));

var World = (function () {
  function World() {
    var x = arguments[0] === undefined ? 0 : arguments[0];
    var y = arguments[1] === undefined ? 0 : arguments[1];

    _classCallCheck(this, World);

    this.create(x, y);
  }

  _createClass(World, {
    create: {
      value: function create() {
        var x = arguments[0] === undefined ? 0 : arguments[0];
        var y = arguments[1] === undefined ? 0 : arguments[1];

        this.createCoordinates(x, y);
        this.addNeighborsToCoordinates();
      }
    },
    createCoordinates: {
      value: function createCoordinates(x, y) {
        this.coordinates = [];
        for (var i = 1; i <= x; i++) {
          for (var j = 1; j <= y; j++) {
            this.coordinates.push(new Coordinate(i, j));
          }
        }
      }
    },
    addNeighborsToCoordinates: {
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
    },
    tick: {
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
          callback();
        });
      }
    },
    getCoordinateAt: {
      value: function getCoordinateAt(x, y) {
        for (var i = 0, _length = this.coordinatesCount(), expectedCoordinate = new Coordinate(x, y); i < _length; i++) {
          if (this.coordinates[i].equals(expectedCoordinate)) {
            return this.coordinates[i];
          }
        }

        return null;
      }
    },
    coordinatesCount: {
      value: function coordinatesCount() {
        return this.coordinates.length;
      }
    }
  });

  return World;
})();

module.exports = World;

},{"./coordinate":5}]},{},[1,2,3,4,5,6])(6)
});