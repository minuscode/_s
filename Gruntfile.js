/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    properties: {
      css_dir: 'assets/css',
      js_dir:  'assets/js',
      img_dir: 'assets/img'
    },
    // Metadata.
    meta: {
      version: '0.1.0'
    },
    banner: '/*! PROJECT_NAME - v<%= meta.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '* http://PROJECT_WEBSITE/\n' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
      'YOUR_NAME; Licensed MIT */\n',
    sass: {
      options: {
        style: 'compressed'
      },
      dist: {
        files: {
          '<%= properties.css_dir %>/style.css': '<%= properties.css_dir %>/src/style.scss'
        }
      }
    },
    uglify: {
      build: {
        options: {
          sourceMap: '<%= properties.js_dir %>/main.js.map',
          sourceMappingURL: 'main.js.map',
          sourceMapPrefix: 2
        },
        files: {
          '<%= properties.js_dir %>/main.min.js': [
            '<%= properties.js_dir %>/src/libs/*.js',
            '<%= properties.js_dir %>/src/plugins/*.js',
            '<%= properties.js_dir %>/src/js/*.js'
          ]
        }
      }
    },
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      livereload {
        files: [
          '<%= properties.css_dir %>/style.css',
          '<%= properties.js_dir %>/*.js',
          '<%= properties.img_dir %>/**/*.{png, jpg, jpeg, gif, webp, svg}',
          '*.php'
        ]
      },
      files: ['assets/**/*'],
      tasks: ['sass', 'uglify']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register tasks.
  grunt.registerTask('build', ['sass', 'uglify']);

  // Default task.
  grunt.registerTask('default', ['build']);

};