/**
 * @jsx React.DOM
 */
define(function(require) {
    'use strict';

    var Backbone = require('backbone'),
        React = require('react'),
        TaskListView = require('views/tasks/task_list_view');

    return React.createClass({
        render: function() {
            return (
                <div className="taskListHome">
                    <TaskListView taskCollection={ this.props.taskCollection } />
                </div>
            );
        }
    });
});
