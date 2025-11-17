from fastapi import APIRouter

from src.api.routes import login, users, monitoring

api_router = APIRouter()
api_router.include_router(login.router)
api_router.include_router(users.router)
api_router.include_router(monitoring.router)
