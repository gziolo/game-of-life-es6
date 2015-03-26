import AbstractCell from './abstractCell';

export default
class DeadCell extends AbstractCell {
  changesState(numberOfLiveNeighbors) {
    return this.becomesAlive(numberOfLiveNeighbors);
  }

  isAlive() {
    return false;
  }

  becomesAlive(numberOfLiveNeighbors) {
    return numberOfLiveNeighbors === 3;
  }
}
