from rest_framework import serializers

from apps.tasks.models import Task


class TaskSerializer(serializers.HyperlinkedModelSerializer):
    api_url = serializers.SerializerMethodField('get_api_url')

    class Meta:
        model = Task
        fields = (
            u'id',
            u'name',
            u'description',
            u'important',
            u'status',
            u'created',
            u'updated',
        )
        read_only_fields = ('id', 'created')

    def get_api_url(self, obj):
        return '#/task/%s' % obj.id
