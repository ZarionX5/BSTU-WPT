from typing import Any

from fastapi import APIRouter

from src.api.deps import CurrentUser
from src.models.users import UserPublic


router = APIRouter(prefix="/users", tags=["users"])

@router.get("/me", response_model=UserPublic)
def read_user_me(current_user: CurrentUser) -> Any:
    return current_user
