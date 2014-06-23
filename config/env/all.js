'use strict';

module.exports = {
    app: {
        title: 'my dev stack',
        description: 'this is my dev stack',
        keywords: 'dev, stack'
    },
    port: process.env.PORT || 3000,
    assets: {
        lib: {
            css: [
                'public/lib/bootstrap/dist/css/bootstrap.css'
            ],
            js: [
                'public/lib/angular/angular.js'
            ]
        },
        css: [
            'public/modules/**/css/*.css'
        ],
        js: [
            'public/config.js',
            'public/application.js',
            'public/modules/*/*.js'
        ]
    }
};