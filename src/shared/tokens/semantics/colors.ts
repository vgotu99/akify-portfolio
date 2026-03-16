import { defineSemanticTokens } from '@pandacss/dev';
import { colors } from '@/src/shared/tokens/primitives/colors';

export const semanticColorTokens = defineSemanticTokens({
  colors: {
    text: {
      primary: { value: colors.neutral[900] },
      secondary: { value: colors.neutral[700] },
      tertiary: { value: colors.neutral[600] },
      lightest: { value: colors.neutral[400] },

      primaryOnDark: { value: colors.neutral.white },
      secondaryOnDark: { value: colors.neutral[200] },
      tertiaryOnDark: { value: colors.neutral[600] },
      lightestOnDark: { value: colors.neutral[800] },

      critical: { value: colors.scale.red[400] },
      danger: { value: colors.scale.orange[500] },
      success: { value: colors.brand.primary[700] },
      highlight: { value: colors.scale.blue[500] },
      brand: { value: colors.brand.primary[500] },
      brandOnDark: { value: colors.brand.primary[300] },

      chipDefault: { value: colors.neutral[600] },
      chipCondition: { value: colors.scale.blue[400] },
      chipDelivery: { value: colors.brand.primary[700] },
      chipDark: { value: colors.brand.primary[400] },
      chipRed: { value: colors.scale.red[400] },

      buttonMain: { value: colors.neutral.white },
      buttonMainPressed: { value: colors.neutral[100] },
      buttonMainDisabled: { value: colors.neutral.white },
      buttonMainBrand: { value: colors.brand.primary[400] },
      buttonMainBrandPressed: { value: colors.brand.primary[200] },
      buttonMainBrandDisabled: { value: colors.brand.primary[50] },
      buttonSub: { value: colors.neutral[800] },
      buttonSubPressed: { value: colors.neutral[700] },
      buttonSubDisabled: { value: colors.neutral[400] },
    },

    icon: {
      primary: { value: colors.neutral[900] },
      secondary: { value: colors.neutral[700] },
      tertiary: { value: colors.neutral[600] },
      lightest: { value: colors.neutral[400] },

      primaryOnDark: { value: colors.neutral.white },
      secondaryOnDark: { value: colors.neutral[200] },
      tertiaryOnDark: { value: colors.neutral[600] },
      lightestOnDark: { value: colors.neutral[800] },

      critical: { value: colors.scale.red[400] },
      warning: { value: colors.scale.orange[500] },
      success: { value: colors.brand.primary[700] },
      brand: { value: colors.brand.primary[500] },
      brandOnDark: { value: colors.brand.primary[300] },

      buttonMain: { value: colors.neutral.white },
      buttonMainPressed: { value: colors.neutral[100] },
      buttonMainDisabled: { value: colors.neutral[400] },
      buttonMainBrand: { value: colors.brand.primary[400] },
      buttonMainBrandPressed: { value: colors.brand.primary[200] },
      buttonMainBrandDisabled: { value: colors.brand.primary[50] },
      buttonSub: { value: colors.neutral[800] },
      buttonSubPressed: { value: colors.neutral[700] },
      buttonSubDisabled: { value: colors.neutral[400] },

      verified: { value: colors.scale.blue[400] },

      homeOrange: { value: colors.scale.orange[500] },
      homeLightest: { value: colors.neutral[400] },

      readIndicator: { value: colors.scale.red[400] },
    },

    surface: {
      white: { value: colors.neutral.white },
      black: { value: colors.neutral.black },
      whitePressed: { value: colors.neutral[100] },
      lightGray: { value: colors.neutral[100] },
      lightGrayPressed: { value: colors.neutral[200] },
      gray: { value: colors.neutral[200] },
      grayPressed: { value: colors.neutral[400] },
      superDark: { value: colors.neutral[950] },
      dark: { value: colors.neutral[900] },
      darkPressed: { value: colors.neutral[800] },
      lightDark: { value: colors.neutral[800] },
      lightDarkPressed: { value: colors.neutral[700] },

      alphaWhiteXxlight: { value: colors.alpha.white05 },
      alphaWhiteLight: { value: colors.alpha.white10 },
      alphaWhiteMedium: { value: colors.alpha.white50 },
      alphaWhiteStrong: { value: colors.alpha.white75 },
      alphaBlackLight: { value: colors.alpha.black25 },
      alphaBlackMedium: { value: colors.alpha.black50 },
      alphaBlackStrong: { value: colors.alpha.black75 },

      critical: { value: colors.scale.red[400] },
    },

    button: {
      mainEnabled: { value: colors.neutral[900] },
      mainPressed: { value: colors.neutral[800] },
      mainDisabled: { value: colors.neutral[400] },
      subEnabled: { value: colors.neutral[100] },
      subPressed: { value: colors.neutral[200] },
      subDisabled: { value: colors.neutral[100] },
    },

    floating: {
      uploadEnabled: { value: colors.alpha.black75 },
      uploadPressed: { value: colors.alpha.black50 },
      uploadBorder: { value: colors.alpha.white20 },
      photoCount: { value: colors.alpha.black50 },
    },

    saveButton: {
      deselected: { value: colors.alpha.white75 },
      selected: { value: colors.scale.red[400] },
      selectedBorder: { value: colors.alpha.white50 },
    },

    toggle: {
      on: { value: colors.neutral[900] },
      off: { value: colors.neutral[200] },
      knob: { value: colors.neutral.white },
    },

    checkbox: {
      deselected: { value: colors.neutral[400] },
      selected: { value: colors.neutral[900] },
      check: { value: colors.neutral.white },
    },

    segmentedControl: {
      selected: { value: colors.neutral.white },
      background: { value: colors.neutral[200] },
    },

    textField: {
      default: { value: colors.neutral[100] },
    },

    chip: {
      default: { value: colors.neutral[100] },
      condition: { value: colors.scale.blue[50] },
      delivery: { value: colors.brand.primary[100] },
      dark: { value: colors.neutral[900] },
      red: { value: colors.scale.red[50] },
    },

    border: {
      light: { value: colors.neutral[100] },
      medium: { value: colors.neutral[200] },
      strong: { value: colors.neutral[400] },
      dark: { value: colors.neutral[900] },
      critical: { value: colors.scale.red[400] },
      warning: { value: colors.scale.orange[500] },
      success: { value: colors.brand.primary[700] },
      alphaOnDarkXlight: { value: colors.alpha.white10 },
      alphaOnDarkLight: { value: colors.alpha.white20 },
      alphaOnDarkMedium: { value: colors.alpha.white40 },
    },

    toast: {
      default: { value: colors.alpha.black90 },
      surface: { value: colors.neutral[800] },
      shadow: { value: colors.alpha.black8 },
      text: { value: colors.neutral.white },
    },
    overlay: {
      black25: { value: colors.alpha.black25 },
    },

    reference: {
      kakaoYellow: { value: colors.brand.reference['kakao-yellow'] },
      naverGreen: { value: colors.brand.reference['naver-green'] },
    },

    chat: {
      bubbleYou: { value: colors.neutral[900] },
      bubbleYouDisabled: { value: colors.neutral[400] },
      bubbleUser: { value: colors.neutral[100] },
    },

    logo: {
      gradientColor300: { value: colors.brand.primary[300] },
      gradientColor600: { value: colors.brand.primary[600] },
      gradientColor700: { value: colors.brand.primary[700] },
      gradientNeutral600: { value: colors.neutral[600] },
      gradientNeutral900: { value: colors.neutral[900] },
      gradientNeutralBlack: { value: colors.neutral.black },
    },

    home: {
      primary300: { value: colors.brand.primary[300] },
      white: { value: colors.neutral.white },
      neutral900: { value: colors.neutral[900] },
      neutral600: { value: colors.neutral[600] },
      neutral700: { value: colors.neutral[700] },
      dark: { value: colors.neutral[900] },
    },
    article: {
      neutral600: { value: colors.neutral[600] },
      neutral700: { value: colors.neutral[700] },
      neutral900: { value: colors.neutral[900] },
    },
    notification: {
      neutral400: { value: colors.neutral[400] },
      neutral600: { value: colors.neutral[600] },
      neutral700: { value: colors.neutral[700] },
      neutral900: { value: colors.neutral[900] },
    },

    header: {
      stylish: { value: colors.alpha.black75 },
      default: { value: colors.alpha.black85 },
    },
  },
});
