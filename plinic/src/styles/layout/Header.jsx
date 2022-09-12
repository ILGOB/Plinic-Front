import React from 'react';
import styled from 'styled-components';

function Header({ themeMode, toggleDarkMode }) {
  return (
    <Wrapper>
      <img src={'/plinic_logo.png'} height={'57px'} />
      <button onClick={() => toggleDarkMode()}>{themeMode === 'light' ? 'light' : 'dark'}</button>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 57px;
  background-color: ${({ theme }) => theme.color.warning};
  display: flex;
  align-items: center;
`;
