from django.conf.urls import patterns, include, url
from . import views


urlpatterns = patterns('',
        url(r'^$', views.TaskListView.as_view()),
        url(r'^(?P<task_id>\d+)/$', views.TaskView.as_view()),
)
