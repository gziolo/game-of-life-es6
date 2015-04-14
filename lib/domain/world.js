import Coordinate from './coordinate';

class World {
  constructor(columns = 0, rows = 0) {
    this.create(columns, rows);
  }

  create(columns = 0, rows = 0) {
    this.createCoordinates(columns, rows);
    this.addNeighborsToCoordinates();
  }

  createCoordinates(columns, rows) {
    this.coordinates = [];
    for (let i = 1; i <= columns; i++) {
      for (let j = 1; j <= rows; j++) {
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
    let callbacks = [];

    this.coordinates.forEach(coordinate => {
      if (coordinate.changesState()) {
        callbacks.push(function() {
          coordinate.nextState();
        });
      }
    });

    callbacks.forEach(callback => callback());
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

export default World;
