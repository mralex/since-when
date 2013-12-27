define(function(require) {
    'use strict';

    var React = require('react'),
        TaskItemView = require('jsx!views/tasks/task_item_view');

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
                var key = 'task_' + task.get('id');
                return (
                    <TaskItemView task={ task } key={ key } />
                );
            });

            return (
                <div className="taskListContainer">
                    <span className="taskCount">{ this.state.taskCollection.length } tasks found</span>
                    <ul className="taskList">
                        { taskViews }
                    </ul>
                </div>
            );
        }
    });
});
