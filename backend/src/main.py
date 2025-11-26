from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import Session

from src.api.main import api_router
from src.core.config import settings
from src.core.database import engine, init_db


app = FastAPI(
    title=settings.PROJECT_NAME, openapi_url=f"{settings.API_V1_STR}/openapi.json"
)
app.include_router(api_router, prefix=settings.API_V1_STR)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=["*"],
)

try:
    with Session(engine) as session:
        init_db(session)
except Exception as e:
    raise e

if __name__ == "__main__":
    pass
