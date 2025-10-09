from typing import Optional

from src.models.converter import CalcSystemsModel


def to_other_calc_system(num: int, from_: CalcSystemsModel ='dec', to_: CalcSystemsModel='dec') -> int:
    def cs_str_to_int(calc_system) -> int:
        if calc_system == 'bin':
            return 2
        elif calc_system == 'oct':
            return 8
        elif calc_system == 'dec':
            return 10
        elif calc_system == 'hex':
            return 16

    f = cs_str_to_int(from_.calc_system)
    t = cs_str_to_int(to_.calc_system)

    return int(int(num, f), t)


class AsciiConverter():
    all_ascii_chars = {chr(i): i for i in range(128)}
    all_ascii_chars_reverse = {i: chr(i) for i in range(128)}

    @staticmethod
    def get_ascii_and_code_table() -> dict:
        return AsciiConverter.all_ascii_chars.copy()

    @staticmethod
    def get_code_and_ascii_table() -> dict:
        return AsciiConverter.all_ascii_chars_reverse.copy()

    @staticmethod
    def ascii_to_code(char: str, calc_system: CalcSystemsModel = 'dec') -> int:
        return to_other_calc_system(
            AsciiConverter.all_ascii_chars_reverse[char.char],
            'dec',
            calc_system)

    @staticmethod
    def code_to_ascii(char_code: int, calc_system: CalcSystemsModel = 'dec') -> str:
        return AsciiConverter.all_ascii_chars[
            to_other_calc_system(char_code,
                                 'dec',
                                 calc_system)]

    @staticmethod
    def ascii_text_to_code(text: str, sep:str=' ', prefix:Optional[str] = None) -> tuple[int]:
        seq = []
        for char in text:
            if ord(char) < 128:
                seq.append(f'{prefix}{AsciiConverter.all_ascii_chars[char]}')
            else:
                raise ValueError("String have not ascii chars")

        return sep.join(seq)
