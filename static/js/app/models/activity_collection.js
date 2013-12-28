define(function(require) {
    'use strict';

    var Backbone = require('backbone'),
        Activity = require('models/activity');

    return Backbone.Collection.extend({
        model: Activity,

        url: function() {
            return '/api/tasks/' + this.taskId + '/activities';
        },

        initialize: function(models, options) {
            if (!options.taskId) {
                throw new Error('Task ID required');
            }

            this.taskId = options.taskId;
        }
    });
});
