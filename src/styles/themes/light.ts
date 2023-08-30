import { rem } from '@/styles/global';

import { colors, font, fontFamily } from './utils/geral';

export const light = {
  title: 'light',
  colors: {
    'bg-1': '#00B37E',
    'bg-2': '#EAF6F2',
    'bg-3': '#DAE6E2',
    'bg-4': '#00B37E',
    text: '#121214',
    timer: '#323238',
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
