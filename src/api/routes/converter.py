from fastapi import APIRouter

from src.models.converter import CharModel
from src.crud.converter import AsciiConverter

router = APIRouter(prefix="/converter", tags=["converter"])


@router.get("/ascii-to-code/{char}", response_model=dict)
def all_raw_constants(char: str):
    return {AsciiConverter.ascii_to_code()}
