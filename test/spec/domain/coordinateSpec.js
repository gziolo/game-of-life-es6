import Coordinate from 'domain/coordinate';

describe('Coordinate', function() {
  beforeEach(() => {
    this.coordinate = new Coordinate(1, 1);
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
