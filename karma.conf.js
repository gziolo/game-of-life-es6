module.exports = function (config) {
  config.set({
    autoWatch: false,
    browsers: ['Firefox'],
    captureTimeout: 60000,
    client: {
      mocha: {
        ui: 'bdd'
      }
    },
    colors: true,
    files: [
      {pattern: 'node_modules/chai/chai.js', included: false},
      {pattern: 'src/js/**/*.es6', included: false},
      {pattern: 'test/**/*Spec.es6', included: false},

      'test/test-main.js'
    ],
    frameworks: ['traceur', 'mocha', 'requirejs'],
    logLevel: config.LOG_INFO,
    port: 9876,
    preprocessors: {
      '**/*.es6': ['traceur']
    },
    reporters: ['mocha'],
    singleRun: true
  });
};