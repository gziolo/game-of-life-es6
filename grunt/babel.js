module.exports = {
  options: {
    modules: 'amd',
    sourceMap: true
  },
  src: {
    files: [{
      expand: true,
      cwd: 'src/js/',
      src: ['**/*.js'],
      dest: 'dist/js/'
    }]
  }
};
