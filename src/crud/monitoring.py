from typing import Optional
import random

from sqlmodel import Session, func, select

from src.models import (
    User,
    TrackingObject,
    TrackingObjectCreate,
    TrackingObjectUpdate,
    TrackingObjectsPublic,
)
from src.core.types import UUID, Latitude, Longitude

from src.api.deps import CurrentUser

def create_tracking_object(
    *, session: Session,
    object_in: TrackingObjectCreate,
    current_user: CurrentUser
) -> TrackingObject:
    db_obj = TrackingObject.model_validate(object_in.model_dump(), update={
        "owner_id": current_user.id,
        "signal": random.randint(0, 100),
        "position_lat": random.randint(-90, 90),
        "position_lon": random.randint(-180, 180),
        })

    session.add(db_obj)
    session.commit()
    session.refresh(db_obj)

    return db_obj


def read_tracking_object_by_id(
    *, session: Session, tracking_object_id: UUID
) -> Optional[TrackingObject]:
    db_obj = session.get(TrackingObject, tracking_object_id)

    return db_obj


def update_tracking_object(
    *,
    session: Session,
    tracking_object: TrackingObject,
    tracking_object_update: TrackingObjectUpdate,
) -> Optional[TrackingObject]:
    data = tracking_object_update.model_dump(exclude_unset=True)

    tracking_object.sqlmodel_update(data)
    session.add(tracking_object)
    session.commit()
    session.refresh(tracking_object)

    return tracking_object


def delate_tracking_object(
    *, session: Session, tracking_object: TrackingObject
) -> Optional[TrackingObject]:
    session.delete(tracking_object)
    session.commit()

    return tracking_object


def read_tracking_objects(
    *, session: Session, user: User, skip: int, limit: int
) -> TrackingObjectsPublic:
    count_statement = (
            select(func.count())
            .select_from(TrackingObject)
            .where(TrackingObject.owner_id == user.id)
        )
    count = session.exec(count_statement).one()

    statement = (
            select(TrackingObject)
            .where(TrackingObject.owner_id == user.id)
            .offset(skip)
            .limit(limit)
        )
    data = session.exec(statement).all()

    return TrackingObjectsPublic(data=data, count=count)
