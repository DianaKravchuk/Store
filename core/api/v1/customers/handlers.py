from django.http import HttpRequest
from ninja import Router
from ninja.errors import HttpError

from core.api.schemas import APIResponse
from core.api.v1.customers.schemas import (
    AuthInSchema,
    AuthOutSchema,
    TokenInSchema,
    TokenOutSchema,
)
from core.apps.common.exceptions import ServiceException
from core.apps.customers.services.auth import BaseAuthService
from core.project.containers import get_container


router = Router(tags=["Customers"])


@router.post(
    "auth",
    response=APIResponse[AuthOutSchema],
    operation_id="authorize",
)
def auth_handler(
    request: HttpRequest,
    schema: AuthInSchema,
) -> APIResponse[AuthOutSchema]:

    container = get_container()
    service: BaseAuthService = container.resolve(BaseAuthService)

    service.authorize(schema.phone)
    return APIResponse(
        data=AuthOutSchema(message=f"Code is sent to: {schema.phone}"),
    )


@router.post(
    "confirm",
    response=APIResponse[TokenOutSchema],
    operation_id="confirmCode",
)
def get_token_handler(
    request: HttpRequest,
    schema: TokenInSchema,
) -> APIResponse[TokenOutSchema]:
    container = get_container()
    service: BaseAuthService = container.resolve(BaseAuthService)

    try:
        token = service.confirm(schema.code, schema.phone)
    except ServiceException as exception:
        raise HttpError(
            status_code=400,
            message=exception.message,
        ) from exception
    return APIResponse(
        data=TokenOutSchema(token=token),
    )
