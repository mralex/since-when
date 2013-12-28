from django.http import Http404
from django.views.generic.detail import BaseDetailView
from django.views.generic.list import BaseListView

from rest_framework import generics

from sincewhen.mixins import JSONResponseMixin

from apps.tasks.models import (
    Task,
    TaskActivity,
)

from apps.tasks.serializers import (
    TaskSerializer,
    TaskActivitySerializer,
)


class TaskListView(generics.ListCreateAPIView):
    model = Task
    serializer_class = TaskSerializer


class TaskView(generics.RetrieveUpdateDestroyAPIView):
    model = Task
    serializer_class = TaskSerializer


class TaskActivityView(generics.RetrieveAPIView):
    model = TaskActivity
    serializer_class = TaskActivitySerializer

    def get_object(self):
        task_pk = self.kwargs.get('task_pk', None)
        pk = self.kwargs.get(self.pk_url_kwarg, None)

        try:
            task = Task.objects.get(pk=task_pk)
        except Task.DoesNotExist:
            raise Http404()

        try:
            activity = task.taskactivity_set.get(pk=pk)
        except TaskActivity.DoesNotExist:
            raise Http404()

        return activity


class TaskActivityListView(generics.ListCreateAPIView):
    model = TaskActivity
    serializer_class = TaskActivitySerializer

    def get_queryset(self):
        pk = self.kwargs.get(self.pk_url_kwarg, None)

        try:
            activities = Task.objects.get(pk=pk).taskactivity_set.all()
        except Task.DoesNotExist:
            raise Http404()

        return activities

    def get_task_object(self):
        pk = self.kwargs.get(self.pk_url_kwarg, None)

        try:
            task = Task.objects.get(pk=pk)
        except Task.DoesNotExist:
            raise Http404()

        return task

    def pre_save(self, obj):
        obj.task = self.get_task_object()
