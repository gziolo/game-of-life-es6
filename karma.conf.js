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
      {pattern: 'dist/js/**/*.js', included: false},
      {pattern: 'test/**/*Spec.js', included: false},

      'test/test-main.js'
    ],
    frameworks: ['mocha', 'requirejs', 'sinon-chai'],
    logLevel: config.LOG_INFO,
    port: 9876,
    reporters: ['mocha'],
    singleRun: true
  });
};
