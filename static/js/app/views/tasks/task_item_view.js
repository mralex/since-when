/**
 * @jsx React.DOM
 */
define(function(require) {
    'use strict';

    var $ = require('jquery'),
        Backbone = require('backbone'),
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

        handleTaskClicked: function(e) {
            e.preventDefault();
            Backbone.history.navigate('/tasks/' + this.state.task.get('id'), { trigger: true });
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
                <div className={ className }>
                    <h3>
                        <a href="#" onClick={ this.handleTaskClicked }>
                            { this.state.task.get('name') }
                        </a>
                    </h3>
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
                    <p>
                        <span className="taskCount">{ this.state.task.get('activities').length } instances</span>
                    </p>
                </div>
            );
        }
    });
});
