from typing import Optional
from enum import Enum

from pydantic import BaseModel, Field

from pydantic_extra_types.coordinate import Coordinate


from src.models.base import Id, IdAuto, Name, Description, Signal


class IconsObject(str, Enum):
    object = '/src/object'
    person = '/src/person'
    bike = '/src/bike'
    scooter = '/src/scooter'
    bus = '/src/bus'
    car = '/src/car'
    tractor = '/src/tractor'
    harvester = '/src/harvester'
    airplane = '/src/airplane'

class IconObject(BaseModel):
    icon_object: IconsObject = IconsObject.object


class TrackingObjectBase(IconObject, Description, Name):
    pass

class TrackingObjectCreate(TrackingObjectBase):
    pass

class TrackingObjectUpdate(TrackingObjectBase):
    pass


class TrackingObjectPublic(Signal, TrackingObjectBase, Id):
    position: Optional[Coordinate] = Field(default=None)

class TrackingObjectsPublic(BaseModel):
    data: list[TrackingObjectPublic]
    count: int

class TrackingObject(Signal, TrackingObjectBase, IdAuto):
    pass

