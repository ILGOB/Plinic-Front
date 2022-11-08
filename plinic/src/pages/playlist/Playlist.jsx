import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useRecoilValue } from 'recoil';
import loginAtom from '../../recoil/dummy-login/loginAtom';
import data from '../../components/card/dummyData';
import Genre from '../../components/button/genre/Genre';
import PlaylistComponent from '../../components/playlist/Playlist';
import playlistDummyData from '../../components/playlist/dummyData';

function Playlist() {
  const { state } = useLocation();
  const { data } = state || [];
  const loginState = useRecoilValue(loginAtom);
  console.log('loginState :>> ', loginState);
  const { playlistId } = useParams();
  const currentPlaylist = data[+playlistId];

  const handleDelete = () => {
    alert('삭제');
  };
  const handleSave = () => {
    alert('저장');
  };

  return (
    <Wrapper>
      <Header>
        <HeaderTitle>{currentPlaylist.title}</HeaderTitle>
      </Header>
      <Main>
        <Info>
          <Genre name={currentPlaylist.genre} usedFor={'post'} />
          <Total>{currentPlaylist.playlist.length}곡</Total>
        </Info>
        <PlaylistComponent data={currentPlaylist.playlist} usedFor={'playlist'} />
      </Main>
    </Wrapper>
  );
}

export default Playlist;

const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;
const FLEX_CENTER = ({ theme }) => theme.align.flexCenter;

const Wrapper = styled.div`
  width: 100%;
  ${FLEX_CENTER_COLUMN};
`;

const Header = styled.div`
  ${FLEX_CENTER};
  gap: 675px;
  width: 100%;
  top: 60px;
  margin-right: 430px;
`;

const HeaderTitle = styled.h1`
  ${({ theme }) => theme.font.size[30]}
  ${({ theme }) => theme.font.weight.bold}
`;

const Btn = styled.span`
  ${({ theme }) => theme.font.size[20]}
  ${({ theme }) => theme.font.weight.thick}
  cursor: pointer;
`;

const Main = styled.div``;
const Info = styled.div`
  width: 100%;
  ${FLEX_CENTER};
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Total = styled.span``;
