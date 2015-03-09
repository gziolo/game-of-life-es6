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
    this.length = 0;
    for (let i = 1; i <= x; i++) {
      for (let j = 1; j <= y; j++) {
        this.addCoordinate(new Coordinate(i, j));
      }
    }
  }

  addCoordinate(coordinate) {
    this.coordinates[coordinate.getX()] = this.coordinates[coordinate.getX()] || [];
    this.coordinates[coordinate.getX()][coordinate.getY()] = coordinate;
    this.length += 1;
  }

  getCoordinateAt(x, y) {
    return this.coordinates[x] && this.coordinates[x][y];
  }

  coordinatesCount() {
    return this.length;
  }
}
