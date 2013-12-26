import factory
from . import models


class TaskFactory(factory.Factory):
    FACTORY_FOR = models.Task


class TaskActivityFactory(factory.Factory):
    FACTORY_FOR = models.TaskActivity

