define(['ember'], function(Ember) {
    var router = Ember.Router.extend();

    router.map(function () {
        this.resource('tasks');
    });

    return router;
});
