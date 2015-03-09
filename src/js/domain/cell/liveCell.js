import AbstractCell from './abstractCell';

export default
class LiveCell extends AbstractCell {
  changesState() {
    return !this.staysAlive();
  }

  isAlive() {
    return true;
  }

  staysAlive(numberOfLiveNeighbors) {
    return numberOfLiveNeighbors === 2 || numberOfLiveNeighbors === 3;
  }
}
