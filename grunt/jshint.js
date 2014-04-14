module.exports = function (grunt) {
  return {
    js: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: {
        src: [ 'src/js/**/*.es6' ]
      }
    },
    spec: {
      options: grunt.util._.merge(grunt.file.readJSON('test/.jshintrc'), grunt.file.readJSON('.jshintrc')),
      files: {
        src: [ 'test/**/*.es6' ]
      }
    }
  };
};
