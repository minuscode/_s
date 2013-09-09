/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    meta: {
      version: '0.1.0'
    },
    banner: '/*! PROJECT_NAME - v<%= meta.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '* http://PROJECT_WEBSITE/\n' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
      'YOUR_NAME; Licensed MIT */\n',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['public/javascripts/libs/reqwest.js', 'public/javascripts/libs/spin.js', 'public/javascripts/libs/ladda.js', 'public/javascripts/main.js'],
        dest: 'public/javascripts/all.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: 'public/javascripts/all.js',
        dest: 'public/javascripts/all.min.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'public/stylesheets/',
        src: ['main.css', 'admin.css', '!*.min.css'],
        dest: 'public/stylesheets/',
        ext: '.min.css'
      }
    },
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      html: {
        files: 'views/*.erb'
      },
      css: {
        files: '**/*.css',
        tasks: ['concat', 'cssmin']
      },
      js: {
        files: ['public/javascripts/main.js'],
        tasks: ['concat', 'uglify']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin']);

};
