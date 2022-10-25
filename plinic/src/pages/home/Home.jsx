import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
console.log(BASE_URL);

function Home() {
  const [video, setVideo] = useState('');

  const getVideo = () => {
    axios.get(`${BASE_URL}/random-background/`).then(res => {
      setVideo(res.data.background_url);
    });
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <LinkStyled to={'/mypage'}>
      <Wrapper>
        <Video autoPlay loop muted>
          <source key={video} src={video} type="video/mp4" />
        </Video>
        <PlinicLogo src="plinic_logo.png" />
      </Wrapper>
    </LinkStyled>
  );
}

export default Home;

const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const LinkStyled = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  ${FLEX_CENTER_COLUMN}
`;

const Video = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

const PlinicLogo = styled.img`
  width: 550px;
`;
