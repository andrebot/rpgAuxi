module.exports = function(grunt){

  grunt.initConfig({
    copy: {
      jsFiles: {
        files: [
          {expand: true, flatten: true, src: ['node_modules/jquery/dist/jquery.min.js', 'node_modules/jquery/dist/jquery.min.map'], dest: 'src/lib/js'},
          {expand: true, flatten: true, src: ['node_modules/materialize-css/bin/materialize.js'], dest: 'src/lib/js'},
          {expand: true, flatten: true, src: ['node_modules/knockout/build/output/knockout-latest.js'], dest: 'src/lib/js'}
        ]
      },
      cssFiles: {
        files: [
          {expand: true, flatten: true, src: ['node_modules/materialize-css/bin/materialize.css'], dest: 'src/lib/css'}
        ]
      },
      fonts: {
        files: [
          {expand: true, cwd: 'node_modules/materialize-css/font', src: ['./**/*'], dest: 'src/lib/font'}
        ]
      }
    },
    nwjs: {
      options: {
        version: '0.12.2',
        platforms: ['win64','osx64', 'linux64'],
        buildDir: './dist' // Where the build version of my NW.js app is saved
      },
      src: ['./src/**/*'] // Your NW.js app
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-nw-builder');

  grunt.registerTask('default', ['copy', 'nwjs']);
};