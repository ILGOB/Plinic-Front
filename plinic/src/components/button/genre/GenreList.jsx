import React, { useState, useEffect } from 'react';
import Genre from './Genre';
import { genreData } from './genreData';
import styled from 'styled-components';

function GenreList(props) {
  const genre1 = [
    {
      id: 1,
      name: 'pop',
    },
    {
      id: 2,
      name: 'k-pop',
    },
    {
      id: 3,
      name: 'jazz',
    },
    {
      id: 4,
      name: 'hip-hop',
    },
    {
      id: 5,
      name: 'disney',
    },
  ];

  const key = [];

  for (const genre of genreData) {
    key.push(genre.name);
  }

  if (props.setIsHere) {
    if (key.includes(props.isClicked)) {
      props.setIsHere(true);
    } else {
      props.setIsHere(false);
    }
  }

  return (
    <>
      <Wrapper>
        {genre1.map(genre => {
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
