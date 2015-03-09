import Coordinate from 'domain/coordinate';

describe('Coordinate', function() {
  beforeEach(() => {
    this.coordinate = new Coordinate(1, 1);
  });

  it('should be instance of Coordinate', () => {
    this.coordinate.should.be.instanceof.Coordinate;
  });
});

