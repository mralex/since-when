from django.http import Http404
from django.views.generic.detail import BaseDetailView
from django.views.generic.list import BaseListView

from rest_framework import generics

from sincewhen.mixins import JSONResponseMixin

from apps.tasks.models import Task
from apps.tasks.serializers import TaskSerializer


class TaskListView(generics.ListCreateAPIView):
    model = Task
    serializer_class = TaskSerializer

    # def post(self, request, format=None):
    #     import ipdb ; ipdb.set_trace()
    #     return super(TaskListView, self).post(request, format=None)


class TaskView(generics.RetrieveUpdateDestroyAPIView):
    model = Task
    serializer_class = TaskSerializer

# class TaskView(JSONResponseMixin, BaseDetailView):
#     def get_object(self):
#         try:
#             task = Task.objects.get(pk=self.kwargs.get('task_id'))
#         except Task.DoesNotExist:
#             raise Http404()

#         return task

#     def get_context_data(self, **kwargs):
#         res = self.object.to_api()

#         res['activities'] = []
#         for activity in self.object.taskactivity_set.all():
#             res['activities'].append(activity.to_api())

#         return res
