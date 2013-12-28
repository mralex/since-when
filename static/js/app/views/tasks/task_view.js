/**
 * @jsx React.DOM
 */
define(function(require) {
    'use strict';

    var React = require('react'),
        ActivityCollection = require('models/activity_collection'),
        TaskItemView = require('views/tasks/task_item_view'),
        ActivityListView = require('views/tasks/activity_list_view');

    return React.createClass({
        componentWillMount: function() {
            this.props.activityCollection = new ActivityCollection(
                this.props.task.get('activities'), {
                    taskId: this.props.task.get('id')
                }
            );
        },

        render: function() {
            return (
                <div>
                    <TaskItemView task={ this.props.task } />
                    <ActivityListView activityCollection={ this.props.activityCollection } />
                </div>
            );
        }
    });
});
