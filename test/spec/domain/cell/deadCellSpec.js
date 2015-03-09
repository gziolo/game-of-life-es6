import DeadCell from 'domain/cell/deadCell';

describe('Dead cell', function() {
  beforeEach(() => {
    this.deadCell = new DeadCell();
  });

  it('should become alive when it has exactly 3 live neighbors', () => {
    this.deadCell.becomesAlive(3).should.be.true;
  });

  it('should stay dead when it has less or more than 3 live neighbors', () => {
    this.deadCell.becomesAlive(2).should.be.false;
    this.deadCell.becomesAlive(4).should.be.false;
  });
});
