import { rem } from '@/styles/global';

import { colors, font, fontFamily } from './utils/geral';

export const light = {
  title: 'light',
  colors: {
    'bg-1': '#00B37E',
    'bg-2': '#EAF6F2',
    text: '#121214',

    ...colors,
  },
  fontFamily: {
    ...fontFamily,
  },
  font: {
    ...font,
  },
  rem: rem,
};
