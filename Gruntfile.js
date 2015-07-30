module.exports = function(grunt){

    grunt.initConfig({
        copy: {
            jsFiles: {
                files: [
                    {expand: true, flatten: true, src: ['node_modules/angular-*/*.min.js', 'node_modules/angular-*/*.min.js.map'], dest: 'src/lib/js'}
                ]
            },
            cssFiles: {
                files: [
                    {expand: true, flatten: true, src: ['node_modules/angular-material/angular-material.min.css'], dest: 'src/lib/css'}
                ]
            }
        },
        concat: {
            appJs: {
                src: ['src/**/*.js', '!src/lib/**/*', '!src/app.js'],
                dest: 'src/app.js'
            },
            appCss: {
                src: ['src/styles/*.css'],
                dest: 'src/app.css'
            }
        },
        nwjs: {
            options: {
                platforms: ['win','osx'],
                buildDir: './dist' // Where the build version of my NW.js app is saved
            },
            src: ['./src/**/*'] // Your NW.js app
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-nw-builder');

    grunt.registerTask('build', ['copy', 'concat', 'nwjs']);
};