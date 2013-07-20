import json

from django.views.generic import View

from apps.task.models import Task

from sincewhen.mixins import JSONResponseMixin


class TaskListView(JSONResponseMixin, View):
    def get_objects(self):
        tasks = Task.objects.select_related('TaskActivity').all()
        return tasks

    def get_context_data(self, tasks):
        res = {
            'tasks': []
        }

        for task in tasks:
            res['tasks'].append(task.to_api())

        return res

    def get(self, request, *args, **kwargs):
        self.request = request
        tasks = self.get_objects()

        return self.render_to_response(self.get_context_data(tasks))


class TaskView(JSONResponseMixin, View):
    def get_object(self):
        return Task.objects.get(pk=self.task_id)

    def get_context_data(self, task):
        res = task.to_api()

        res['activities'] = []
        for activity in task.taskactivity_set.all():
            res['activities'].append(activity.to_api())

        return res

    def get(self, request, task_id, *args, **kwargs):
        self.request = request
        self.task_id = task_id

        task = self.get_object()
        return self.render_to_response(self.get_context_data(task))