module.exports = function(grunt){

    grunt.initConfig({
        zip: {
            'RPGAuxi.nw': ['node_modules/*', 'src/*', 'package.json']
        }
    });

    grunt.loadNpmTasks('grunt-zip');

    grunt.registerTask('dist', ['zip']);
};