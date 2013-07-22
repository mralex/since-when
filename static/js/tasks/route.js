define(['ember', 'app'], function(Ember, App) {
    return Ember.Route.extend({
        model: function() {
            return App.Task.find();
        }
    });
});
