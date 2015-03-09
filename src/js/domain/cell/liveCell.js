export default
class LiveCell {
  staysAlive(numberOfLiveNeighbors) {
    return numberOfLiveNeighbors === 2 || numberOfLiveNeighbors === 3;
  }
}
