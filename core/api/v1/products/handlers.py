from django.http import HttpRequest
from ninja import (
    Query,
    Router,
)

from core.api.filters import PaginationIn
from core.api.schemas import (
    APIResponse,
    ListPaginationResponse,
    PaginationOut,
)
from core.api.v1.products.filters import ProductFilters
from core.api.v1.products.schemas import ProductSchema
from core.apps.products.services.products import (
    BaseProductService,
    ORMProductService,
)


router = Router(tags=["Products"])


@router.get("", response=APIResponse[ListPaginationResponse[ProductSchema]])
def get_product_list_handler(
    request: HttpRequest,
    filters: Query[ProductFilters],
    pagination_in: Query[PaginationIn],
) -> APIResponse[ListPaginationResponse[ProductSchema]]:

    service: BaseProductService = ORMProductService()
    product_list = service.get_product_list(
        filters=filters,
        pagination=pagination_in,
    )
    product_count = service.get_product_count(filters=filters)

    items = [ProductSchema.from_entity(obj) for obj in product_list]
    pagination_out = PaginationOut(
        offset=pagination_in.offset,
        limit=pagination_in.limit,
        total=product_count,
    )

    return APIResponse(
        data=ListPaginationResponse(
            items=items,
            pagination=pagination_out,
        ),
    )
