module.exports = function(grunt){

  grunt.initConfig({
    nwjs: {
      options: {
        platforms:['win', 'osx'],
        buildDir: './dist'
      },
      src: ['./src/**/*']
    }
  });

  grunt.loadNpmTasks('grunt-nw-builder');

  grunt.registerTask('build', ['nwjs']);
};