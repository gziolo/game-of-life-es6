import Coordinate from './coordinate';

export default
class World {
  constructor() {
    this.create();
  }

  create(x = 0, y = 0) {
    this.createCoordinates(x, y);
  }

  createCoordinates(x, y) {
    this.coordinates = [];
    for (let i = 1; i <= x; i++) {
      for (let j = 1; j <= y; j++) {
        this.addCoordinate(new Coordinate(i, j));
      }
    }
  }

  addCoordinate(coordinate) {
    this.coordinates.push(coordinate);
  }

  getCoordinateAt(x, y) {
    var expectedCoordinate = new Coordinate(x, y);

    for (let i = 0, length = this.coordinatesCount(); i < length; i++) {
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
