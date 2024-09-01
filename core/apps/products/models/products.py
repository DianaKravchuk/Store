from django.db import models

from core.apps.common.models import TimedBaseModel
from core.apps.products.entities.products import Product as ProductEntity


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
        default=True,
        verbose_name="Is the product visible in the catalog?",
    )

    def to_entity(self) -> ProductEntity:
        return ProductEntity(
            id=self.pk,
            title=self.title,
            description=self.description,
            created_at=self.created_at,
            updated_at=self.updated_at,
        )

    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name = "Product"
        verbose_name_plural = "Products"
