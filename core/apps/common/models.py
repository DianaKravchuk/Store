from django.db import models


class TimedBaseModel(models.Model):
    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="Date of creating",
    )
    updated_at = models.DateTimeField(
        auto_now=True,
        verbose_name="Date of updating",
    )

    class Meta:
        abstract = True
