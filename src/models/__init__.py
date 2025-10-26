from src.models.base import BaseModel as SQLModel
from src.models.monitoring import *
from src.models.users import *


class User(HashedPassword, UserBase, IdPK, table=True):
    __tablename__ = 'users'

    tracking_objects: list['TrackingObject'] = Relationship(back_populates="owner", cascade_delete=True)


class TrackingObject(Position, Signal, TrackingObjectBase, IdPK, table=True):
    position_lat: Optional[Latitude] = Field(default=None)
    position_lon: Optional[Longitude] = Field(default=None)

    owner_id: UUID = Field(
        foreign_key="users.id", nullable=False, ondelete="CASCADE"
    )
    owner: Optional[User] = Relationship(back_populates="tracking_objects")
