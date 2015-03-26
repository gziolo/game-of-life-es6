module.exports = function(config) {
  config.set({
    autoWatch: false,
    basePath: '',
    browsers: ['Firefox'],
    browserify: {
      debug: true,
      transform: ['babelify']
    },
    captureTimeout: 60000,
    client: {
      mocha: {
        ui: 'bdd'
      }
    },
    colors: true,
    files: [
      'lib/**/*.js',
      'test/**/*Spec.js'
    ],
    frameworks: ['browserify', 'mocha', 'sinon-chai'],
    logLevel: config.LOG_INFO,
    port: 9877,
    preprocessors: {
      'lib/**/*.js': ['browserify'],
      'test/**/*Spec.js': ['browserify']
    },
    reporters: ['mocha'],
    singleRun: true
  });
};
