from django.db import models


class Task(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    important = models.BooleanField()
    status = models.SmallIntegerField()
    created = models.DateTimeField()
    updated = models.DateTimeField()


class TaskActivity(models.Model):
    task = models.OneToOneField('Task')
    recorded = models.DateTimeField()
    notes = models.TextField()
    status = models.SmallIntegerField()
    created = models.DateTimeField()
    updated = models.DateTimeField()
