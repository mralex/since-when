define(function(require) {
    'use strict';
    var $ = require('jquery'),
        Backbone = require('backbone'),
        React = require('react'),

        TaskCollection = require('models/task_collection'),

        TasksHomeView = require('views/tasks/home_view');

    return Backbone.Router.extend({
        initialize: function() {
            this.taskCollection = new TaskCollection();
        },

        routes: {
            '': 'index'
        },

        index: function() {
            this.taskCollection = new TaskCollection();
            React.renderComponent(
                TasksHomeView({ taskCollection: this.taskCollection }),
                $('#container')[0]
            );
        }
    });
});
