from typing import Any
import logging

from fastapi import APIRouter

logger = logging.getLogger(__name__)
from src.models.base import uuid_factory, UUID, Id
from src.models.monitoring import (TrackingObjectPublic,
                                   TrackingObjectsPublic,
                                   IconsObject, Coordinate,
                                   TrackingObjectCreate,
                                   TrackingObjectUpdate)


router = APIRouter(prefix="/monitoring", tags=["monitoring"])

@router.post("/object", response_model=TrackingObjectPublic)
def create_object(object_in: TrackingObjectCreate) -> Any:
    import random # FIX
    return TrackingObjectPublic(
        name=object_in.name,
        icon_object=object_in.icon_object,
        signal=random.random() * 100,
        position=Coordinate(latitude=42.1,
                            longitude=42.1),
        id=uuid_factory()
    )

@router.get("/object/{id}", response_model=TrackingObjectPublic)
def read_object(id: UUID) -> Any:
    import random # FIX
    names = ('bike', 'car', 'bus', 'airplane')
    ico = (IconsObject.bike, IconsObject.car, IconsObject.bus, IconsObject.airplane)
    i = random.randint(0, len(names)-1)
    return TrackingObjectPublic(
        name=names[i],
        icon_object=ico[i],
        signal=random.random() * 100,
        position=Coordinate(latitude=42.1,
                            longitude=42.1),
        id=id
    )

@router.put("/object/{id}", response_model=TrackingObjectPublic)
def update_object(id: UUID, object_in: TrackingObjectUpdate) -> Any:
    import random # FIX
    names = ('bike', 'car', 'bus', 'airplane')
    ico = (IconsObject.bike, IconsObject.car, IconsObject.bus, IconsObject.airplane)
    i = random.randint(0, len(names)-1)
    obj = TrackingObjectPublic(
        name=names[i],
        icon_object=ico[i],
        signal=random.random() * 100,
        position=Coordinate(latitude=42.1,
                            longitude=42.1),
        id=id
    )
    res = {**obj.model_dump(), **object_in.model_dump()}
    return TrackingObjectPublic(**res)

@router.delete("/object/{id}", response_model=Id)
def delete_object(id: UUID) -> Any:
    return Id(id=id)

@router.get("/objects", response_model=TrackingObjectsPublic)
def read_objects() -> Any:
    import random # FIX
    names = ('bike', 'car', 'bus', 'airplane')
    ico = (IconsObject.bike, IconsObject.car, IconsObject.bus, IconsObject.airplane)
    cnt = 3
    return TrackingObjectsPublic(
        data=[
            TrackingObjectPublic(
                name=f'{names[i]} #{n+1}',
                icon_object=ico[i],
                signal=random.random() * 100,
                position=Coordinate(latitude=42.1+n,
                                    longitude=42.1+n),
                id=uuid_factory()
            ) for n, i in enumerate([random.randint(0, len(names)-1) for _ in range(cnt)])
        ],
        count=cnt
    )
