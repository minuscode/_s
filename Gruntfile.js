/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    properties: {
      build_dir:     'build',
      build_css_dir: '<%= properties.build_dir %>/css',
      build_js_dir:  '<%= properties.build_dir %>/js'
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
          '<%= properties.build_css_dir %>/style.css': 'css/style.scss'
        }
      }
    },
    uglify: {
      build: {
        src: ['js/libs/*.js', 'js/plugins/*.js', 'js/*.js'],
        dest: '<%= properties.build_js_dir %>/main.min.js'
      }
    },
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      files: ['**/*'],
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