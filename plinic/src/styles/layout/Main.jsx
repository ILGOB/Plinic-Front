import React from 'react';
import styled from 'styled-components';

function Main({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Main;

const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  ${FLEX_CENTER_COLUMN};
  /* background-color: ${({ theme }) => theme.color.navy}; */
`;
