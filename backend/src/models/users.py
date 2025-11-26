from typing import Optional

from src.models.base import BaseModel, Field, Relationship

from src.core.types import PasswordStr, UUID
from src.models.base import (
    Id,
    IdPK,
    Name,
    Description,
    Email,
    Password,
    HashedPassword,
)


class UserBase(Description, Email, Name):
    is_active: bool = True
    is_superuser: bool = False


class UserCreate(Password, UserBase):
    pass


class UserLogin(Password, Email):
    pass


class UserRegister(Name, UserLogin):
    pass


class UserUpdate(Password, UserBase):
    password: Optional[PasswordStr] = Field(default=None)


class UserDelete(Id):
    pass


class UserPublic(UserBase, Id):
    pass


class UsersPublic(BaseModel):
    data: list[UserPublic]
    count: int
