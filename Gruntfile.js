module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            main: {
                files: [{
                    expand: false,
                    cwd: '',
                    src: ['HelloWorld.js','HelloWorld.qext', 'properties.js'],
                    dest: 'C:/Users/Niels/Documents/Qlik/Sense/Extensions/ExtensionTutorial/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['copy']);
};