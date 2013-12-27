define(function(require) {
    'use strict';

    var React = require('react'),
        TaskItemView = require('views/tasks/task_item_view');

    return React.createClass({
        _collectionChanged: function() {
            this.setState({ taskCollection: this.props.taskCollection });
        },

        getInitialState: function() {
            return {
                taskCollection: this.props.taskCollection
            };
        },

        componentWillMount: function() {
            this.props.taskCollection.on('add', this._collectionChanged, this);
            this.props.taskCollection.on('remove', this._collectionChanged, this);
            this.props.taskCollection.on('sync', this._collectionChanged, this);

            this.props.taskCollection.fetch();
        },

        render: function() {
            var taskViews = this.state.taskCollection.map(function(task) {
                return TaskItemView({ task: task });
            });

            return React.DOM.div({
                className: 'taskListContainer',
                children: [
                    React.DOM.span({
                        className: 'taskCount',
                        children: [
                            this.state.taskCollection.length + ' tasks found'
                        ]
                    }),
                    React.DOM.ul({
                        className: 'taskList',
                        children: taskViews
                    })
                ]
            });
        }
    });
});
