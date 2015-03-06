import $ from 'jquery';
import Bootstrap from 'bootstrap';

describe('Bootstrap', function() {
  beforeEach(() => {
    this.bootstrap = new Bootstrap();
  });

  it('should be an instance of Bootstrap', () => {
    this.bootstrap.should.be.an.instanceof(Bootstrap);
  });

  it('should not be plain object', () => {
    $.isPlainObject(this.bootstrap).should.be.false;
  });

  it('should return test string', () => {
    (this.bootstrap.test()).should.be.equal('test123');
  });
});
