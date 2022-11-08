import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PlaylistSkeleton from '../skeleton/PlaylistSkeleton';

function Playlist({ data, usedFor, playTime }) {
  console.log('data :>> ', data);
  console.log('playTime :>> ', playTime);
  const iframeRef = useRef();
  const iframeCurrent = iframeRef.current;
  const [isLoaded, setIsLoaded] = useState(false);
  const [playing, setPlaying] = useState('');
  const [playlistID, setPlaylistID] = useState('');

  const changeMusic = e => {
    setPlaying(e.currentTarget.id);
  };

  useEffect(() => {
    iframeCurrent?.addEventListener('load', () => setIsLoaded(true));

    return () => {
      iframeCurrent?.addEventListener('load', () => setIsLoaded(true));
    };
  }, [iframeCurrent]);
  
  useEffect(() => {
    let videoIds = [];
    data.map(el => videoIds.push(el.videoId));
    videoIds = videoIds.join();

    axios.get(`https://plinic-api-server.ml/api/v1/plinic/playlist-examples/?ids=${videoIds}`).then(res => {
      setPlaylistID(res.data['total_url'].split(/list=/)[1]);
    });
  }, []);

  return (
    <PlaylistWrapper usedFor={usedFor}>
      <VideoFrame>
        {!isLoaded && <PlaylistSkeleton />}
        <iframe
          ref={iframeRef}
          width="600"
          height="360"
          src={
            playing
              ? `https://www.youtube.com/embed/${playing}/videoseries?list=${playlistID}`
              : `https://www.youtube.com/embed/videoseries?list=${playlistID}`
          }
          title=""
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoFrame>
      <PlayList usedFor={usedFor}>
        {data.map((item, idx) => (
          <PlayListItem key={item.id} onClick={changeMusic} id={item.videoId}>
            <div>
              <Num>{idx + 1}</Num>
              <Title>{item.title}</Title>
            </div>
            <Time>{item.playTime}</Time>
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
