import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from '../../../components/modal/Modal';
import ModalPortal from '../../../components/modal/ModalPortal';

function TestModal() {
  const [isPlaylistModal, setIsPlaylistModal] = useState(false);
  const [isMembershipWithdrawalModal, setIsMembershipWithdrawalModal] = useState(false);

  // 플레이리스트 모달
  const handlePlaylistModal = () => {
    setIsPlaylistModal(!isPlaylistModal);
  };

  const clickedCloseButton = () => {
    handlePlaylistModal();
    console.log('clicked close button');
  };

  const clickedCreateButton = () => {
    handlePlaylistModal();
    console.log('clicked create button');
  };

  // 회원탈퇴 모달
  const handleMembershipWithdrawalModal = () => {
    setIsMembershipWithdrawalModal(!isMembershipWithdrawalModal);
  };

  const clickedYesButton = () => {
    handleMembershipWithdrawalModal();
    console.log('clicked Yes button');
  };

  const clickedNoButton = () => {
    handleMembershipWithdrawalModal();
    console.log('clicked No button');
  };

  useEffect(() => {
    console.log('Playlist modal State:', isPlaylistModal);
    console.log('MembershipWithdrawal modal State:', isMembershipWithdrawalModal);
  }, [isPlaylistModal, isMembershipWithdrawalModal]);

  return (
    <Wrapper>
      <Button onClick={handlePlaylistModal}>플레이리스트 모달 버튼</Button>
      <ModalPortal>
        {isPlaylistModal && (
          <Modal leftOnClick={clickedCloseButton} rightOnClick={clickedCreateButton} usedFor={'playlist'} />
        )}
      </ModalPortal>

      <Button onClick={handleMembershipWithdrawalModal}>회원탈퇴 모달 버튼</Button>
      <ModalPortal>
        {isMembershipWithdrawalModal && (
          <Modal leftOnClick={clickedYesButton} rightOnClick={clickedNoButton} usedFor={'membershipWithdrawal'} />
        )}
      </ModalPortal>
    </Wrapper>
  );
}

export default TestModal;

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  ${({ theme }) => theme.align.flexCenterColumn}
  gap: 200px;
`;

const Button = styled.div`
  width: fit-content;
  height: 30px;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #314260;
  color: white;
  ${({ theme }) => theme.align.flexCenterColumn}
`;
