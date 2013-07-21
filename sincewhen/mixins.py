import json

from django.http import HttpResponse


class JSONResponseMixin(object):

    def render_to_response(self, data, **kwargs):
        # XXX Add a smarter way to serialize JSON
        return HttpResponse(
            json.dumps(data),
            content_type='application/json',
            **kwargs
        )
