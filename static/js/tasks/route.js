define(['ember'], function(Ember) {
    return Ember.Route.extend({
        model: function() {
            return App.Task.find();
        }
    });
});
