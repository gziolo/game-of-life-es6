import LiveCell from './liveCell';
import DeadCell from './deadCell';

export default class Cell {
  static createLive() {
    return new LiveCell();
  }
  static createDead() {
    return new DeadCell();
  }
  static createRandom() {
    /*eslint no-undef:0 */
    if (Math.random() >= 0.5) {
      return Cell.createLive();
    }

    return Cell.createDead();
  }
}
