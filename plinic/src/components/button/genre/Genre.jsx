import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Genre(props) {
  return (
    <Container>
      <GenreButton id={props.name} usedFor={props.usedFor} onClick={props.onClick} isClicked={props.isClicked}>
        {props.name}
      </GenreButton>
    </Container>
  );
}

export default Genre;

const NAVY = ({ theme }) => theme.color.navy;
const WHITE = ({ theme }) => theme.color.white;
const MINT = ({ theme }) => theme.color.mint;

const USED_FOR = {
  post: `
    padding: 0px 10px;
    height: 20px;
    border:solid 1.5px #38a3a5;
    width: fit-content;
    background-color: #ffffff;
    color: #38a3a5;
    border-radius: 15px;   
    font-size: 12px;
    font-weight: thick;
    cursor: pointer;
    &:not(:last-of-type) {
      margin-right: 5px;
    }
`,

  myPage: `
    border:solid 2px #22577a;`,
};

const DEFAULT_BORDER_STYLE = `border: solid 2px #22577a;`;

const ISCLICKED = ({ isClicked, id }) => {
  if (typeof isClicked === 'object') {
    return isClicked.includes(id) ? NAVY : WHITE;
  } else {
    return isClicked === id ? NAVY : WHITE;
  }
};

const SICLICKED = ({ isClicked, id }) => {
  if (typeof isClicked === 'object') {
    return isClicked.includes(id) ? WHITE : NAVY;
  } else {
    return isClicked === id ? WHITE : NAVY;
  }
};

const Container = styled.div``;

const GenreButton = styled.button`
  width: 70px;
  height: 30px;
  ${({ usedFor }) => (usedFor ? USED_FOR[usedFor] : DEFAULT_BORDER_STYLE)};
  border-radius: 15px;
  background-color: ${({ isClicked }) => (isClicked ? ISCLICKED : WHITE)};
  ${({ theme }) => theme.align.flexCenter};
  color: ${({ isClicked, usedFor }) => (isClicked ? SICLICKED : NAVY)};
  ${({ theme }) => theme.font.weight.thick};
  ${({ theme }) => theme.font.size[10]};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'auto')};

  &:not(:last-of-type) {
    margin-right: 5px;
  }
  margin-left: 5px;
`;
