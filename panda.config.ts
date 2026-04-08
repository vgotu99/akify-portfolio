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
      keyframes: {
        'modal-scale-in': {
          from: { transform: 'scale(0.8)' },
          to: { transform: 'scale(1)' },
        },
        'modal-scale-out': {
          from: { transform: 'scale(1)', opacity: '1' },
          to: { transform: 'scale(0.9)', opacity: '0' },
        },
        'modal-slide-up': {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
        'modal-slide-down': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(100%)' },
        },
      },
      semanticTokens: {
        animations: {
          'custom-pulse': {
            value: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          },
        },
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
