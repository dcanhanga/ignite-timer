import { defaultTheme } from '@/styles/themes/default';
import { light } from '@/styles/themes/light';
const theme = {
  ...defaultTheme,
  ...light,
};
type ThemeType = typeof theme;
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
