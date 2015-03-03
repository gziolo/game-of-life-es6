define(['bootstrap'], function(Bootstrap) {
  describe('Bootstrap', function() {
    var test;

    beforeEach(function() {
      test = new Bootstrap();
    });

    it('should be an instance of Bootstrap', function() {
      test.should.be.an.instanceof(Bootstrap);
    });
  });
});
