module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            main: {
                files: [{
                    expand: false,
                    cwd: '',
                    src: ['HelloWorld.js','HelloWorld.qext', 'properties.js'],
                    dest: 'C:/Users/Niels/Documents/Qlik/Sense/Extensions/ExtensionTutorial/'
                },
                {
                    expand: false,
                    cwd: '',
                    src: ['dataExtension.js','dataExtension.qext', 'dataExtensionProperties.js', 'styles.css', 'arrowUp.png', 'arrowDown.png'],
                    dest: 'C:/Users/Niels/Documents/Qlik/Sense/Extensions/DataExtension/'
                }
                ]
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['copy']);
};