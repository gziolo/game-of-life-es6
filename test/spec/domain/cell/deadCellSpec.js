import DeadCell from 'domain/cell/deadCell';

describe('Dead cell', function() {
  beforeEach(() => {
    this.deadCell = new DeadCell();
  });

  it('should become alive when it has exactly 3 live neighbors', () => {
    this.deadCell.becomesAlive(3).should.be.true;
  });
});
