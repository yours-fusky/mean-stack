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
                'public/lib/angular/angular.js',
                'public/lib/angular-resource/angular-resource.js',
                'public/lib/angular-animate/angular-animate.js',
                'public/lib/angular-ui-router/release/angular-ui-router.js',
                'public/lib/angular-ui-utils/ui-utils.js',
                'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
                'public/lib/lodash/dist/lodash.min.js'
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