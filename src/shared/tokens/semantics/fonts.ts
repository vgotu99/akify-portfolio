import { defineTextStyles } from '@pandacss/dev';
import { fonts } from '@/src/shared/tokens/primitives/fonts';

const semanticDesktopFonts = {
  hero: {
    xlarge: {
      value: {
        fontFamily: fonts.family.poppins,
        fontWeight: fonts.weight.extrabold,
        fontSize: '128px',
        lineHeight: `${128 * 1.2}px`,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
  },
  headline: {
    xlarge: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.bold,
        fontSize: fonts.size['8XL'],
        lineHeight: fonts.lineHeight['8XL'],
        letterSpacing: fonts.size['8XL'] * fonts.letterSpacing.tight,
      },
    },
    mediumEnglish: {
      value: {
        fontFamily: fonts.family.poppins,
        fontWeight: fonts.weight.bold,
        fontSize: fonts.size['5XL'],
        lineHeight: fonts.lineHeight['5XL'],
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    medium: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.bold,
        fontSize: fonts.size['5XL'],
        lineHeight: fonts.lineHeight['5XL'],
        letterSpacing: fonts.letterSpacing.none,
      },
    },
  },

  title: {
    xlargeEnglish: {
      value: {
        fontFamily: fonts.family.poppins,
        fontWeight: fonts.weight.bold,
        fontSize: fonts.size['5XL'],
        lineHeight: fonts.lineHeight['5XL'],
        letterSpacing: fonts.size['5XL'] * fonts.letterSpacing.tight,
      },
    },
    xlarge: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.bold,
        fontSize: fonts.size['5XL'],
        lineHeight: fonts.lineHeight['5XL'],
        letterSpacing: fonts.size['5XL'] * fonts.letterSpacing.tight,
      },
    },
    largeEnglish: {
      value: {
        fontFamily: fonts.family.poppins,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size['4XL'],
        lineHeight: fonts.lineHeight['4XL'],
        letterSpacing: fonts.size['4XL'] * fonts.letterSpacing.tight,
      },
    },
    large: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size['4XL'],
        lineHeight: fonts.lineHeight['4XL'],
        letterSpacing: fonts.size['4XL'] * fonts.letterSpacing.tight,
      },
    },
    mediumEnglish: {
      value: {
        fontFamily: fonts.family.poppins,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size['2XL'],
        lineHeight: fonts.lineHeight['2XL'],
        letterSpacing: fonts.size['2XL'] * fonts.letterSpacing.tight,
      },
    },
    medium: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.bold,
        fontSize: fonts.size['2XL'],
        lineHeight: fonts.lineHeight['2XL'],
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    smallEnglish: {
      value: {
        fontFamily: fonts.family.poppins,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size.XL,
        lineHeight: fonts.lineHeight.XL,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    small: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size.XL,
        lineHeight: fonts.lineHeight.XL,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    smallStrong: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.extrabold,
        fontSize: fonts.size.XL,
        lineHeight: fonts.lineHeight.XL,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
  },

  label: {
    mediumEnglish: {
      value: {
        fontFamily: fonts.family.poppins,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size.LG,
        lineHeight: fonts.lineHeight.LG,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    medium: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size.LG,
        lineHeight: fonts.lineHeight.LG,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    smallEnglish: {
      value: {
        fontFamily: fonts.family.poppins,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size.MD,
        lineHeight: fonts.lineHeight.MD,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    small: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size.MD,
        lineHeight: fonts.lineHeight.MD,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    xsmallEnglish: {
      value: {
        fontFamily: fonts.family.poppins,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size.SM,
        lineHeight: fonts.lineHeight.SM,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    xsmall: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size.SM,
        lineHeight: fonts.lineHeight.SM,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    xxsmallEnglish: {
      value: {
        fontFamily: fonts.family.poppins,
        fontWeight: fonts.weight.medium,
        fontSize: fonts.size.XS,
        lineHeight: fonts.lineHeight.XS,
        letterSpacing: fonts.size.XS * fonts.letterSpacing.tight,
      },
    },
    xxsmall: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.medium,
        fontSize: fonts.size.XS,
        lineHeight: fonts.lineHeight.XS,
        letterSpacing: fonts.size.XS * fonts.letterSpacing.tight,
      },
    },
  },

  body: {
    largeEnglish: {
      value: {
        fontFamily: fonts.family.poppins,
        fontWeight: fonts.weight.regular,
        fontSize: fonts.size.XL,
        lineHeight: fonts.lineHeight.XL,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    large: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.regular,
        fontSize: fonts.size.XL,
        lineHeight: fonts.lineHeight.XL,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    mediumEnglish: {
      value: {
        fontFamily: fonts.family.poppins,
        fontWeight: fonts.weight.regular,
        fontSize: fonts.size.LG,
        lineHeight: fonts.lineHeight.LG,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    medium: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.regular,
        fontSize: fonts.size.LG,
        lineHeight: fonts.lineHeight.LG,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    smallEnglish: {
      value: {
        fontFamily: fonts.family.poppins,
        fontWeight: fonts.weight.regular,
        fontSize: fonts.size.MD,
        lineHeight: fonts.lineHeight.MD,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    small: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.regular,
        fontSize: fonts.size.MD,
        lineHeight: fonts.lineHeight.MD,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    xsmallEnglish: {
      value: {
        fontFamily: fonts.family.poppins,
        fontWeight: fonts.weight.regular,
        fontSize: fonts.size.XS,
        lineHeight: fonts.lineHeight.XS,
        letterSpacing: fonts.size.XS * fonts.letterSpacing.xtight,
      },
    },
    xsmall: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.regular,
        fontSize: fonts.size.XS,
        lineHeight: fonts.lineHeight.XS,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
  },

  caption: {
    medium: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.regular,
        fontSize: fonts.size['2XS'],
        lineHeight: fonts.lineHeight['2XS'],
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    small: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.regular,
        fontSize: fonts.size['3XS'],
        lineHeight: fonts.lineHeight['3XS'],
        letterSpacing: fonts.letterSpacing.none,
      },
    },
  },
};

const semanticMobileFonts = {
  headline: {
    xxlargeEnglish: {
      value: {
        fontFamily: fonts.family.poppins,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size['6XL'],
        lineHeight: fonts.lineHeight['6XL'],
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    xxlarge: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.bold,
        fontSize: fonts.size['6XL'],
        lineHeight: fonts.lineHeight['6XL'],
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    xlargeEnglish: {
      value: {
        fontFamily: fonts.family.poppins,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size['5XL'],
        lineHeight: fonts.lineHeight['5XL'],
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    xlarge: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.bold,
        fontSize: fonts.size['5XL'],
        lineHeight: fonts.lineHeight['5XL'],
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    large: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.bold,
        fontSize: fonts.size['4XL'],
        lineHeight: fonts.lineHeight['4XL'],
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    mediumEnglish: {
      value: {
        fontFamily: fonts.family.poppins,
        fontWeight: fonts.weight.bold,
        fontSize: fonts.size['3XL'],
        lineHeight: fonts.lineHeight['3XL'],
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    medium: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.bold,
        fontSize: fonts.size['3XL'],
        lineHeight: fonts.lineHeight['3XL'],
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    mediumLight: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.regular,
        fontSize: fonts.size['3XL'],
        lineHeight: fonts.lineHeight['3XL'],
        letterSpacing: fonts.letterSpacing.none,
      },
    },
  },

  title: {
    largeEnglish: {
      value: {
        fontFamily: fonts.family.poppins,
        fontWeight: fonts.weight.bold,
        fontSize: fonts.size['2XL'],
        lineHeight: fonts.lineHeight['2XL'],
        letterSpacing: fonts.size['2XL'] * fonts.letterSpacing.tight,
      },
    },
    large: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.bold,
        fontSize: fonts.size['2XL'],
        lineHeight: fonts.lineHeight['2XL'],
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    mediumEnglish: {
      value: {
        fontFamily: fonts.family.poppins,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size.XL,
        lineHeight: fonts.lineHeight.XL,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    medium: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size.XL,
        lineHeight: fonts.lineHeight.XL,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    smallEnglish: {
      value: {
        fontFamily: fonts.family.poppins,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size.MD,
        lineHeight: fonts.lineHeight.MD,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    small: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size.MD,
        lineHeight: fonts.lineHeight.MD,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    smallStrong: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.extrabold,
        fontSize: fonts.size.MD,
        lineHeight: fonts.lineHeight.MD,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    xsmallEnglish: {
      value: {
        fontFamily: fonts.family.poppins,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size.XS,
        lineHeight: fonts.lineHeight['2XS'],
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    xsmallEnglishUnderline: {
      value: {
        fontFamily: fonts.family.poppins,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size.XS,
        lineHeight: fonts.lineHeight['2XS'],
        letterSpacing: fonts.letterSpacing.none,
        textDecorationLine: 'underline',
      },
    },
    xsmall: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.bold,
        fontSize: fonts.size.XS,
        lineHeight: fonts.lineHeight['2XS'],
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    xsmallLight: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.medium,
        fontSize: fonts.size.XS,
        lineHeight: fonts.lineHeight['2XS'],
        letterSpacing: fonts.letterSpacing.none,
      },
    },
  },

  label: {
    large: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size.LG,
        lineHeight: fonts.lineHeight.LG,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    medium: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size.MD,
        lineHeight: fonts.lineHeight.MD,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    small: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.medium,
        fontSize: fonts.size.SM,
        lineHeight: fonts.lineHeight.SM,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    xsmall: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.medium,
        fontSize: fonts.size.XS,
        lineHeight: fonts.lineHeight.XS,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    xsmallUnderline: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.medium,
        fontSize: fonts.size.XS,
        lineHeight: fonts.lineHeight.XS,
        letterSpacing: fonts.letterSpacing.none,
        textDecorationLine: 'underline',
      },
    },
    xxsmall: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.medium,
        fontSize: fonts.size['2XS'],
        lineHeight: fonts.lineHeight['2XS'],
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    xxxsmall: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.medium,
        fontSize: fonts.size['3XS'],
        lineHeight: fonts.lineHeight['3XS'],
        letterSpacing: fonts.letterSpacing.none,
      },
    },
  },
  body: {
    xlargeEnglish: {
      value: {
        fontFamily: fonts.family.poppins,
        fontWeight: fonts.weight.regular,
        fontSize: fonts.size.LG,
        lineHeight: fonts.lineHeight.LG,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    xlarge: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.regular,
        fontSize: fonts.size.LG,
        lineHeight: fonts.lineHeight.LG,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    large: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.regular,
        fontSize: fonts.size.MD,
        lineHeight: fonts.lineHeight.MD,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    largeStrong: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size.MD,
        lineHeight: fonts.lineHeight.MD,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    mediumEnglish: {
      value: {
        fontFamily: fonts.family.poppins,
        fontWeight: fonts.weight.regular,
        fontSize: fonts.size.SM,
        lineHeight: fonts.lineHeight.SM,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    medium: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.regular,
        fontSize: fonts.size.SM,
        lineHeight: fonts.lineHeight.SM,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    mediumStrong: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size.SM,
        lineHeight: fonts.lineHeight.SM,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    small: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.regular,
        fontSize: fonts.size.XS,
        lineHeight: fonts.lineHeight.XS,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    smallStrong: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size.XS,
        lineHeight: fonts.lineHeight.XS,
        letterSpacing: fonts.letterSpacing.none,
      },
    },
  },
  caption: {
    largeEnglish: {
      value: {
        fontFamily: fonts.family.poppins,
        fontWeight: fonts.weight.regular,
        fontSize: fonts.size['2XS'],
        lineHeight: fonts.lineHeight['2XS'],
        letterSpacing: fonts.size['2XS'] * fonts.letterSpacing.xtight,
      },
    },
    large: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.regular,
        fontSize: fonts.size['2XS'],
        lineHeight: fonts.lineHeight['2XS'],
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    largeStrong: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size['2XS'],
        lineHeight: fonts.lineHeight['2XS'],
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    medium: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.regular,
        fontSize: fonts.size['3XS'],
        lineHeight: fonts.lineHeight['3XS'],
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    mediumStrong: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size['3XS'],
        lineHeight: fonts.lineHeight['3XS'],
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    small: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.regular,
        fontSize: fonts.size['4XS'],
        lineHeight: fonts.lineHeight['4XS'],
        letterSpacing: fonts.letterSpacing.none,
      },
    },
    smallStrong: {
      value: {
        fontFamily: fonts.family.pretendard,
        fontWeight: fonts.weight.semibold,
        fontSize: fonts.size['4XS'],
        lineHeight: fonts.lineHeight['4XS'],
        letterSpacing: fonts.letterSpacing.none,
      },
    },
  },
};

export const semanticTextStyles = defineTextStyles({
  desktop: semanticDesktopFonts,
  mobile: semanticMobileFonts,
});
