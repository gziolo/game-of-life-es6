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
      'src/**/*.js',
      'test/**/*Spec.js'
    ],
    frameworks: ['browserify', 'mocha', 'sinon-chai'],
    logLevel: config.LOG_INFO,
    port: 9877,
    preprocessors: {
      'src/**/*.js': ['browserify'],
      'test/**/*Spec.js': ['browserify']
    },
    reporters: ['mocha'],
    singleRun: true
  });
};
