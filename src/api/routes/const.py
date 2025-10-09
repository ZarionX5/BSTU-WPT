from fastapi import APIRouter

from src.crud.const import get_int_limits

router = APIRouter(prefix="/const", tags=["constants"])


@router.get("/raw", response_model=dict)
def all_raw_constants():
    return get_int_limits()
