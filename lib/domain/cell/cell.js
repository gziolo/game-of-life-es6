import LiveCell from './liveCell';
import DeadCell from './deadCell';

class Cell {
  static createLive() {
    return new LiveCell();
  }

  static createDead() {
    return new DeadCell();
  }

  static createRandom() {
    const THRESHOLD = 0.5;

    if (Math.random() >= THRESHOLD) {
      return Cell.createLive();
    }

    return Cell.createDead();
  }
}

export default Cell;
