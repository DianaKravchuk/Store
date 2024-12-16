from django.db import models
from django.contrib.auth.models import AbstractUser
from users.enums import Role


class User(AbstractUser):
    role = models.CharField(
        max_length=50,
        choices=[(role.value, role.value) for role in Role],
        default=Role.User.value
    )
    is_active = models.BooleanField(default=False)

    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = ['email']

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

    def __str__(self):
        return f"User: {self.username}"
