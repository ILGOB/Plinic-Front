import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';
import Toggle from './Toggle';
import Slider from '../slider/Slider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

function PlaylistModal({ setPlaylistData }) {
  const [isGenreToggle, setIsGenreToggle] = useState(false);
  const [isMoodToggle, setIsMoodToggle] = useState(false);
  const [choice, setChoice] = useState('');
  const [playlistNum, setPlaylistNum] = useState(0);

  const genreToggleHandler = () => {
    setIsGenreToggle(!isGenreToggle);
  };

  const moodToggleHandler = () => {
    setIsMoodToggle(!isMoodToggle);
  };

  useEffect(() => {
    setPlaylistData({
      choice: choice,
      playlistNum: playlistNum,
    });
  }, [choice, playlistNum]);

  return (
    <Wrapper>
      {/* 썸네일 설정 */}
      <Thumbnail />

      {/* 장르 토글 메뉴 */}
      <Toggle onClick={genreToggleHandler} text={'장르'} state={isGenreToggle} choice={choice} setChoice={setChoice} />

      {/* 분위기 토글 메뉴 */}
      <Toggle onClick={moodToggleHandler} text={'분위기'} state={isMoodToggle} choice={choice} setChoice={setChoice} />

      {/* 곡 개수 슬라이더 */}
      <Slider setPlaylistNum={setPlaylistNum} />
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
