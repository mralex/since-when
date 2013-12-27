define(function(require) {
    'use strict';

    var Backbone = require('backbone');

    return Backbone.Model.extend({
        defaults: {
            name: '',
            description: '',
            important: false,
            status: 10
        },

        urlRoot: '/api/tasks'
    });
});
