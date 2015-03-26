import DeadCell from 'lib/domain/cell/deadCell';

describe('Dead cell', function() {
  beforeEach(() => {
    this.deadCell = new DeadCell();
  });

  it('should become alive when it has exactly 3 live neighbors', () => {
    this.deadCell.changesState(3).should.be.true;
    this.deadCell.changesState(3).should.be.true;
  });

  it('should stay dead when it has less or more than 3 live neighbors', () => {
    this.deadCell.changesState(2).should.be.false;
    this.deadCell.changesState(4).should.be.false;
  });
});
