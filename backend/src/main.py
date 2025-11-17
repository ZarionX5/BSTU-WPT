from fastapi import FastAPI

from src.api.main import api_router
from src.core.config import settings
from src.core.database import init_db


app = FastAPI(
    title=settings.PROJECT_NAME, openapi_url=f"{settings.API_V1_STR}/openapi.json"
)
app.include_router(api_router, prefix=settings.API_V1_STR)


if __name__ == "__main__":
    init_db()
