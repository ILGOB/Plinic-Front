import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <Wrapper>
      <Video autoPlay loop muted>
        <source src="video/video1.mp4" type="video/mp4" />
      </Video>
      ddd
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  /* width: 100vw;
  height: 100vh;
  overflow: hidden; */
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
