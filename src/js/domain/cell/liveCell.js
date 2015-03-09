export default
class LiveCell {
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
