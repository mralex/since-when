define(function(require) {
    'use strict';

    var $ = require('jquery'),
        React = require('react');

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
            this.props.task.on('change', this._modelChanged, this);
        },

        handleImportantChange: function(e) {
            this.props.task.set('important', $(e.target).is(':checked'));
        },

        render: function() {
            var className = 'task';

            if (this.state.task.get('important')) {
                className += ' important';
            }

            return React.DOM.li({
                className: className,
                children: [
                    React.DOM.h3({}, this.state.task.get('name')),
                    React.DOM.p({}, this.state.task.get('description')),
                    React.DOM.input({
                        type: 'checkbox',
                        checked: this.state.task.get('important'),
                        onChange: this.handleImportantChange
                    }, 'Important')
                ]
            });
        }
    });
});
