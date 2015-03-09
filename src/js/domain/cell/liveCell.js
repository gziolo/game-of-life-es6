export default
class LiveCell {
  staysAlive(numberOfNeighbors) {
    return numberOfNeighbors === 2 || numberOfNeighbors === 3;
  }
}
