from pydantic import BaseModel, computed_field


class IntConstantsModel(BaseModel):
    CHAR_BIT: int = 8 * 1

    SHORT_INT_BIT: int = 8 * 2
    INT_BIT: int = 8 * 4
    LONG_INT_BIT: int = 8 * 6
    LONG_LONG_INT_BIT: int = 8 * 8


class FloatConstantsModel(BaseModel):
    FLOAT_BIT: int = 8 * 4
    DOUBLE_BIT: int = 8 * 8
    LONG_DOUBLE_BIT: int = 8 * 10


class ConstantsModel(IntConstantsModel, FloatConstantsModel):
    pass


class IntLimitsModel(IntConstantsModel):
    @computed_field
    @property
    def SIGNED_CHAR_MAX(self) -> int:
        return (2 ** (self.CHAR_BIT - 1)) - 1

    @computed_field
    @property
    def SIGNED_CHAR_MIN(self) -> int:
        return -(2 ** (self.CHAR_BIT - 1))

    @computed_field
    @property
    def UNSIGNED_CHAR_MAX(self) -> int:
        return (2 ** (self.CHAR_BIT)) - 1

    @computed_field
    @property
    def UNSIGNED_CHAR_MIN(self) -> int:
        return 0

    @computed_field
    @property
    def SIGNED_SHORT_INT_MAX(self) -> int:
        return (2 ** (self.SHORT_INT_BIT - 1)) - 1

    @computed_field
    @property
    def SIGNED_SHORT_INT_MIN(self) -> int:
        return -(2 ** (self.SHORT_INT_BIT - 1))

    @computed_field
    @property
    def UNSIGNED_SHORT_INT_MAX(self) -> int:
        return (2 ** (self.SHORT_INT_BIT)) - 1

    @computed_field
    @property
    def UNSIGNED_SHORT_INT_MIN(self) -> int:
        return 0

    @computed_field
    @property
    def SIGNED_INT_MAX(self) -> int:
        return (2 ** (self.INT_BIT - 1)) - 1

    @computed_field
    @property
    def SIGNED_INT_MIN(self) -> int:
        return -(2 ** (self.INT_BIT - 1))

    @computed_field
    @property
    def UNSIGNED_INT_MAX(self) -> int:
        return (2 ** (self.INT_BIT)) - 1

    @computed_field
    @property
    def UNSIGNED_INT_MIN(self) -> int:
        return 0

    @computed_field
    @property
    def SIGNED_LONG_INT_MAX(self) -> int:
        return (2 ** (self.LONG_INT_BIT - 1)) - 1

    @computed_field
    @property
    def SIGNED_LONG_INT_MIN(self) -> int:
        return -(2 ** (self.LONG_INT_BIT - 1))

    @computed_field
    @property
    def UNSIGNED_LONG_INT_MAX(self) -> int:
        return (2 ** (self.LONG_INT_BIT)) - 1

    @computed_field
    @property
    def UNSIGNED_LONG_INT_MIN(self) -> int:
        return 0

    @computed_field
    @property
    def SIGNED_LONG_LONG_INT_MAX(self) -> int:
        return (2 ** (self.LONG_LONG_INT_BIT - 1)) - 1

    @computed_field
    @property
    def SIGNED_LONG_LONG_INT_MIN(self) -> int:
        return -(2 ** (self.LONG_LONG_INT_BIT - 1))

    @computed_field
    @property
    def UNSIGNED_LONG_LONG_INT_MAX(self) -> int:
        return (2 ** (self.LONG_LONG_INT_BIT)) - 1

    @computed_field
    @property
    def UNSIGNED_LONG_LONG_INT_MIN(self) -> int:
        return 0
