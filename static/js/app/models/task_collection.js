define(function(require) {
    'use strict';

    var Backbone = require('backbone'),
        Task = require('models/task');

    return Backbone.Collection.extend({
        model: Task,
        url: '/api/tasks'
    });
});
