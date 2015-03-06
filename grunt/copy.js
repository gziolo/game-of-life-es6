module.exports = {
  assets: {
    files: [
      {
        expand: true,
        cwd: 'src/',
        src: ['**/*.html'],
        dest: 'dist/'
      }
    ]
  }
};
