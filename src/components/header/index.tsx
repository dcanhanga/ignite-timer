import React from 'react';
import { PiMoonStars, PiScroll, PiSun, PiTimer } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';

import { SwitchThemeContext } from '@/context/switcherTheme';

import * as C from './styles';
import { Tooltip } from './tooltip';

export const Header = () => {
  const switchTheme = React.useContext(SwitchThemeContext);
  const { switcherTheme } = switchTheme;
  return (
    <C.HeaderContainer>
      <C.SideLeft>
        <span>
          <img src="/ignite.svg" alt="" />
        </span>

        <C.FlipContainer onClick={switcherTheme}>
          <C.Front>
            <PiSun size={28} className="sun" />
          </C.Front>
          <C.Back>
            <PiMoonStars size={28} className="moon" />
          </C.Back>
        </C.FlipContainer>
      </C.SideLeft>

      <nav>
        <C.Ul>
          <C.Li>
            <NavLink to="/">
              <PiTimer size={28} />
              <Tooltip>Timer</Tooltip>
            </NavLink>
          </C.Li>
          <C.Li>
            <NavLink to="/history">
              <PiScroll size={28} />
              <Tooltip>Histórico</Tooltip>
            </NavLink>
          </C.Li>
        </C.Ul>
      </nav>
    </C.HeaderContainer>
  );
};
