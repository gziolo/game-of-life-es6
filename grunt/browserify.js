module.exports = {
  options: {
    transform: [
      'babelify'
    ]
  },
  test: {
    files: {
      'dist/test-bundle.js': ['test/**/*.js']
    }
  },
  js: {
    files: {
      'dist/bundle.js': ['lib/**/*.js']
    },
    options: {
      browserifyOptions: {
        standalone: 'GameOfLife'
      }
    }
  }
};
