from typing import Optional
from enum import Enum

from src.models.base import BaseModel, Field, Relationship


from src.core.types import Longitude, Latitude

from src.models.base import Id, IdPK, Name, Description, Signal, Position


class IconsObject(str, Enum):
    object = "/src/object"
    person = "/src/person"
    bike = "/src/bike"
    scooter = "/src/scooter"
    bus = "/src/bus"
    car = "/src/car"
    tractor = "/src/tractor"
    harvester = "/src/harvester"
    airplane = "/src/airplane"


class IconObject(BaseModel):
    icon_object: IconsObject = IconsObject.object


class TrackingObjectBase(IconObject, Description, Name):
    pass


class TrackingObjectCreate(TrackingObjectBase):
    pass


class TrackingObjectUpdate(TrackingObjectBase):
    pass


class TrackingObjectPublic(Position, Signal, TrackingObjectBase, Id):
    pass


class TrackingObjectsPublic(BaseModel):
    data: list[TrackingObjectPublic]
    count: int
