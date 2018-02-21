module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {},
      build: {
        src: 'lintTest.js',
        dest: 'dist-grunt/lintTest.min.js'
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    sass: {
      options: {},
      build: {
        src: 'style.scss',
        dest: 'dist-grunt/style.css'
      }
    },
    watch: {
      files: ['lintTest.js', 'style.scss'],
      tasks: ['uglify', 'jshint', 'sass']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['uglify', 'jshint', 'sass', 'watch']);

}
