import {App} from '../../src/js/app.js';

describe('App', function () {
  var test;

  beforeEach(function () {
    test = new App();
  });

  it('should be an instance of App', function () {
    test.should.be.an.instanceof(App);
  });
});