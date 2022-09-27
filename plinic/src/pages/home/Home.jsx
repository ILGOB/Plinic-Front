import React from 'react';
import styled, { keyframes } from 'styled-components';

function Home() {
  const handleLogin = () => {
    window.location.href = 'http://172.19.109.57:8000/api/v1/accounts/kakao-authentication/login';
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
      <BtnWrapper onClick={handleLogin}>
        <Symbol src="img/symbol.png" />
        <Text>Login with Kakao</Text>
      </BtnWrapper>
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

const BtnWrapper = styled.div`
  cursor: pointer;
  width: 300px;
  height: 50px;
  border-radius: 12px;
  background-color: #fee500;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Symbol = styled.img`
  width: 20px;
  position: absolute;
  left: 15px;
`;

const Text = styled.span`
  ${({ theme }) => theme.font.weight.thick};
  margin-left: 20px;
  line-height: 1;
`;
