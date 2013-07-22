
from django.views.generic.base import TemplateView


class ClientView(TemplateView):
    template_name = 'index.html'
