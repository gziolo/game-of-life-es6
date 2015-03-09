export default
class Coordinate {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.neighbors = [];
  }

  equals(otherCoordinate) {
    return otherCoordinate.equalsCoordinate(this.x, this.y);
  }

  equalsCoordinate(otherX, otherY) {
    return this.x === otherX && this.y === otherY;
  }

  addNeighbor(coordinate) {
    this.neighbors.push(coordinate);
  }

  neighborsCount() {
    return this.neighbors.length;
  }
}
