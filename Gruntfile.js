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
          '!js/modernizr-build*.js',
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

    cssmin: {
      combine: {
        files: {
          'css/min/prism.min.css': [
            'bower_components/prism/themes/prism.css',
            'bower_components/prism/plugins/line-numbers/prism-line-numbers.css'
          ]
        }
      }
    },

    requirejs: {
      compile: {
        options: {
          mainConfigFile: [
//            'js/require.config.js',
            'js/require.build.config.js'
          ],
          skipDirOptimize: true,
          name: 'jquery-library-sizes',
          include: ['modernizr'],
          insertRequire: ['jquery-library-sizes'],
          out: 'js/min/jquery-library-sizes.min.js',
          optimize: 'uglify2',
          uglify2: {
            output: {
              max_line_len: 80
            }
          }
        }
      }
    },

    uglify: {
      all: {
        files: {
          'js/min/require.min.js': [
            'bower_components/requirejs/require.js',
            'js/require.config.js'
          ],
          'js/min/prism.min.js': [
            'bower_components/prism/prism.js',
            'bower_components/prism/components/prism-markup.js',
            'bower_components/prism/components/prism-javascript.js',
            'bower_components/prism/plugins/line-numbers/prism-line-numbers.js'
          ]
        }
      },
      options: {
        sourceMap: true,
        sourceMapIncludeSources: true,
        beautify: {
          max_line_len: 80
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-jqlint');
  grunt.loadNpmTasks('grunt-jslint');

  grunt.registerTask('test', ['jqlint', 'jslint']);
  grunt.registerTask('build', ['cssmin', 'requirejs', 'uglify']);

  grunt.registerTask('default', ['build', 'test']);
};
