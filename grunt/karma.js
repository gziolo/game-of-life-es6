module.exports = {
  continuous: {
    configFile: 'karma.conf.js'
  },
  unit: {
    configFile: 'karma.conf.js',
    preprocessors: {
      'src/js/**/*.js': ['coverage']
    },
    reporters: ['progress', 'coverage']
  }
};