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
      {pattern: 'src/js/**/*.es6', included: false},
      {pattern: 'test/**/*Spec.es6', included: false},

      'test/test-main.js'
    ],
    frameworks: ['traceur', 'mocha', 'requirejs', 'chai'],
    logLevel: config.LOG_INFO,
    port: 9876,
    preprocessors: {
      '**/*.es6': ['traceur']
    },
    reporters: ['progress'],
    singleRun: true
  });
};