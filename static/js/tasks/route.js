define(['ember'], function(Ember) {
    return Ember.Route.extend({
        model: function() {
            return $.get('/api/tasks').pipe(function(response) {
                return response.tasks;
            });
        }
    });
});
