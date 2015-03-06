import Bootstrap from 'bootstrap';

describe('Bootstrap', function() {
  beforeEach(() => {
    this.bootstrap = new Bootstrap();
  });

  it('should be an instance of Bootstrap', () => {
    this.bootstrap.should.be.an.instanceof(Bootstrap);
  });

  it('should return test string', () => {
    (this.bootstrap.test()).should.be.equal('test123');
  });
});
