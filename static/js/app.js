requirejs.config({
    paths: {
        'text': 'vendor/requirejs-text/text',
        'hb': 'vendor/requirejs-handlebars/hb',
        'jquery': 'vendor/jquery/jquery',
        'handlebars': 'vendor/handlebars/handlebars',
        'ember': 'vendor/ember/ember',
        'ember-data': 'vendor/ember-data-shim/ember-data'
    },
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        },
        'ember': {
            deps: ['jquery', 'handlebars'],
            exports: 'Ember'
        },
        'ember-data': {
            deps: ['ember'],
            exports: 'DS'
        }
    }
});

require([
    'jquery',
    'ember',
    'ember-data',
    'handlebars',
    'text!templates/index.handlebars',
    'dataStore',
    'router',
    'tasks/app'
], function(
    $,
    Ember,
    DS,
    Handlebars,
    applicationTemplate,
    dataStore,
    router,
    tasksApp
) {
    // XXX Make a Requirejs helper to compile and add templates to Ember.TEMPLATES
    Ember.TEMPLATES['application'] = Ember.Handlebars.compile(applicationTemplate);

    window.App = App = Ember.Application.create();

    App.Store = dataStore;

    App.Router = router;

    $.extend(
        App,
        tasksApp
    );
});
