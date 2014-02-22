/*jslint indent:2, node:true*/

module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jqlint: {
      all: {
        src: [
          '**/*.js',
          '!**/*.min.js',
          '!js/base64toBlob.js',
          '!**/_site/**/*',
          '!**/_vendor/**/*',
          '!**/bower_components/**/*',
          '!**/node_modules/**/*'
        ],
        options: {
          errorsOnly: true,
          failOnError: true
        }
      }
    },

    jslint: {
      all: {
        src: [
          '**/*.json',
          '<%= jqlint.all.src %>'
        ],
        options: {
          errorsOnly: true,
          failOnError: true
        }
      }
    },

    uglify: {
      require: {
        files: {
          'js/min/require.min.js': [
            'bower_components/requirejs/require.js',
            'js/require.config.js'
          ]
        }
      },
      options: {
        sourceMap: true,
        sourceMapIncludeSources: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jqlint');
  grunt.loadNpmTasks('grunt-jslint');

  grunt.registerTask('test', ['jqlint', 'jslint']);
  grunt.registerTask('build', ['uglify']);

  grunt.registerTask('default', ['build', 'test']);
};
