define(['ember', 'text!tasks/templates/tasks.handlebars', 'tasks/route', 'tasks/taskModel'], function(Ember, tasksTemplate, route, TaskModel) {
    Ember.TEMPLATES['tasks'] = Ember.Handlebars.compile(tasksTemplate);

    return {
        Task: TaskModel,
        TasksRoute: route
    };
});
