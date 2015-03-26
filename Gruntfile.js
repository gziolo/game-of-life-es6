process.env.NODE_PATH = __dirname;

module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-config')(grunt);
};
