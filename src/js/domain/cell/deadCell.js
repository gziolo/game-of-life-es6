export default
class DeadCell {
  becomesAlive(numberOfLiveNeighbors) {
    return numberOfLiveNeighbors === 3;
  }
}
