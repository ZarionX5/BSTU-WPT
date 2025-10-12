from typing import Annotated
from uuid import UUID, uuid4 as uuid_factory

from pydantic import BaseModel, Field
from pydantic import EmailStr
from annotated_types import Le

class Id(BaseModel):
    id: UUID

class IdAuto(BaseModel):
    id: UUID = Field(default_factory=uuid_factory)

class Name(BaseModel):
    name: str = Field(min_length=1, max_length=255)

class Description(BaseModel):
    description: str = Field(default="", max_length=255)

class Email(BaseModel):
    email: EmailStr = Field(max_length=255)

Percentage = Annotated[float, Field(ge=0, le=100)]
class Signal(BaseModel):
    signal: Percentage

