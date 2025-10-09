from typing import Literal

from pydantic import BaseModel, field_validator


class CharModel(BaseModel):
    char: str

    @field_validator("char")
    def check_single_char(cls, v):
        if len(v) != 1:
            raise ValueError("The character length must be equal to one")
        return v


class CalcSystemsModel(BaseModel):
    calc_system: Literal['bin', 'oct', 'dec', 'hex']
