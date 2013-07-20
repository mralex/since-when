from django.db import models


class Task(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    important = models.BooleanField()
    status = models.SmallIntegerField()
    created = models.DateTimeField()
    updated = models.DateTimeField()

    def to_api(self):
        api = {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'important': self.important,
            'status': self.status,
            'activity_count': self.taskactivity_set.count(),
        }

        return api


class TaskActivity(models.Model):
    task = models.ForeignKey('Task')
    recorded = models.DateTimeField()
    notes = models.TextField()
    status = models.SmallIntegerField()
    created = models.DateTimeField()
    updated = models.DateTimeField()

    def to_apo(self):
        return {
            'id': self.id,
            'recorded': self.recorded,
            'notes': self.notes,
            'status': self.status,
        }
