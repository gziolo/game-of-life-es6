import AbstractCell from './abstractCell';


export default
class DeadCell extends AbstractCell {
  changesState() {
    return this.becomesAlive();
  }

  isAlive() {
    return false;
  }

  becomesAlive(numberOfLiveNeighbors) {
    return numberOfLiveNeighbors === 3;
  }
}
