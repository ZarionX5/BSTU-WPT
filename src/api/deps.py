
from typing import Annotated

import random # FIX

from fastapi import Depends

from src.models.users import User

users_list = ['Vasya', 'Petya', 'Temofey', 'Vova']

def get_current_user() -> User:
    user_ch = random.randint(0, len(users_list)-1)

    user = User(
        hashed_password="password",
        name=users_list[user_ch],
        email=f"{users_list[user_ch].lower()}@{random.choice(('mail', 'gmail', 'bk', 'smail'))}.{random.choice(('ru', 'com', 'net', 'en'))}"
    )

    return user

CurrentUser = Annotated[User, Depends(get_current_user)]
