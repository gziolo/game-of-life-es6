import Coordinate from './coordinate';

export default
class World {
  constructor() {
    this.create();
  }

  create(x = 0, y = 0) {
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

  coordinatesCount() {
    return this.coordinates.length;
  }
}
