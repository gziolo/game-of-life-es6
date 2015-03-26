import Coordinate from './coordinate';

export default
class World {
  constructor(x = 0, y = 0) {
    this.create(x, y);
  }

  create(x = 0, y = 0) {
    this.createCoordinates(x, y);
    this.addNeighborsToCoordinates();
  }

  createCoordinates(x, y) {
    this.coordinates = [];
    for (let i = 1; i <= x; i++) {
      for (let j = 1; j <= y; j++) {
        this.coordinates.push(new Coordinate(i, j));
      }
    }
  }

  addNeighborsToCoordinates() {
    this.coordinates.forEach(coordinate => {
      this.coordinates.forEach(otherCoordinate => {
        if (coordinate.isNeighbor(otherCoordinate)) {
          coordinate.addNeighbor(otherCoordinate);
        }
      });
    });
  }

  tick() {
    var callbacks = [];

    this.coordinates.forEach(coordinate => {
      if (coordinate.changesState()) {
        callbacks.push(function() {
          coordinate.nextState();
        });
      }
    });

    callbacks.forEach(callback => {
      callback();
    });
  }

  getCoordinateAt(x, y) {
    for (let i = 0, length = this.coordinatesCount(), expectedCoordinate = new Coordinate(x, y); i < length; i++) {
      if (this.coordinates[i].equals(expectedCoordinate)) {
        return this.coordinates[i];
      }
    }

    return null;
  }

  coordinatesCount() {
    return this.coordinates.length;
  }
}
