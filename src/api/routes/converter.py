from fastapi import APIRouter

from src.models.converter import AsciiTextToCodeModel, AsciiToCodeModel, CodeToAsciiModel
from src.crud.converter import AsciiConverter

router = APIRouter(prefix="/converter", tags=["converter"])

@router.post("/ascii-to-code", response_model=dict)
def ascii_to_code(body: AsciiToCodeModel):
    return {'code': AsciiConverter.ascii_to_code(body)}

@router.post("/code-to-ascii", response_model=dict)
def code_to_ascii(body: CodeToAsciiModel):
    return {'char': AsciiConverter.code_to_ascii(body)}

@router.post("/ascii-text-to-code", response_model=dict)
def ascii_text_to_code(body: AsciiTextToCodeModel):
    return {'code_array': AsciiConverter.ascii_text_to_code(body)}
