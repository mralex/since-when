# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'Task'
        db.create_table(u'task_task', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(max_length=255)),
            ('description', self.gf('django.db.models.fields.TextField')()),
            ('important', self.gf('django.db.models.fields.BooleanField')(default=False)),
            ('status', self.gf('django.db.models.fields.SmallIntegerField')()),
            ('created', self.gf('django.db.models.fields.DateTimeField')()),
            ('updated', self.gf('django.db.models.fields.DateTimeField')()),
        ))
        db.send_create_signal(u'task', ['Task'])

        # Adding model 'TaskActivity'
        db.create_table(u'task_taskactivity', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('task', self.gf('django.db.models.fields.related.OneToOneField')(to=orm['task.Task'], unique=True)),
            ('recorded', self.gf('django.db.models.fields.DateTimeField')()),
            ('notes', self.gf('django.db.models.fields.TextField')()),
            ('status', self.gf('django.db.models.fields.SmallIntegerField')()),
            ('created', self.gf('django.db.models.fields.DateTimeField')()),
            ('updated', self.gf('django.db.models.fields.DateTimeField')()),
        ))
        db.send_create_signal(u'task', ['TaskActivity'])


    def backwards(self, orm):
        # Deleting model 'Task'
        db.delete_table(u'task_task')

        # Deleting model 'TaskActivity'
        db.delete_table(u'task_taskactivity')


    models = {
        u'task.task': {
            'Meta': {'object_name': 'Task'},
            'created': ('django.db.models.fields.DateTimeField', [], {}),
            'description': ('django.db.models.fields.TextField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'important': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '255'}),
            'status': ('django.db.models.fields.SmallIntegerField', [], {}),
            'updated': ('django.db.models.fields.DateTimeField', [], {})
        },
        u'task.taskactivity': {
            'Meta': {'object_name': 'TaskActivity'},
            'created': ('django.db.models.fields.DateTimeField', [], {}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'notes': ('django.db.models.fields.TextField', [], {}),
            'recorded': ('django.db.models.fields.DateTimeField', [], {}),
            'status': ('django.db.models.fields.SmallIntegerField', [], {}),
            'task': ('django.db.models.fields.related.OneToOneField', [], {'to': u"orm['task.Task']", 'unique': 'True'}),
            'updated': ('django.db.models.fields.DateTimeField', [], {})
        }
    }

    complete_apps = ['task']