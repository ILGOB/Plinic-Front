import React, { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../styles/theme';
import { GlobalStyle } from '../GlobalStyles';

import Header from './Header';
import Main from './Main';

function Layout({ children }) {
  const localTheme = window.localStorage.getItem('theme') || 'light';
  const [themeMode, setThemeMode] = useState(localTheme);
  const themeObject = themeMode === 'light' ? lightTheme : darkTheme;

  const toggleThemeMode = () => {
    if (themeMode === 'light') {
      setThemeMode('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      setThemeMode('light');
      window.localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Wrapper>
      <ThemeProvider theme={themeObject}>
        <GlobalStyle />
        <Header themeMode={themeMode} toggleDarkMode={toggleThemeMode} />
        <Main>{children}</Main>
      </ThemeProvider>
    </Wrapper>
  );
}

export default Layout;

const Wrapper = styled.div`
  height: 100vh;
  /* background-color: ${({ theme }) => theme.color.navy}; */
  /* color: white; */
  @media (max-width: 1100px) {
    width: 1024px;
    padding: 0 calc((1100px - 1024px) / 2);
  }
  @media (min-width: 1100px) {
    width: 100vw;
    padding: 0 calc((100vw - 1024px) / 2);
    overflow-x: hidden;
  }
`;
