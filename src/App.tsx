import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { MainRouter } from '@/routes/mainRouter';
import { GlobalStyle } from '@/styles/global';
import { defaultTheme } from '@/styles/themes/default';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <MainRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
};
