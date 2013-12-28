from django.conf.urls import patterns, include, url

from rest_framework.urlpatterns import format_suffix_patterns

from apps.tasks import views


urlpatterns = patterns(
    '',
    url(r'^$', views.TaskListView.as_view()),
    url(r'^(?P<pk>\d+)/$', views.TaskView.as_view()),
    url(r'^(?P<pk>\d+)/activities/$', views.TaskActivityListView.as_view()),
    url(r'^(?P<task_pk>\d+)/activities/(?P<pk>\d+)/$', views.TaskActivityView.as_view()),
)

urlpatterns = format_suffix_patterns(urlpatterns)
