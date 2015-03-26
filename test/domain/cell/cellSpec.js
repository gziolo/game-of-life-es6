import Cell from 'lib/domain/cell/cell';
import AbstractCell from 'lib/domain/cell/abstractCell';
import LiveCell from 'lib/domain/cell/liveCell';
import DeadCell from 'lib/domain/cell/deadCell';

describe('cell', function() {
  it('should create live cell', () => {
    Cell.createLive().should.be.an.instanceof(LiveCell);
  });

  it('should create dead cell', () => {
    Cell.createDead().should.be.an.instanceof(DeadCell);
  });

  it('should create cell that has instance of AbstractCell', () => {
    Cell.createRandom().should.be.an.instanceof(AbstractCell);
  });
});
