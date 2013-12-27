define(function(require) {
    'use strict';
    var Backbone = require('backbone'),
        Router = require('router');

    return {
        start: function() {
            this.router = new Router();
            Backbone.history.start();
        }
    };
});
