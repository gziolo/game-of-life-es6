module.exports = {
  options: {
    transform: [
      'babelify'
    ]
  },
  test: {
    files: {
      'dist/test/bundle.js': ['test/spec/**/*.js']
    }
  },
  js: {
    files: {
      'dist/js/bundle.js': ['src/js/**/*.js']
    }
  }
};
