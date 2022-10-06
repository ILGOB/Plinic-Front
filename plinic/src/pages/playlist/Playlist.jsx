import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useRecoilValue } from 'recoil';
import loginAtom from '../../recoil/dummy-login/loginAtom';

function Playlist() {
  const loginState = useRecoilValue(loginAtom);
  console.log('loginState :>> ', loginState);

  const [playing, setPlaying] = useState('');

  const handleDelete = () => {
    alert('삭제');
  };
  const handleSave = () => {
    alert('저장');
  };

  const playlistData = [
    {
      id: 1,
      src: 'E8gmARGvPlI',
      title: 'Wham! - Last Christmas (Official Video)',
      time: '4:38',
    },
    {
      id: 2,
      src: 'fRyhqobl0sk',
      title: 'All I Want for Christmas Is You',
      time: '4:02',
    },
    {
      id: 3,
      src: 'L1KEJzfsQEY',
      title: 'Ava Max - Christmas Without You [Official Audio]',
      time: '2:50',
    },
    {
      id: 4,
      src: 'hVzjR6hBArE',
      title: 'Mabel - Loneliest Time Of Year',
      time: '3:27',
    },
    {
      id: 5,
      src: 'QLrmP9GBd3c',
      title: 'Alessia Cara - Make It To Christmas (Audio)',
      time: '3:32',
    },
    {
      id: 6,
      src: '_hOL1Cw2Hbg',
      title: 'Pink Sweat$ & Donny Hathaway - This Christmas (Official Audio)',
      time: '3:02',
    },
    {
      id: 7,
      src: 'hVzjR6hBArE',
      title: 'Mabel - Loneliest Time Of Year',
      time: '3:27',
    },
    {
      id: 8,
      src: 'QLrmP9GBd3c',
      title: 'Alessia Cara - Make It To Christmas (Audio)',
      time: '3:32',
    },
    {
      id: 9,
      src: '_hOL1Cw2Hbg',
      title: 'Pink Sweat$ & Donny Hathaway - This Christmas (Official Audio)',
      time: '3:02',
    },
    {
      id: 10,
      src: 'hVzjR6hBArE',
      title: 'Mabel - Loneliest Time Of Year',
      time: '3:27',
    },
    {
      id: 11,
      src: 'QLrmP9GBd3c',
      title: 'Alessia Cara - Make It To Christmas (Audio)',
      time: '3:32',
    },
    {
      id: 12,
      src: '_hOL1Cw2Hbg',
      title: 'Pink Sweat$ & Donny Hathaway - This Christmas (Official Audio)',
      time: '3:02',
    },
  ];

  const changeMusic = e => {
    setPlaying(e.currentTarget.id);
  };

  return (
    <Wrapper>
      <Header>
        <HeaderTitle>플레이리스트 제목</HeaderTitle>
        {loginState ? <Btn onClick={handleDelete}>삭제</Btn> : <Btn onClick={handleSave}>보관함에 저장</Btn>}
      </Header>
      <Main>
        <Info>
          <Genre />
          {/* 장르 컴포 */}
          <Total>ㅇㅇ곡</Total>
        </Info>
        <Container>
          <VideoFrame>
            <iframe
              width="600"
              height="360"
              src={
                playing
                  ? `https://www.youtube.com/embed/${playing}/videoseries?list=TLGG70_eemmaf0UwNDEwMjAyMg`
                  : `https://www.youtube.com/embed/videoseries?list=TLGG70_eemmaf0UwNDEwMjAyMg`
              }
              title=""
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoFrame>
          <PlayList>
            {playlistData.map(item => (
              <PlayListItem key={item.id} onClick={changeMusic} id={item.src}>
                <Num>{item.id}</Num>
                <Title>{item.title}</Title>
                <Time>{item.time}</Time>
              </PlayListItem>
            ))}
          </PlayList>
        </Container>
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
  ${FLEX_CENTER}
  gap:675px;
  width: 100%;
  top: 60px;
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
const Genre = styled.div`
  width: 55px;
  height: 20px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.color.mint};
`;
const Total = styled.span``;

const Container = styled.div`
  ${FLEX_CENTER_COLUMN};
  width: 600px;
  flex-direction: column;
  justify-content: space-around;
`;

const VideoFrame = styled.div`
  width: 600px;
  height: 360px;
  border-radius: 20px;
  overflow: hidden;
`;

const PlayList = styled.div`
  margin-top: 40px;
  height: 264px;
  overflow-y: scroll;
  width: 100%;
  margin-bottom: 40px;
`;

const PlayListItem = styled.li`
  ${({ theme }) => theme.font.size[14]}
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #38a3a5;
  }
`;

const Num = styled.span`
  margin-right: 10px;
`;
const Title = styled.span``;
const Time = styled.span``;
