/*eslint "no-underscore-dangle": 0 */
(function(window, require) {
  require.config({
    baseUrl: '/base/src/js',
    callback: window.__karma__.start,
    deps: (function() {
      var tests = [];

      Object.keys(window.__karma__.files).forEach(function(file) {
        if (/Spec\.js$/.test(file)) {
          tests.push(file);
        }
      });

      return tests;
    }()),
    paths: {
      jquery: '../../bower_components/jquery/dist/jquery'
    }
  });
}(window, require));
