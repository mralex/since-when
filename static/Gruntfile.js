module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            compile: {
                options: {
                    baseUrl: 'js/build/js/app',
                    name: 'main',
                    mainConfigFile: 'js/build/js/app/config.js',
                    out: 'js/build.js'
                }
            }
        },
        react: {
            files: {
                expand: true,
                src: ['js/app/**/*.js'],
                dest: 'js/build',
                ext: '.js'
            }
        },
        watch: {
            scripts: {
                files: ['js/app/**/*.js'],
                tasks: ['react'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-react');

    grunt.registerTask('default', ['react', 'requirejs']);
};
