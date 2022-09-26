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
      {/* <LogoOverlay> */}
      <PlinicLogo src="plinic_logo.png" />
      {/* </LogoOverlay> */}
      <LoginBtns>
        <KakaoBtn onClick={handleLogin}>
          <LogoImg src="img/kakao.png" />
          <Text>Continue with Kakao</Text>
        </KakaoBtn>
      </LoginBtns>
    </Wrapper>
  );
}

export default Home;

const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const Wrapper = styled.div``;

const Video = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

const LogoOverlay = styled.div`
  width: 500px;
  height: 230px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  ${FLEX_CENTER_COLUMN}
`;

const PlinicLogo = styled.img`
  width: 407px;
`;

const LoginBtns = styled.div`
  width: 100%;
  height: fit-content;
  ${FLEX_CENTER_COLUMN}
  margin-top: 44px;
`;

const GoogleBtn = styled.div`
  width: 300px;
  height: 40px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const KakaoBtn = styled(GoogleBtn)`
  background-color: rgba(250, 255, 0, 0.7);
  margin-top: 24px;
`;

const LogoImg = styled.img`
  position: absolute;
  left: 13px;
  top: 8px;
`;

const Text = styled.span`
  ${({ theme }) => theme.font.weight.bold};
  ${({ theme }) => theme.font.size[20]};
  margin-left: 25px;
`;
