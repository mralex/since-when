from django.conf.urls import patterns, include, url
from apps.client.views import ClientView

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'sincewhen.views.home', name='home'),
    # url(r'^sincewhen/', include('sincewhen.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),

    url(r'^$', ClientView.as_view()),
    url(r'^api/tasks/?', include('apps.tasks.urls')),
)
