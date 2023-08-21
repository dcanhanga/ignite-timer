import React, { ReactNode } from 'react';

import { usePersistedState } from '@/hooks/usePersistedState';

interface SwitchThemeType {
  switcherTheme: () => void;
  theme: string;
}

interface ModalProviderProps {
  children: ReactNode;
}

export const SwitchThemeContext = React.createContext({} as SwitchThemeType);

export const SwitchThemeProvider = ({ children }: ModalProviderProps) => {
  const [theme, setTheme] = usePersistedState('IgniteTimerTheme', 'dark');
  const switcherTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else setTheme('dark');
  };

  return (
    <SwitchThemeContext.Provider value={{ switcherTheme, theme }}>
      {children}
    </SwitchThemeContext.Provider>
  );
};
