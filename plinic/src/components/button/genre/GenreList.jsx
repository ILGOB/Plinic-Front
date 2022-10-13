import React, { useState, useEffect } from 'react';
import Genre from './Genre';
import { genreData } from './genreData';
import styled from 'styled-components';

function GenreList(props) {
  const genre1 = genreData.slice(0, 6);
  const genre2 = genreData.slice(6, 12);
  const genre3 = genreData.slice(12, 18);
  const genre4 = genreData.slice(18, 24);

  return (
    <>
      <Wrapper>
        {genre1.map(genre => {
          return <Genre key={genre.id} name={genre.name} onClick={props.onClick} isClicked={props.isClicked} />;
        })}
      </Wrapper>
      <Wrapper>
        {genre2.map(genre => {
          return <Genre key={genre.id} name={genre.name} onClick={props.onClick} isClicked={props.isClicked} />;
        })}
      </Wrapper>
      <Wrapper>
        {genre3.map(genre => {
          return <Genre key={genre.id} name={genre.name} onClick={props.onClick} isClicked={props.isClicked} />;
        })}
      </Wrapper>
      <Wrapper>
        {genre4.map(genre => {
          return <Genre key={genre.id} name={genre.name} onClick={props.onClick} isClicked={props.isClicked} />;
        })}
      </Wrapper>
    </>
  );
}

export default GenreList;

const Wrapper = styled.div`
  ${({ theme }) => theme.align.flexCenter};
  height: fit-content;
  &:not(:last-of-type) {
    margin-bottom: 5px;
  }
  &:nth-child(2n + 1) {
    margin-left: 25px;
  }
`;
