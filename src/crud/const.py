from typing import Union

from src.models.const import IntLimitsModel


def num_to_readable(num: Union[int, float], sep: str = ".") -> str:
    if isinstance(num, int):
        return num
    else:
        return num


def get_capacity_by_bits(bits: int) -> int:
    return 2**bits


def get_int_range_by_bits(
    bits: int, is_signed: bool = True, shift: int = 0
) -> tuple[str, str]:
    if is_signed:
        start = -(2 ** (bits - 1))
        end = 2 ** (bits - 1)
    else:
        start = 0
        end = 2**bits

    start = num_to_readable(start + shift)
    end = num_to_readable(end + shift - 1)

    return (start, end)


def get_int_limits() -> IntLimitsModel:
    lim = IntLimitsModel()
    return lim.model_dump()
