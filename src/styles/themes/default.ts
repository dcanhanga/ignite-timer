import { rem } from '@/styles/global';

import { colors, font, fontFamily } from './utils/geral';

export const defaultTheme = {
  title: 'dark',
  colors: {
    'bg-1': '#121214',
    'bg-2': '#202024',
    'bg-3': '#29292E',
    'bg-4': '#00875F',
    text: '#E1E1E6',
    timer: '#E1E1E6',
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
