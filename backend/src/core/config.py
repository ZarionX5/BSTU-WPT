from typing import Literal

from pydantic_settings import BaseSettings, SettingsConfigDict
from pydantic import computed_field, PostgresDsn
from src.core.types import EmailStr


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env.example",
        env_ignore_empty=True,
        extra="ignore",
    )
    API_V1_STR: str = "/api/v1"
    ENVIRONMENT: Literal["develop", "staging", "production"] = "develop"
    PROJECT_NAME: str

    POSTGRES_SERVER: str
    POSTGRES_PORT: int = 5432
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_DB: str

    @computed_field  # type: ignore[prop-decorator]
    @property
    def SQLALCHEMY_POSTGRES_URI(self) -> PostgresDsn:
        return PostgresDsn.build(
            scheme="postgresql+psycopg2",
            username=self.POSTGRES_USER,
            password=self.POSTGRES_PASSWORD,
            host=self.POSTGRES_SERVER,
            port=self.POSTGRES_PORT,
            path=self.POSTGRES_DB,
        )

    FIRST_SUPERUSER: EmailStr = "admin@admin.ru"
    FIRST_SUPERUSER_PASSWORD: str = "0000"

    JWT_ALGORITHM: str = "HS256"
    JWT_SECRET_KEY: str = "TEST-KEY"
    JWT_ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

settings = Settings()
