
from src.models.users import UserPublic

from pydantic import EmailStr


def get_user_by_email(email: EmailStr) -> UserPublic:
    user = UserPublic()

    return user
