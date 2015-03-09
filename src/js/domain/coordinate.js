export default
class Coordinate {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.neighbors = [];
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  addNeighbor(coordinate) {
    this.neighbors.push(coordinate);
  }

  neighborsCount() {
    return this.neighbors.length;
  }
}
