import { rem } from '@/styles/global';

import { colors, font, fontFamily } from './utils/geral';

export const defaultTheme = {
  title: 'dark',
  colors: {
    'bg-1': '#121214',
    'bg-2': '#202024',
    text: '#E1E1E6',
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
