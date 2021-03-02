import { defaultColors } from './colors';
import { defaultFonts } from './fonts';
import { defaultBreakpoints } from './breakpoints';

type ThemeType = typeof theme;

export const theme = {
  colors: defaultColors,
  fontsFamily: defaultFonts,
  breakpoints: defaultBreakpoints,
};

export type { ThemeType };
