import AbstractCell from './abstractCell';

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

export default LiveCell;
