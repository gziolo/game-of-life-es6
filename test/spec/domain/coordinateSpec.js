import Coordinate from 'domain/coordinate';

describe('Coordinate', function() {
  beforeEach(() => {
    this.coordinate = new Coordinate(1, 1);
  });

  it('should have not [x,y] coordinates equal to [2,1]', () => {
    (this.coordinate.equals(new Coordinate(2, 1))).should.be.false;
  });

  it('should have [x,y] coordinates equal to [1,1]', () => {
    (this.coordinate.equals(new Coordinate(1, 1))).should.be.true;
  });

  it('should not have neighbor with identical [x,y]', () => {
    (this.coordinate.isNeighbor(new Coordinate(1, 1))).should.be.false;
  });

  it('should have neighbor with adjacent [x,y]', () => {
    (this.coordinate.isNeighbor(new Coordinate(1, 2))).should.be.true;
    (this.coordinate.isNeighbor(new Coordinate(2, 1))).should.be.true;
    (this.coordinate.isNeighbor(new Coordinate(2, 2))).should.be.true;
  });

  it('should have 0 neighbors', () => {
    (this.coordinate.neighborsCount()).should.be.equal(0);
  });

  it('should have 2 neighbors when 2 neighbors added', () => {
    this.coordinate.addNeighbor(new Coordinate(1, 2));
    this.coordinate.addNeighbor(new Coordinate(2, 2));

    (this.coordinate.neighborsCount()).should.be.equal(2);
  });
});
