import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { genreFirstLine, genreSecondLine, genreThirdLine, genreFourthLine } from './genreData';

function Genre() {
  const [isClicked, setIsClicked] = useState([]);

  const onClickGenreBtn = e => {
    isClicked.includes(e.target.id)
      ? setIsClicked(isClicked.filter(el => el !== e.target.id))
      : isClicked.length < 3 && setIsClicked(prev => [...prev, e.target.id]);
  };

  useEffect(() => {
    console.log(isClicked);
  }, [isClicked]);

  return (
    <>
      <Container>
        {genreFirstLine.map(genre => (
          <GenreButton key={genre.id} onClick={onClickGenreBtn} isClicked={isClicked} id={genre.name}>
            {genre.name}
          </GenreButton>
        ))}
      </Container>
      <Container>
        {genreSecondLine.map(genre => (
          <GenreButton key={genre.id} onClick={onClickGenreBtn} isClicked={isClicked} id={genre.name}>
            {genre.name}
          </GenreButton>
        ))}
      </Container>
      <Container>
        {genreThirdLine.map(genre => (
          <GenreButton key={genre.id} onClick={onClickGenreBtn} isClicked={isClicked} id={genre.name}>
            {genre.name}
          </GenreButton>
        ))}
      </Container>
      <Container>
        {genreFourthLine.map(genre => (
          <GenreButton key={genre.id} onClick={onClickGenreBtn} isClicked={isClicked} id={genre.name}>
            {genre.name}
          </GenreButton>
        ))}
      </Container>
    </>
  );
}

export default Genre;

const NAVY = ({ theme }) => theme.color.navy;
const WHITE = ({ theme }) => theme.color.white;

const Container = styled.div`
  width: 100vw;
  height: fit-content;
  ${({ theme }) => theme.align.flexCenter}
  &:not(:last-of-type) {
    margin-bottom: 5px;
  }
  &:nth-child(2n + 1) {
    margin-left: 25px;
  }
`;

const GenreButton = styled.button`
  width: 70px;
  height: 30px;
  border: solid 2px ${NAVY};
  border-radius: 15px;
  background-color: ${({ isClicked, id }) => (isClicked.includes(id) ? NAVY : WHITE)};
  ${({ theme }) => theme.align.flexCenter};
  color: ${({ isClicked, id }) => (isClicked.includes(id) ? WHITE : NAVY)};
  ${({ theme }) => theme.font.weight.thick};
  ${({ theme }) => theme.font.size[10]};
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 5px;
  }
`;
