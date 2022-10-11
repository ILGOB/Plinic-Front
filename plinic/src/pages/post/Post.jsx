import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import loginAtom from '../../recoil/dummy-login/loginAtom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCircle, faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons';

function Post() {
  const { postId } = useParams();
  const [isEdited, setIsEdited] = useState(false);

  const loginState = useRecoilValue(loginAtom);
  console.log('loginState :>> ', loginState);

  const editHandler = () => {
    setIsEdited(!isEdited);
  };

  const handleDelete = () => {
    alert('삭제');
  };

  const [playing, setPlaying] = useState('');

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
      <button onClick={editHandler}>edit</button>
      <div>
        <Writer>by. 작성자</Writer>
        {loginState ? <Btn onClick={handleDelete}>삭제</Btn> : ''}
      </div>
      <Info>
        <PostTitle>플레이리스트 제목</PostTitle>
        <Genre />
      </Info>
      <DateWrapper>
        <CreateDate>
          <FontAwesomeIcon icon={faCalendar} />
          <span>2022.09.15</span>
        </CreateDate>
        {isEdited && (
          <EditDate>
            <FontAwesomeIcon icon={faCircle} />
            <span>edited 2022.09.28</span>
          </EditDate>
        )}
      </DateWrapper>
      <Content>이 노래 들으면 귀 호강함</Content>
      <Tag>#띵곡 #센치한느낌 #갬성터질때 #눈물샘폭발 #태그쓰다보니태근하고싶다</Tag>
      <Buttons>
        <LikeBtn>
          <FontAwesomeIcon icon={faHeart} />
          <span>120</span>
        </LikeBtn>
        {loginState ? (
          '게시글 수정하기'
        ) : (
          <BookmarkBtn>
            <FontAwesomeIcon icon={faBookmark} />
            <span>저장하기</span>
          </BookmarkBtn>
        )}
      </Buttons>
      <PlaylistWrapper>
        <VideoFrame>
          <iframe
            width="600"
            height="360"
            src={
              playing
                ? `https://www.youtube.com/embed/${playing}/videoseries?list=TLGG70_eemmaf0UxMDEwMjAyMg`
                : `https://www.youtube.com/embed/videoseries?list=TLGG70_eemmaf0UxMDEwMjAyMg`
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
              <div>
                <Num>{item.id}</Num>
                <Title>{item.title}</Title>
              </div>
              <Time>{item.time}</Time>
            </PlayListItem>
          ))}
        </PlayList>
      </PlaylistWrapper>
    </Wrapper>
  );
}

export default Post;

const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;
const FLEX_CENTER = ({ theme }) => theme.align.flexCenter;

const Wrapper = styled.div`
  width: 100%;
  /* height: calc(100vh - 60px); */
  padding-top: 32px;
  ${FLEX_CENTER_COLUMN}
  /* justify-content: flex-start; */
  align-items: flex-start;
  /* background-color: red; */
`;

const Writer = styled.span`
  color: #555555;
  margin-right: 10px;
`;

const Btn = styled.span`
  ${({ theme }) => theme.font.size[20]}
  ${({ theme }) => theme.font.weight.thick}
  cursor: pointer;
`;

const Info = styled.div`
  ${FLEX_CENTER}
`;
const PostTitle = styled.h1`
  ${({ theme }) => theme.font.size[30]};
  margin: 12px 16px 12px 0;
`;
const Genre = styled.div`
  width: 55px;
  height: 20px;
  border: 2px solid navy;
  border-radius: 15px;
`;
const DateWrapper = styled.div`
  ${FLEX_CENTER}
`;
const CreateDate = styled.div`
  color: #555555;
  & > :first-child {
    margin-right: 5px;
  }
`;
const EditDate = styled.div`
  ${FLEX_CENTER};
  color: #777777;
  & > :first-child {
    font-size: 5px;
    margin: 0 10px;
  }
`;
const Content = styled.p`
  margin: 24px 0 16px;
`;
const Tag = styled.span``;

const PlaylistWrapper = styled.div`
  width: 100%;
  ${FLEX_CENTER};
  gap: 20px;
`;

const VideoFrame = styled.div`
  width: 600px;
  height: 360px;
  border-radius: 20px;
  overflow: hidden;
`;

const PlayList = styled.div`
  margin-top: 40px;
  height: 360px;
  overflow-y: scroll;
  width: 468px;
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

const Buttons = styled.div`
  margin-top: 24px;
  ${FLEX_CENTER};
  gap: 24px;
`;
const LikeBtn = styled.div`
  padding: 10px 20px;
  /* width: 100px; */
  /* height: 40px; */
  border-radius: 30px;
  border: 2px solid navy;
  ${FLEX_CENTER};
  & > :first-child {
    margin-right: 10px;
    ${({ theme }) => theme.font.size[20]}
  }
`;

const BookmarkBtn = styled(LikeBtn)``;
