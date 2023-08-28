import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { SwitchThemeContext } from '@/context/switcherTheme';
import { MainRouter } from '@/routes/mainRouter';
import { GlobalStyle } from '@/styles/global';
import { defaultTheme } from '@/styles/themes/default';
import { light } from '@/styles/themes/light';

export const App = () => {
  const switchTheme = React.useContext(SwitchThemeContext);
  const { theme } = switchTheme;
  // React.useEffect(() => {
  //   document.body.style.transition = 'none';
  //   setTimeout(() => {
  //     document.body.style.transition = 'background-color 0.7s, color 0.7s';
  //   }, 0);
  // }, []);
  const currentTheme = theme === 'dark' ? defaultTheme : light;
  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <MainRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
};
