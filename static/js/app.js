requirejs.config({
    paths: {
        'text': 'vendor/requirejs-text/text',
        'hb': 'vendor/requirejs-handlebars/hb',
        'jquery': 'vendor/jquery/jquery',
        'handlebars': 'vendor/handlebars/handlebars',
        'ember': 'vendor/ember/ember'
    },
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        },
        'ember': {
            deps: ['jquery', 'handlebars'],
            exports: 'Ember'
        }
    }
});

require([
    'jquery',
    'ember',
    'handlebars',
    'text!templates/index.handlebars',
    'router',
    'tasks/app'
], function(
    $,
    Ember,
    Handlebars,
    applicationTemplate,
    router,
    tasksApp
) {
    // XXX Make a Requirejs helper to compile and add templates to Ember.TEMPLATES
    Ember.TEMPLATES['application'] = Ember.Handlebars.compile(applicationTemplate);

    window.App = App = Ember.Application.create();
    App.Router = router;

    $.extend(
        App,
        tasksApp
    );
});
