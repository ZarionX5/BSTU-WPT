from pydantic import BaseModel

from src.models.base import Id, IdAuto, Name, Description, Email


class UserBase(Description, Email, Name):
    is_active: bool = True
    is_superuser: bool = False

class UserPublic(UserBase, Id):
    pass

class User(UserBase, IdAuto):
    hashed_password: str

class UsersPublic(BaseModel):
    data: list[UserPublic]
    count: int
