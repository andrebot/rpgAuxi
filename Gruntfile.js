module.exports = function(grunt){

    //grunt.initConfig({
    //    zip: {
    //        'RPGAuxi.nw': ['node_modules/*', 'src/*', 'package.json']
    //    }
    //});
    //
    //grunt.loadNpmTasks('grunt-zip');
    //
    //grunt.registerTask('dist', ['zip']);

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

  grunt.registerTask('default', ['nwjs']);
};