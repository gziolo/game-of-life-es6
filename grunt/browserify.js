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
      'dist/bundle.js': ['src/**/*.js']
    },
    options: {
      browserifyOptions: {
        standalone: 'GameOfLife.World'
      }
    }
  }
};
