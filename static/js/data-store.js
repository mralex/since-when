define(['ember-data'], function(DS) {
    var adapter = DS.RESTAdapter.extend({
        url: '/api'
    });
    return DS.Store.extend({
        revision: 12,
        adapter: adapter,
        url: '/api'
    });
});
