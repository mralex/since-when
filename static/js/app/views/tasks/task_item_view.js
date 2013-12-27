define(function(require) {
    'use strict';

    var React = require('react');

    return React.createClass({
        _modelChanged: function() {
            this.setState({ task: this.props.task });
        },

        getInitialState: function() {
            return {
                task: this.props.task
            };
        },

        componentWillMount: function() {
            this.state.task.on('change', this._modelChanged, this);
        },

        render: function() {
            return React.DOM.li({
                className: 'task',
                children: [
                    React.DOM.h3({}, this.state.task.get('name')),
                    React.DOM.p({}, this.state.task.get('description'))
                ]
            });
        }
    });
});
