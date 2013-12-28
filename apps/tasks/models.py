import datetime

from django.db import models


class Task(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    important = models.BooleanField()
    status = models.SmallIntegerField()
    created = models.DateTimeField(default=datetime.datetime.now)
    updated = models.DateTimeField(default=datetime.datetime.now)


class TaskActivity(models.Model):
    task = models.ForeignKey('Task', related_name='activities')
    recorded = models.DateTimeField(
        blank=True,
        default=datetime.datetime.now,
    )
    notes = models.TextField(
        blank=True,
    )
    status = models.SmallIntegerField(
        blank=True,
    )
    created = models.DateTimeField(
        blank=True,
        default=datetime.datetime.now,
    )
    updated = models.DateTimeField(
        blank=True,
        default=datetime.datetime.now,
    )
