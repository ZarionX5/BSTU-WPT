from sqlmodel import Session, create_engine, select

from src import crud
from src.core.config import settings
from src.models import User, UserCreate

engine = create_engine(str(settings.SQLALCHEMY_POSTGRES_URI), echo=settings.ENVIRONMENT=='develop')


def init_db(session: Session) -> None:
    from sqlmodel import SQLModel

    SQLModel.metadata.create_all(engine)

    user = session.exec(
        select(User).where(User.email == settings.FIRST_SUPERUSER)
    ).first()

    if not user:
        user_in = UserCreate(
            email=settings.FIRST_SUPERUSER,
            password=settings.FIRST_SUPERUSER_PASSWORD,
            is_superuser=True,
        )
        user = crud.create_user(session=session, user_create=user_in)
