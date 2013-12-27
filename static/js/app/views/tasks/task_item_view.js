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
            this.props.task.set('important', this.refs.importantCheckbox.state.checked);
        },

        render: function() {
            var className = 'task',
                checkboxId = 'important_' + this.state.task.get('id');

            if (this.state.task.get('important')) {
                className += ' important';
            }

            return (
                <li className={ className }>
                    <h3>{ this.state.task.get('name') }</h3>
                    <p>{ this.state.task.get('description') }</p>
                    <p>
                        <input
                            type="checkbox"
                            ref="importantCheckbox"
                            id={ checkboxId }
                            checked={ this.state.task.get('important') }
                            onChange={ this.handleImportantChange }
                        /> <label htmlFor={ checkboxId }>Important</label>
                    </p>
                </li>
            );
        }
    });
});
