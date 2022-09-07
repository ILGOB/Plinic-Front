import React from 'react';
import styled from 'styled-components';

function Scroll({ place, children }) {
  return (
    <Wrapper place={place}>
      <ScrollBar place={place}>{children}</ScrollBar>
    </Wrapper>
  );
}

export default Scroll;

const MY_PAGE_SCROLL = ({ theme }) => theme.scroll.myPage;
const POST_SCROLL = ({ theme }) => theme.scroll.post;

const Wrapper = styled.div`
  width: ${({ place }) => (place === 'myPage' ? 523 : 468)}px;
  height: ${({ place }) => (place === 'myPage' ? 424 : 261)}px;
  border: 2px solid black;
  padding: ${({ place }) => (place === 'myPage' ? '0 20px 20px 20px' : '0 7px 0 0')};
`;

const ScrollBar = styled.div`
  width: 100%;
  height: 100%;
  ${({ place }) => (place === 'myPage' ? MY_PAGE_SCROLL : POST_SCROLL)}
`;
