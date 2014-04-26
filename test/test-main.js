(function (window, require) {
  'use strict';

  define('chai-init', ['chai'], function(chai) {
    window.should = chai.should();
  });

  require.config({
    baseUrl: '/base/src/js',
    callback: window.__karma__.start,
    deps: (function () {
      var libs = ['chai-init'],
        tests = [];

      Object.keys(window.__karma__.files).forEach(function (file) {
        if (/Spec\.js$/.test(file)) {
          tests.push(file);
        }
      });

      return Array.prototype.concat(libs, tests);
    }()),
    paths: {
      'chai': '../../node_modules/chai/chai'
    }
  });
}(window, require));