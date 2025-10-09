from fastapi import APIRouter

from src.api.routes import const

api_router = APIRouter(prefix="/utils", tags=["utils"])
api_router.include_router(const.router)
