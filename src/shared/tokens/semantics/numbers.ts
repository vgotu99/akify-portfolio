import { defineSemanticTokens } from '@pandacss/dev';
import { numbers } from '@/src/shared/tokens/primitives/numbers';

export const semanticNumberTokens = defineSemanticTokens({
  radii: {
    none: { value: numbers[0] },
    sm: { value: numbers[4] },
    md: { value: numbers[8] },
    lg: { value: numbers[12] },
    xl: { value: numbers[16] },
    xl2: { value: numbers[24] },
    full: { value: numbers.max },
  },

  borderWidths: {
    none: { value: numbers[0] },
    hairline: { value: numbers.decimal['033'] },
    xlight: { value: numbers[1] },
    light: { value: numbers.decimal[133] },
    medium: { value: numbers.decimal[150] },
    bold: { value: numbers[2] },
    xbold: { value: numbers[4] },
  },

  spacing: {
    none: { value: numbers[0] },
    4: { value: numbers[4] },
    8: { value: numbers[8] },
    12: { value: numbers[12] },
    16: { value: numbers[16] },
    18: { value: numbers[18] },
    20: { value: numbers[20] },
    22: { value: numbers[22] },
    24: { value: numbers[24] },
    32: { value: numbers[32] },
    34: { value: numbers[34] },
    36: { value: numbers[36] },
    40: { value: numbers[40] },
    44: { value: numbers[44] },
    48: { value: numbers[48] },

    1: { value: numbers[1] },
    2: { value: numbers[2] },
    3: { value: numbers[3] },
    5: { value: numbers[5] },
    6: { value: numbers[6] },
    7: { value: numbers[7] },
    10: { value: numbers[10] },
    14: { value: numbers[14] },
    28: { value: numbers[28] },
    56: { value: numbers[56] },
    64: { value: numbers[64] },
    120: { value: numbers[120] },
    156: { value: numbers[156] },
  },
});

export const semanticBreakpoints = {
  desktop: numbers.breakpoints.desktop,
  tablet: numbers.breakpoints.tablet,
};
