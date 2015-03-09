export default
class Coordinate {
  constructor(x, y) {
    if (x < 1 || y < 1) {
      throw new Error(`Invalid coordinates provided: x=${x} y=${y}.`);
    }
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

  isNeighbor(otherCoordinate) {
    return otherCoordinate.isNeighborCoordinate(this.x, this.y);
  }

  isNeighborCoordinate(otherX, otherY) {
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

  addNeighbor(coordinate) {
    this.neighbors.push(coordinate);
  }

  getNeighborsCount() {
    return this.neighbors.length;
  }
}
