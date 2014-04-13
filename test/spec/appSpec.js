define(['app'], function (App) {
  'use strict';

  describe('App', function () {
    var test;

    beforeEach(function () {
      test = new App();
    });

    it('should be an instance of App', function () {
      test.should.be.an.instanceof(App);
    });
  });
});