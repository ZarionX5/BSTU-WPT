from typing import Optional
from enum import Enum

from pydantic import BaseModel, field_validator, Field


class CalcSystems(int, Enum):
    bin = 2
    oct = 8
    dec = 10
    hex = 16

class CharModel(BaseModel):
    char: str

    @field_validator("char")
    def check_single_char(cls, v):
        if len(v) != 1:
            raise ValueError("The character length must be equal to one")
        elif ord(v) >= 128:
            raise ValueError("The character must be ascii char")

        return v

class CharCodeModel(BaseModel):
    code: int = Field(gt=0, le=128)

class CalcSystemsModel(BaseModel):
    calc_system: CalcSystems = CalcSystems.dec

class AsciiTextToCodeModel(CalcSystemsModel):
    text: str
    sep: str = ', '
    prefix: Optional[str] = None

class CodeToAsciiTextModel(CalcSystemsModel):
    text: str
    sep: str = ', '
    prefix: Optional[str] = None

class AsciiToCodeModel(CharModel, CalcSystemsModel):
    pass

class CodeToAsciiModel(CharCodeModel):
    pass
