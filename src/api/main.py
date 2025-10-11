from fastapi import APIRouter

from src.api.routes import const, converter

api_router = APIRouter(prefix="/utils", tags=["utils"])
api_router.include_router(const.router)
api_router.include_router(converter.router)
