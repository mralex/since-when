from rest_framework import serializers

from apps.tasks.models import (
    Task,
    TaskActivity,
)


class TaskActivitySerializer(serializers.ModelSerializer):
    api_url = serializers.SerializerMethodField('get_api_url')

    class Meta:
        model = TaskActivity
        fields = (
            'id',
            'recorded',
            'notes',
            'status',
            'task',
            'created',
            'updated',
        )
        read_only_fields = ('id', 'task', 'created')

    def get_api_url(self, obj):
        return '#/task/%s/activities/%s' % (obj.task.id, obj.id)


class TaskSerializer(serializers.ModelSerializer):
    api_url = serializers.SerializerMethodField('get_api_url')
    activities = TaskActivitySerializer()

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
            'activities',
        )
        read_only_fields = ('id', 'created')

    def get_api_url(self, obj):
        return '#/task/%s' % obj.id
