import React, { useState, useEffect } from 'react';
import GenreList from '../../../components/button/genre/GenreList';
import Profile from '../../../components/profile/Profile';
import TextBtn from '../../../components/button/text/TextBtn';
import Modal from '../../../components/modal/Modal';
import ModalPortal from '../../../components/modal/ModalPortal';
import styled from 'styled-components';

function Resign() {
  // 장르 버튼
  const [isClicked, setIsClicked] = useState([]);

  const onClickMoodBtn = e => {
    isClicked.includes(e.target.id)
      ? setIsClicked(isClicked.filter(el => el !== e.target.id))
      : isClicked.length < 3 && setIsClicked(prev => [...prev, e.target.id]);
  };

  useEffect(() => {
    console.log('isClicked', isClicked);
  }, [isClicked]);

  // 텍스트 버튼
  const [isMembershipWithdrawalModal, setIsMembershipWithdrawalModal] = useState(false);

  const clicked = props => {
    console.log('clicked');
  };

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
    console.log('MembershipWithdrawal modal State:', isMembershipWithdrawalModal);
  }, [isMembershipWithdrawalModal]);

  return (
    <>
      <Wrapper>
        <Profile width={150} editBtn />
        <Name>사용자 이름을 입력하세요</Name>
        <Input type="text" name="name" placeholder="jce" />
        <FavoriteGenre>선호하는 장르를 선택하세요 {isClicked.length}/3</FavoriteGenre>
        <GenreList onClick={onClickMoodBtn} isClicked={isClicked} />
        <Line>
          __________________________________________________________________________________________________________________________________________________________
        </Line>
      </Wrapper>
      <Buttons>
        <ResignBtn>
          <TextBtn btnName={'탈퇴하기'} color={'disabled'} onClick={handleMembershipWithdrawalModal} />
          <ModalPortal>
            {isMembershipWithdrawalModal && (
              <Modal leftOnClick={clickedYesButton} rightOnClick={clickedNoButton} usedFor={'membershipWithdrawal'} />
            )}
          </ModalPortal>
        </ResignBtn>
        <TextBtns>
          <TextBtn location={'/'} btnName={'취소하기'} color={'disabled'} onClick={clicked} />
          <TextBtn location={'/'} btnName={'수정하기'} color={'lightGreen'} onClick={clicked} />
        </TextBtns>
      </Buttons>
    </>
  );
}

export default Resign;

const NAVY = ({ theme }) => theme.color.navy;
const LIGHTGREEN = ({ theme }) => theme.color.lightgreen;

const Wrapper = styled.div`
  ${({ theme }) => theme.align.flexCenterColumn};
`;

const Name = styled.div`
  color: ${NAVY};
  ${({ theme }) => theme.font.size[14]};
  ${({ theme }) => theme.font.weight.thick};
  margin-top: 33px;
  margin-bottom: 11px;
`;

const Input = styled.input`
  color: ${NAVY};
  border-color: ${NAVY};
`;

const FavoriteGenre = styled.div`
  color: ${NAVY};
  ${({ theme }) => theme.font.size[14]};
  ${({ theme }) => theme.font.weight.thick};
  margin-top: 47px;
  margin-bottom: 15px;
`;

const Line = styled.div`
  color: ${NAVY};
  margin-top: 40px;
`;

const Buttons = styled.div`
  ${({ theme }) => theme.align.flexCenter};
  width: 948px;
  margin-top: 22px;
`;

const ResignBtn = styled.div`
  margin: auto;
  margin-left: 0px;
`;

const TextBtns = styled.div`
  ${({ theme }) => theme.align.flexCenter}
  margin-right: 0px;
`;
