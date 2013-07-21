from django.http import Http404
from django.views.generic.detail import BaseDetailView
from django.views.generic.list import BaseListView

from sincewhen.mixins import JSONResponseMixin

from apps.task.models import Task


class TaskListView(JSONResponseMixin, BaseListView):
    def get_queryset(self):
        return Task.objects.select_related('TaskActivity').all()

    def get_context_data(self, **kwargs):
        res = {
            'tasks': []
        }

        for task in self.object_list:
            res['tasks'].append(task.to_api())

        return res


class TaskView(JSONResponseMixin, BaseDetailView):
    def get_object(self):
        try:
            task = Task.objects.get(pk=self.kwargs.get('task_id'))
        except Task.DoesNotExist:
            raise Http404()

        return task

    def get_context_data(self, **kwargs):
        res = self.object.to_api()

        res['activities'] = []
        for activity in self.object.taskactivity_set.all():
            res['activities'].append(activity.to_api())

        return res
