import { rem } from '@/styles/global';

import { colors, font, fontFamily } from './utils/geral';

export const defaultTheme = {
  title: 'dark',
  colors: {
    background: '#121214',
    text: '#C4C4CC',
    ...colors,
  },
  fontFamily: {
    ...fontFamily,
  },
  font: {
    ...font,
  },
  rem,
};
