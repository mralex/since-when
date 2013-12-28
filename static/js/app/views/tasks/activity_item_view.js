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
            this.setState({ activity: this.props.activity });
        },

        getInitialState: function() {
            return {
                activity: this.props.activity
            };
        },

        render: function() {
            var className = 'activity';

            return (
                <div className={ className }>
                    <p>
                        { this.state.activity.get('notes') }
                    </p>
                    <p>{ this.state.activity.get('recorded') }</p>
                </div>
            );
        }
    });
});
