module.exports = {
  options: {
    modules: 'amd',
    sourceMap: true
  },
  js: {
    files: [{
      expand: true,
      cwd: 'src/js/',
      src: ['**/*.js'],
      dest: 'dist/js/'
    }]
  },
  spec: {
    files: [{
      expand: true,
      cwd: 'test/spec/',
      src: ['**/*.js'],
      dest: 'dist/spec/'
    }]
  }
};
