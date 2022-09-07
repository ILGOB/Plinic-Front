import { Container } from '@mui/system';
import React from 'react';
import styled from 'styled-components';
import { genreFirstLine, genreSecondLine, genreThirdLine, genreFourthLine } from './genreData';

function PostGenre() {
  return (
    <>
      <Wrapper>
        {genreFirstLine.map(genre => (
          <PostGenreBtn key={genre.id} id={genre.name}>
            {genre.name}
          </PostGenreBtn>
        ))}
      </Wrapper>
      <Wrapper>
        {genreSecondLine.map(genre => (
          <PostGenreBtn key={genre.id} id={genre.name}>
            {genre.name}
          </PostGenreBtn>
        ))}
      </Wrapper>
      <Wrapper>
        {genreThirdLine.map(genre => (
          <PostGenreBtn key={genre.id} id={genre.name}>
            {genre.name}
          </PostGenreBtn>
        ))}
      </Wrapper>
      <Wrapper>
        {genreFourthLine.map(genre => (
          <PostGenreBtn key={genre.id} id={genre.name}>
            {genre.name}
          </PostGenreBtn>
        ))}
      </Wrapper>
    </>
  );
}

export default PostGenre;

const MINT = ({ theme }) => theme.color.mint;
const WHITE = ({ theme }) => theme.color.white;

const Wrapper = styled.div`
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

const PostGenreBtn = styled.button`
  padding: 0px 10px;
  width: fit-content;
  height: 20px;
  background-color: ${WHITE};
  color: ${MINT};
  border: 1.5px solid ${MINT};
  border-radius: 15px;
  ${({ theme }) => theme.font.size[12]};
  ${({ theme }) => theme.font.weight.thick};
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 5px;
  }
`;
