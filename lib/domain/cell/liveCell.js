import AbstractCell from './abstractCell';

export default
class LiveCell extends AbstractCell {
  changesState(numberOfLiveNeighbors) {
    return !this.staysAlive(numberOfLiveNeighbors);
  }

  isAlive() {
    return true;
  }

  staysAlive(numberOfLiveNeighbors) {
    return numberOfLiveNeighbors === 2 || numberOfLiveNeighbors === 3;
  }
}
