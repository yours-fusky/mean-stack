/*jslint node: true */
'use strict';

module.exports = function(grunt) {
    // Unified Watch Object
    var watchFiles = {
        serverViews: ['app/views/**/*.*'], 
        serverJS: ['gruntfile.js', 'server.js', 'config/**/*.js', 'app/**/*.js'],
        clientViews: ['public/modules/**/views/*.html', 'public/modules/**/views/**/*.html'],
        clientJS: ['public/js/*.js', 'public/modules/**/*.js'],
        clientCSS: ['public/modules/**/*.css'],
        mochaTests: ['app/tests/**/*.js']
    };
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            serverViews: {
                files: watchFiles.serverViews,
                options: {
                    livereload: true
                }
            },
            serverJS: {
                files: watchFiles.serverJS,
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            clientViews: {
                files: watchFiles.clientViews,
                options: {
                    livereload: true,
                }
            },
            clientJS: {
                files: watchFiles.clientJS,
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            clientCSS: {
                files: watchFiles.clientCSS,
                tasks: ['csslint'],
                options: {
                    livereload: true
                }
            }
        },
        jshint: {
            all: {
                src: watchFiles.clientJS.concat(watchFiles.serverJS),
                options: {
                    jshintrc: true
                }
            }
        },
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
            },
            docker: {
                script: 'server.js',
                options: {
                    ext: 'js,html',
                }
            }
        },
        env: {
            test: {
                NODE_ENV: 'test',
                PORT: 3003
            },
            local: {
                NODE_ENV: 'local',
                PORT: 3003
            },
            dev: {
                NODE_ENV: 'dev',
                PORT: 3000
            },
            prod: {
                NODE_ENV: 'prod',
                PORT: 3001
            },
            docker: {
                NODE_ENV: 'docker',
                PORT: 80
            }
        },
        mochaTest: {
            src: watchFiles.mochaTests,
            options: {
                reporter: 'spec',
                require: 'server.js'
            }
        },
    });

    // Load NPM tasks 
    require('load-grunt-tasks')(grunt);

    // Making grunt default to force in order not to break the project.
    grunt.option('force', true);

    // A Task for loading the configuration object
    grunt.task.registerTask('loadConfig', 'Task that loads the config into a grunt option.', function() {
        var init = require('./config/init')();
        var config = require('./config/config');

        grunt.config.set('applicationJavaScriptFiles', config.assets.js);
        grunt.config.set('applicationCSSFiles', config.assets.css);
    });

    grunt.loadNpmTasks('grunt-env');
    grunt.registerTask('local', ['jshint', 'env:local', 'nodemon']);
    grunt.registerTask('dev', ['env:dev', 'nodemon']);
    grunt.registerTask('prod', ['env:prod', 'nodemon']);
    grunt.registerTask('test', ['env:test', 'mochaTest']);
    grunt.registerTask('docker', ['env:docker', 'nodemon']);
};