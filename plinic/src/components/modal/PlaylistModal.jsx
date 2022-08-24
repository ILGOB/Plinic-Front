import React, { useState } from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';

function PlaylistModal() {
  const [isGenreToggle, setIsGenreToggle] = useState(false);
  const [isMoodToggle, setIsMoodToggle] = useState(false);

  const genreToggleHandler = () => {
    setIsGenreToggle(!isGenreToggle);
  };

  const moodToggleHandler = () => {
    setIsMoodToggle(!isMoodToggle);
  };

  return (
    <Wrapper>
      {/* 썸네일 설정 */}
      <Thumbnail />

      {/* 장르 토글 메뉴 */}
      <GenreToggle onClick={genreToggleHandler}>장르 토글 메뉴</GenreToggle>
      {isGenreToggle && <GenreToggleWrapper>장르 토글 열렸어요</GenreToggleWrapper>}

      {/* 분위기 토글 메뉴 */}
      <MoodToggle onClick={moodToggleHandler}>분위기 토글 메뉴</MoodToggle>
      {isMoodToggle && <MoodToggleWrapper>분위기 토글 열렸어요</MoodToggleWrapper>}

      {/* 곡 개수 슬라이더 */}
      <Slider>곡 개수 슬라이더</Slider>
    </Wrapper>
  );
}

export default PlaylistModal;

const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const Wrapper = styled.div`
  ${FLEX_CENTER_COLUMN}
  width: 565px;
  height: fit-content;
`;

const GenreToggle = styled.div`
  width: 100%;
  height: 47px;
  cursor: pointer;
  background-color: #ff0000;
`;

const GenreToggleWrapper = styled.div`
  width: 100%;
  height: 47px;
  background-color: #ff8400;
`;

const MoodToggle = styled.div`
  width: 100%;
  height: 47px;
  cursor: pointer;
  background-color: #fff700;
`;

const MoodToggleWrapper = styled.div`
  width: 100%;
  height: 47px;
  background-color: #00fb60;
`;

const Slider = styled.div`
  width: 100%;
  height: 90px;
  background-color: #008cff;
`;
