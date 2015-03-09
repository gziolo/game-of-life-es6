import World from 'domain/world';
import Coordinate from 'domain/coordinate';

describe('World', function() {
  beforeEach(() => {
    this.world = new World();
  });

  it('should be empty', () => {
    (this.world.coordinatesCount()).should.equals(0);
  });

  it('should not be empty when coordinate added', () => {
    this.world.addCoordinate(new Coordinate(1, 1));

    (this.world.coordinatesCount()).should.equals(1);
  });

  it('should create coordinates when create called', () => {
    this.world.create(4, 2);

    (this.world.coordinatesCount()).should.equals(8);
  });
});
