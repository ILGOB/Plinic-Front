import React from 'react';
import styled, { keyframes } from 'styled-components';

function Home() {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Wrapper>
      <Video autoPlay loop muted>
        {/* <source src="video/video1.mp4" type="video/mp4" /> */}
        {/* <source src="video/video2.mp4" type="video/mp4" /> */}
        {/* <source src="video/video3.mp4" type="video/mp4" /> */}
        <source src="video/video4.mp4" type="video/mp4" />
      </Video>
      <PlinicLogo src="plinic_logo.png" />
      <KakaoBtn onClick={handleLogin} src="img/kakao.png" />
    </Wrapper>
  );
}

export default Home;

const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

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

const KakaoBtn = styled.img`
  cursor: pointer;
`;

const Text = styled.span`
  ${({ theme }) => theme.font.weight.bold};
  ${({ theme }) => theme.font.size[20]};
  margin-left: 25px;
`;
