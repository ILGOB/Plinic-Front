import React, { useState } from 'react';
import styled from 'styled-components';

function Playlist({ data, usedFor }) {
  console.log('data :>> ', data);
  const [playing, setPlaying] = useState('');

  const changeMusic = e => {
    setPlaying(e.currentTarget.id);
  };

  return (
    <PlaylistWrapper usedFor={usedFor}>
      <VideoFrame>
        <iframe
          width="600"
          height="360"
          src={
            playing
              ? `https://www.youtube.com/embed/${playing}/videoseries?list=TLGG70_eemmaf0UxNjEwMjAyMg`
              : `https://www.youtube.com/embed/videoseries?list=TLGG70_eemmaf0UxNjEwMjAyMg`
          }
          title=""
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoFrame>
      <PlayList usedFor={usedFor}>
        {data.map(item => (
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
  );
}

export default Playlist;

const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;
const FLEX_CENTER = ({ theme }) => theme.align.flexCenter;

const PlaylistWrapper = styled.div`
  width: 100%;
  ${({ usedFor }) => (usedFor === 'post' ? FLEX_CENTER : FLEX_CENTER_COLUMN)}
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
  width: ${({ usedFor }) => (usedFor === 'post' ? '468px' : '100%')};
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
