module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jsdoc : {
            dist: {
                src: ['README.md'],
                options: {
                    "encoding": "utf8",
                    "destination": "docs",
                    "recurse": true,
                    "private": true,
                    configure: 'jsdoc.conf.json'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-jsdoc');

    // Default task(s).
    grunt.registerTask('default', ['jsdoc']);
};

