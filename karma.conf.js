module.exports = function (config) {
  config.set({
    autoWatch: false,
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    client: {
      mocha: {
        ui: 'bdd'
      }
    },
    colors: true,
    files: [
      {pattern: 'src/js/**/*.js', included: false},
      {pattern: 'test/**/*Spec.js', included: false},

      'test/test-main.js'
    ],
    frameworks: ['requirejs', 'mocha', 'chai'],
    logLevel: config.LOG_INFO,
    port: 9876,
    reporters: ['progress'],
    singleRun: true
  });
};