requirejs.config({
    paths: {
        'text': '../vendor/requirejs-text/text',
        'hb': '../vendor/requirejs-handlebars/hb',
        'jquery': '../vendor/jquery/jquery',
        'handlebars': '../vendor/handlebars/handlebars',
        'react': '../vendor/react/react',
        'JSXTransformer': '../vendor/react/JSXTransformer',
        'jsx': '../vendor/require-jsx/jsx',
        'underscore': '../vendor/underscore-amd/underscore',
        'backbone': '../vendor/backbone-amd/backbone'
    },
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        }
    }
});

require(['app'], function(app) {
    'use strict';
    window.app = app;
    app.start();
});
