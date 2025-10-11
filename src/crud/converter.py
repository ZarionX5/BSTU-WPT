from typing import Optional

from src.models.converter import CharModel, CalcSystems, CalcSystemsModel, AsciiTextToCodeModel, AsciiToCodeModel, CodeToAsciiModel


def to_other_calc_system(num: int, from_: CalcSystemsModel, to_: CalcSystemsModel) -> int:
    num = int(f'{num}', from_.calc_system.value)
    if to_.calc_system == CalcSystems.bin:
        return bin(num)[2:]
    elif to_.calc_system == CalcSystems.oct:
        return oct(num)[2:]
    elif to_.calc_system == CalcSystems.hex:
        return hex(num)[2:]
    else:
        return num

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
    def ascii_to_code(args: AsciiToCodeModel) -> int:
        return to_other_calc_system(
            AsciiConverter.all_ascii_chars[args.char],
            CalcSystemsModel(),
            CalcSystemsModel(calc_system=args.calc_system))

    @staticmethod
    def code_to_ascii(args: CodeToAsciiModel) -> str:
        return AsciiConverter.all_ascii_chars_reverse[
            to_other_calc_system(args.code,
                                 CalcSystemsModel(),
                                 CalcSystemsModel())]

    @staticmethod
    def ascii_text_to_code(args: AsciiTextToCodeModel) -> str:
        seq = []
        prefix = args.prefix
        if prefix is None:
            def set_prefix(cs: CalcSystemsModel) -> str:
                if cs.calc_system.name == 'bin':
                    return '0b'
                elif cs.calc_system.name == 'oct':
                    return '0o'
                elif cs.calc_system.name == 'dec':
                    return ''
                elif cs.calc_system.name == 'hex':
                    return '0x'
            prefix = set_prefix(CalcSystemsModel(calc_system=args.calc_system))
        for char in args.text:
            char = CharModel(char=char).char
            ch = to_other_calc_system(
                AsciiConverter.all_ascii_chars[char],
                CalcSystemsModel(),
                CalcSystemsModel(calc_system=args.calc_system)
            )
            seq.append(f'{prefix}{ch}')

        return args.sep.join(seq)

    @staticmethod
    def code_to_ascii_text(args: AsciiTextToCodeModel) -> str:
        seq = []
        prefix = args.prefix
        if prefix is None:
            def set_prefix(cs: CalcSystemsModel) -> str:
                if cs.calc_system.name == 'bin':
                    return '0b'
                elif cs.calc_system.name == 'oct':
                    return '0o'
                elif cs.calc_system.name == 'dec':
                    return ''
                elif cs.calc_system.name == 'hex':
                    return '0x'
            prefix = set_prefix(CalcSystemsModel(calc_system=args.calc_system))
        for char in args.text:
            char = CharModel(char=char).char
            ch = to_other_calc_system(
                AsciiConverter.all_ascii_chars[char],
                CalcSystemsModel(),
                CalcSystemsModel(calc_system=args.calc_system)
            )
            seq.append(f'{prefix}{ch}')

        return args.sep.join(seq)
