export default
class Coordinate {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.neighbors = [];
  }

  addNeighbor(coordinate) {
    this.neighbors.push(coordinate);
  }

  neighborsCount() {
    return this.neighbors.length;
  }
}
