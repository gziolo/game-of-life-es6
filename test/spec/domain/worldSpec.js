import World from 'domain/world';
import Coordinate from 'domain/coordinate';

describe('World', function() {
  beforeEach(() => {
    this.world = new World();
  });

  it('should be empty', () => {
    (this.world.isEmpty()).should.be.true;
  });

  it('should not be empty when coordinate added', () => {
    this.world.addCoordinate(new Coordinate(1, 1));

    (this.world.isEmpty()).should.be.false;
  });
});
