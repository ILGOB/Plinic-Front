import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import PlaylistModal from './PlaylistModal';
import MembershipWithdrawal from './MembershipWithdrawal';

const Modal = ({ close, usedFor, leftOnClick, rightOnClick, setPlaylistData }) => {
  const onWrapperClick = e => {
    if (e.target === e.currentTarget) {
      close();
    }
  };
  return (
    <Wrapper onClick={onWrapperClick}>
      <Container>
        <Main>
          {usedFor === 'playlist' ? <PlaylistModal setPlaylistData={setPlaylistData} /> : <MembershipWithdrawal />}
        </Main>
        <Footer usedFor={usedFor} leftOnClick={leftOnClick} rightOnClick={rightOnClick} />
      </Container>
    </Wrapper>
  );
};

export default Modal;

const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.darkGray};
  ${FLEX_CENTER_COLUMN}
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100001;
`;

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: ${({ theme }) => theme.color.navy};
  border-radius: 40px;
  padding: 20px;
  ${FLEX_CENTER_COLUMN}
`;

const Main = styled.div`
  width: fit-content;
  height: fit-content;
`;
