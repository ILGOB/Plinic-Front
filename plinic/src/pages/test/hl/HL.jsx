import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function HL() {
  return (
    <Wrapper>
      <Link to="/hl/profile">Profile Component</Link>
      <Link to="/hl/thumbnail">Thumbnail Component</Link>
      <Link to="/hl/scroll">Scroll Component</Link>
      <Link to="/hl/switch">Switch Component</Link>
      <Link to="/hl/modal">Modal Component</Link>
      <Link to="/hl/card">Card Component</Link>
      <Link to="/hl/post">Post Component</Link>
    </Wrapper>
  );
}

export default HL;

const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const Wrapper = styled.div`
  ${FLEX_CENTER_COLUMN}
`;
