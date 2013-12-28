/**
 * @jsx React.DOM
 */
define(function(require) {
    'use strict';

    var React = require('react'),
        ActivityItemView = require('views/tasks/activity_item_view');

    return React.createClass({
        _collectionChanged: function() {
            this.setState({ activityCollection: this.props.activityCollection });
        },

        getInitialState: function() {
            return {
                activityCollection: this.props.activityCollection
            };
        },

        componentWillMount: function() {
            this.props.activityCollection.on('add', this._collectionChanged, this);
            this.props.activityCollection.on('remove', this._collectionChanged, this);
            this.props.activityCollection.on('sync', this._collectionChanged, this);
        },

        render: function() {
            var activityViews = this.state.activityCollection.map(function(activity) {
                var key = 'activity_' + activity.get('id');
                return (
                    <li>
                        <ActivityItemView activity={ activity } key={ key } />
                    </li>
                );
            });

            return (
                <div className="taskListContainer">
                    <ul className="taskList">
                        { activityViews }
                    </ul>
                </div>
            );
        }
    });
});
