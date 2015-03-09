import Cell from 'domain/cell/cell';
import LiveCell from 'domain/cell/liveCell';
import DeadCell from 'domain/cell/deadCell';

describe('cell', function() {
  it('should create live cell', () => {
    Cell.createLive().should.be.an.instanceof(LiveCell);
  });

  it('should create dead cell', () => {
    Cell.createDead().should.be.an.instanceof(DeadCell);
  });

  it('should see dead cell as not alive', () => {
    Cell.isAlive(Cell.createDead()).should.be.false;
  });

  it('should see live cell as alive', () => {
    Cell.isAlive(Cell.createLive()).should.be.true;
  });
});
