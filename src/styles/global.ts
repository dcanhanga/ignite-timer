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
text-decoration:none;
}
*::focus{
  outline:none;
}

body {
  font-family: ${props => props.theme.fontFamily.roboto};
   background-color: ${props => props.theme.colors['bg-1']};
   color: ${props => props.theme.colors['text']}; 
 
     
}
button {
  border:0;
  background-color: transparent;
  cursor: pointer;
}
`;
