import World from 'src/domain/world';
import Coordinate from 'src/domain/coordinate';

describe('World', function() {
  beforeEach(() => {
    this.world = new World();
  });

  it('should be have no coordinates when created without dimension', () => {
    this.world.coordinatesCount().should.eql(0);
  });

  it('should have exactly 8 coordinates when world created with 4x2 dimension', () => {
    this.world.create(4, 2);

    this.world.coordinatesCount().should.be.equal(8);
  });

  it('should have no coordinate at [6,9] when not added', () => {
    should.not.exist(this.world.getCoordinateAt(6, 9));
  });

  it('should have coordinate at [6,9] when it was added', () => {
    var coordinate;

    this.world.create(6, 9);

    coordinate = this.world.getCoordinateAt(6, 9);

    coordinate.equals(new Coordinate(6, 9)).should.be.true;
  });

  it('should add neighbors to all coordinates', () => {
    this.world.create(3, 3);

    this.world.getCoordinateAt(1, 1).getNeighborsCount().should.be.equal(3);
    this.world.getCoordinateAt(1, 2).getNeighborsCount().should.be.equal(5);
    this.world.getCoordinateAt(2, 2).getNeighborsCount().should.be.equal(8);
    this.world.getCoordinateAt(2, 3).getNeighborsCount().should.be.equal(5);
    this.world.getCoordinateAt(3, 3).getNeighborsCount().should.be.equal(3);
  });

  it('should not generate next state for coordinate when tick called but update rules not met', () => {
    var coordinate, changeStateStub, nextStateSpy;

    this.world.create(1, 1);

    coordinate = this.world.getCoordinateAt(1, 1);
    changeStateStub = sinon.stub(coordinate, 'changesState').returns(false);
    nextStateSpy = sinon.spy(coordinate, 'nextState');

    this.world.tick();

    changeStateStub.should.have.been.calledOnce;
    nextStateSpy.should.have.not.been.called;
  });

  it('should generate next state for coordinate when tick called and update rules met', () => {
    var coordinate, changeStateStub, nextStateSpy;

    this.world.create(1, 1);

    coordinate = this.world.getCoordinateAt(1, 1);
    changeStateStub = sinon.stub(coordinate, 'changesState').returns(true);
    nextStateSpy = sinon.spy(coordinate, 'nextState');

    this.world.tick();

    changeStateStub.should.have.been.calledOnce;
    nextStateSpy.should.have.been.calledOnce;
  });
});
