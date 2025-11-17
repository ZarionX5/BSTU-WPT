from typing import Optional
from uuid import uuid4 as uuid_factory

from sqlmodel import SQLModel as BaseModel, Field, Relationship

from src.core.types import (
    UUID,
    Latitude,
    Longitude,
    NameStr,
    DescriptionStr,
    EmailStr,
    PasswordStr,
    HashedStr,
    Percentage,
)


class Id(BaseModel):
    id: UUID


class IdAuto(BaseModel):
    id: UUID = Field(default_factory=uuid_factory)


class IdPK(BaseModel):
    id: UUID = Field(default_factory=uuid_factory, primary_key=True)


class Name(BaseModel):
    name: NameStr


class Description(BaseModel):
    description: DescriptionStr


class Email(BaseModel):
    email: EmailStr


class Password(BaseModel):
    password: PasswordStr


class HashedPassword(BaseModel):
    hashed_password: HashedStr


class Signal(BaseModel):
    signal: Percentage


class Position(BaseModel):
    position_lat: Optional[Latitude]
    position_lon: Optional[Longitude]
