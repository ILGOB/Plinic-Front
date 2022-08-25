import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function TY() {
  return (
    <Wrapper>
      <Link to="/ty/pagination">Pagination Component</Link>
      <Link to="/ty/input">Input Component</Link>
      <Link to="/ty/select">SelectBox Component</Link>
      <Link to="/ty/card-carousel">CardCarousel Component</Link>
      <Link to="/ty/playlist-swipe">PlaylistSwipe Component</Link>
    </Wrapper>
  );
}

export default TY;

const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const Wrapper = styled.div`
  ${FLEX_CENTER_COLUMN}
`;
