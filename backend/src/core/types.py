from typing import Annotated
from uuid import UUID

from pydantic_extra_types.coordinate import Longitude, Latitude
from pydantic import Field, EmailStr as _EmailStr

Percentage = Annotated[float, Field(ge=0, le=100)]
EmailStr = Annotated[_EmailStr, Field(max_length=255)]
NameStr = Annotated[str, Field(min_length=1, max_length=255)]
DescriptionStr = Annotated[str, Field(max_length=255)]
PasswordStr = Annotated[str, Field(min_length=8, max_length=255)]
HashedStr = Annotated[str, Field(min_length=8)]
