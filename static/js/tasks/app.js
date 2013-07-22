define(['ember', 'text!tasks/templates/tasks.handlebars', 'tasks/route'], function(Ember, tasksTemplate, route) {
    Ember.TEMPLATES['tasks'] = Ember.Handlebars.compile(tasksTemplate);

    return {
        TasksRoute: route
    };
});
