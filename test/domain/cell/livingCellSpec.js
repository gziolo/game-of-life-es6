import LiveCell from 'lib/domain/cell/liveCell';

describe('Live cell', function() {
  beforeEach(() => {
    this.liveCell = new LiveCell();
  });

  it('should die when it has less than 2 live neighbors', () => {
    this.liveCell.changesState(1).should.be.true;
  });

  it('should stay alive when it has 2 or 3 live neighbors', () => {
    this.liveCell.changesState(2).should.be.false;
    this.liveCell.changesState(3).should.be.false;
  });

  it('should die when it has more than 3 live neighbors', () => {
    this.liveCell.changesState(4).should.be.true;
  });
});
