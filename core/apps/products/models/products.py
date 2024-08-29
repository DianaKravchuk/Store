from django.db import models

from core.apps.common.models import TimedBaseModel


class Product(TimedBaseModel):
    title = models.CharField(
        max_length=255,
        verbose_name="Product name",
    )
    description = models.TextField(
        blank=True,
        verbose_name="Description of product",
    )
    is_visible = models.BooleanField(
        default=True, verbose_name="Is the product visible in the catalog?"
    )

    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name = "Product"
        verbose_name_plural = "Products"
