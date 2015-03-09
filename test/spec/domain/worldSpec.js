import World from 'domain/world';

describe('World', function() {
  beforeEach(() => {
    this.world = new World();
  });

  it('should be empty', () => {
    (this.world.isEmpty()).should.be.true;
  });
});
