import { createGlobalStyle } from 'styled-components';
export const rem = (pxValue: number, baseFontSize = 16): string =>
  `${pxValue / baseFontSize}rem`;

export const GlobalStyle = createGlobalStyle`
*, *::after, *::before{
margin: 0;
box-sizing: border-box;
padding: 0;
font-size: ${props => props.theme.font[16].size};
line-height: ${props => props.theme.font[16].lineHeight};

}
body {
  background-color: ${props => props.theme.colors.background};
  font-family: ${props => props.theme.fontFamily.roboto};
}
`;
