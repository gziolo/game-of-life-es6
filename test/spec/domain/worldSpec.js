import World from 'domain/world';
import Coordinate from 'domain/coordinate';

describe('World', function() {
  beforeEach(() => {
    this.world = new World();
  });

  it('should be have no coordinates when created without dimension', () => {
    (this.world.coordinatesCount()).should.eql(0);
  });

  it('should have exactly 1 coordinate when 1 coordinate added', () => {
    this.world.addCoordinate(new Coordinate(1, 1));

    (this.world.coordinatesCount()).should.be.equal(1);
  });

  it('should have exactly 8 coordinates when world created with 4x2 dimension', () => {
    this.world.create(4, 2);

    (this.world.coordinatesCount()).should.be.equal(8);
  });

  it('should have no coordinate at [6,9] when not added', () => {
    should.not.exist(this.world.getCoordinateAt(6, 9));
  });

  it('should have coordinate at [6,9] when it was added', () => {
    var coordinate = new Coordinate(6, 9);
    this.world.addCoordinate(coordinate);

    (this.world.getCoordinateAt(6, 9)).should.eql(coordinate);
  });

  it('should add neighbors to all coordinates', () => {
    this.world.create(3, 3);

    (this.world.getCoordinateAt(1, 1).getNeighborsCount()).should.be.equal(3);
    (this.world.getCoordinateAt(1, 2).getNeighborsCount()).should.be.equal(5);
    (this.world.getCoordinateAt(2, 2).getNeighborsCount()).should.be.equal(8);
    (this.world.getCoordinateAt(2, 3).getNeighborsCount()).should.be.equal(5);
    (this.world.getCoordinateAt(3, 3).getNeighborsCount()).should.be.equal(3);
  });
});
