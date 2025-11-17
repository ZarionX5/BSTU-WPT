from typing import Any
import logging
import random

from fastapi import APIRouter, HTTPException, status

from src.models import UUID, User
from src.models import (
    TrackingObject,
    TrackingObjectPublic,
    TrackingObjectsPublic,
    TrackingObjectCreate,
    TrackingObjectUpdate,
)
from src.api.deps import SessionDep, CurrentUser
from src.crud.monitoring import (
    create_tracking_object,
    read_tracking_object_by_id,
    update_tracking_object,
    delate_tracking_object,
    read_tracking_objects,
)


logger = logging.getLogger(__name__)
router = APIRouter(prefix="/monitoring", tags=["monitoring"])


@router.post("/object", response_model=TrackingObjectPublic)
def create_object(session: SessionDep, current_user: CurrentUser, object_in: TrackingObjectCreate) -> Any:


    return TrackingObjectPublic(
        **create_tracking_object(session=session, object_in=object_in, current_user=current_user).model_dump()
        )


@router.get("/object/{id}", response_model=TrackingObjectPublic)
def read_object(session: SessionDep, current_user: CurrentUser, id: UUID) -> Any:
    res = read_tracking_object_by_id(session=session, tracking_object_id=id)

    if res is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Object not found"
        )

    if res.owner_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, detail="Not permission"
        )

    return TrackingObjectPublic(
        **res.model_dump()
        )


@router.put("/object/{id}", response_model=TrackingObjectPublic)
def update_object(
    session: SessionDep, current_user: CurrentUser, id: UUID, object_in: TrackingObjectUpdate
) -> Any:
    res = read_tracking_object_by_id(session=session, tracking_object_id=id)

    if res is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Object not found"
        )
    if res.owner_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, detail="Not permission"
        )

    res = update_tracking_object(
        session=session, tracking_object=res, tracking_object_update=object_in
    )

    return TrackingObjectPublic(
        **res.model_dump()
        )


@router.delete("/object/{id}", response_model=TrackingObjectPublic)
def delete_object(session: SessionDep, current_user: CurrentUser, id: UUID) -> Any:
    res = read_tracking_object_by_id(session=session, tracking_object_id=id)

    if res is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Object not found"
        )
    if res.owner_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, detail="Not permission"
        )
    res = delate_tracking_object(session=session, tracking_object=res)

    return TrackingObjectPublic(
        **res.model_dump()
        )


@router.get("/objects", response_model=TrackingObjectsPublic)
def read_objects(session: SessionDep, current_user: CurrentUser, skip: int = 0, limit: int = 100) -> Any:
    res = read_tracking_objects(
        session=session, user=current_user, skip=skip, limit=limit
    )

    return res
