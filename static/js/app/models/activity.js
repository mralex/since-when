define(function(require) {
    'use strict';

    var Backbone = require('backbone');

    return Backbone.Model.extend({
        defaults: {
            task: 0,
            recorded: new Date(),
            notes: '',
            status: 10
        },

        urlRoot: function() {
            return '/api/tasks/' + this.get('task') + '/activities';
        }
    });
});
