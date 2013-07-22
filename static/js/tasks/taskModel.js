define(['ember-data'], function(DS) {
    return DS.Model.extend({
        name: DS.attr('string'),
        description: DS.attr('string'),
        important: DS.attr('boolean'),
        activity_count: DS.attr('number')

    });
});