export default class World {
  constructor() {
    this.coordinates = [];
  }

  addCoordinate(coordinate) {
    this.coordinates.push(coordinate);
  }

  isEmpty() {
    return (this.coordinates.length === 0);
  }
}
