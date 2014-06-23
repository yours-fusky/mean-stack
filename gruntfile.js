module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        nodemon: {
            local: {
                script: 'server.js',
                options: {
                    nodeArgs: ['--debug'],
                    ext: 'js,html',
                }
            },
            dev: {
                script: 'server.js',
                options: {
                    nodeArgs: ['--debug'],
                    ext: 'js,html',
                }
            },
            prod: {
                script: 'server.js',
                options: {
                    ext: 'js,html',
                }
            }
        },
        env: {
            local: {
                NODE_ENV: 'local'
            },
            dev: {
                NODE_ENV: 'dev'
            },
            prod: {
                NODE_ENV: 'prod'
            }
        },
    });

    // Load NPM tasks 
    require('load-grunt-tasks')(grunt);

    // Making grunt default to force in order not to break the project.
    grunt.option('force', true);

    grunt.loadNpmTasks('grunt-env');
    grunt.registerTask('local', ['env:local', 'nodemon']);
    grunt.registerTask('dev', ['env:dev', 'nodemon']);
    grunt.registerTask('prod', ['env:prod', 'nodemon']);
};