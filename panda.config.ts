import { defineConfig } from '@pandacss/dev';
import { semanticColorTokens } from '@/src/shared/tokens/semantics/colors';
import { semanticTextStyles } from '@/src/shared/tokens/semantics/fonts';
import {
  semanticBreakpoints,
  semanticNumberTokens,
} from '@/src/shared/tokens/semantics/numbers';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    breakpoints: {
      desktop: semanticBreakpoints.desktop,
      tablet: semanticBreakpoints.tablet,
    },
    extend: {
      semanticTokens: {
        colors: semanticColorTokens,
        radii: semanticNumberTokens.radii,
        borderWidths: semanticNumberTokens.borderWidths,
        spacing: semanticNumberTokens.spacing,
      },
      textStyles: semanticTextStyles,
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
