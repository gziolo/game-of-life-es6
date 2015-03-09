import LiveCell from 'domain/cell/liveCell';

describe('Live cell', function() {
  beforeEach(() => {
    this.liveCell = new LiveCell();
  });

  it('should stay alive when it has less than 2 live neighbors', () => {
    this.liveCell.staysAlive(1).should.be.false;
  });

  it('should stay alive when it has more than 3 live neighbors', () => {
    this.liveCell.staysAlive(4).should.be.false;
  });
});
