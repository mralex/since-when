/**
 * @jsx React.DOM
 */
define(function(require) {
    'use strict';
    var $ = require('jquery'),
        Backbone = require('backbone'),
        React = require('react'),

        TaskCollection = require('models/task_collection'),

        TasksHomeView = require('views/tasks/home_view'),
        TaskView = require('views/tasks/task_view');

    return Backbone.Router.extend({
        initialize: function() {
            this.taskCollection = new TaskCollection();

            this.taskDfd = this.taskCollection.fetch();
        },

        routes: {
            'tasks/:id': 'showTask',
            '': 'index'
        },

        index: function() {
            React.renderComponent(
                <TasksHomeView taskCollection={ this.taskCollection } />,
                $('#container')[0]
            );
        },

        showTask: function(id) {
            this.taskDfd.done(function() {
                var task = this.taskCollection.where({
                    id: parseInt(id, 10)
                })[0];

                React.renderComponent(
                    <TaskView task={ task } />,
                    $('#container')[0]
                );
            }.bind(this));
        }
    });
});
