from typing import Any

from fastapi import APIRouter, HTTPException, status

from src.api.deps import CurrentUser, SessionDep
from src.models.users import UserPublic, UserLogin, UserRegister
from src.crud import users

router = APIRouter(prefix="/users", tags=["users"])


@router.get("/me", response_model=UserPublic)
def read_user_me(current_user: CurrentUser) -> Any:
    return UserPublic(**current_user.model_dump())


@router.post(
    "/", response_model=UserPublic
)
def create_user(*, session: SessionDep, user_in: UserRegister) -> Any:
    user = users.get_user_by_email(session=session, email=user_in.email)
    if user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="The user with this email already exists in the system.",
        )

    user = users.create_user(session=session, user_register=user_in)

    return user
