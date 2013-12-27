define(function(require) {
    'use strict';

    var Backbone = require('backbone'),
        React = require('react'),
        TaskListView = require('views/tasks/task_list_view');

    return React.createClass({
        render: function() {
            return React.DOM.div({
                className: 'taskList',
                children: [
                    TaskListView({
                        taskCollection: this.props.taskCollection
                    })
                ]
            });
        }
    });
});
