import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

import Input from '../input/Input';
import GenreList from '../button/genre/GenreList';
import TextBtn from '../button/text/TextBtn';
import Modal from '../modal/Modal';
import ModalPortal from '../modal/ModalPortal';

function RegisterUserInfo({ isEdit, originData }) {
  const [nickname, setNickname] = useState(originData ? originData.nickname : '');
  const [genreNum, setGenreNum] = useState(originData ? originData.genre.length : 0);
  const [chooseGenre, setChooseGenre] = useState(originData ? originData.genre : []);
  const [isMembershipWithdrawalModal, setIsMembershipWithdrawalModal] = useState(false);

  const nicknameInput = useRef(null);
  const maxNum = <MaxNum>{MAX_NUM}</MaxNum>;

  const navigate = useNavigate();

  const editHandler = () => {
    alert(
      `닉네임: ${originData.nickname} => ${nickname}\n선택한 장르 개수: ${originData.genre.length} => ${genreNum}\n선택한 장르: ${originData.genre} => ${chooseGenre}으로 수정`
    );
  };

  const signUpHandler = () => {
    alert(`닉네임: ${nickname}\n선택한 장르 개수: ${genreNum}\n선택한 장르: ${chooseGenre}`);
  };

  const onClickNicknameInput = e => {
    console.log('e :>> ', e);
    if (isEdit && e.target.value === originData.nickname) {
      e.target.value = '';
    }
  };

  const onClickGenreBtn = e => {
    chooseGenre.includes(e.target.id)
      ? setChooseGenre(chooseGenre.filter(el => el !== e.target.id))
      : chooseGenre.length < 3 && setChooseGenre(prev => [...prev, e.target.id]);
  };

  useEffect(() => {
    console.log('chooseGenre', chooseGenre);
    setGenreNum(chooseGenre.length);
  }, [chooseGenre]);

  useEffect(() => {
    console.log('nickname :>> ', nickname);
    console.log('genreNum :>> ', genreNum);
    if (isEdit) {
      setNickname(originData.nickname);
    }
    if (nicknameInput.current) {
      console.log('nicknameInput.current :>> ', nicknameInput.current);
      nicknameInput.current.addEventListener('click', onClickNicknameInput);
    }
  }, [originData]);

  const handleMembershipWithdrawalModal = () => {
    setIsMembershipWithdrawalModal(!isMembershipWithdrawalModal);
  };

  const clickedYesButton = () => {
    handleMembershipWithdrawalModal();
    alert('탈퇴되었습니다.');
    navigate('/', { replace: true });
  };

  const clickedNoButton = () => {
    handleMembershipWithdrawalModal();
    alert('탈퇴 취소');
  };

  useEffect(() => {
    console.log('MembershipWithdrawal modal State:', isMembershipWithdrawalModal);
  }, [isMembershipWithdrawalModal]);

  return (
    <Wrapper>
      <Title>{isEdit ? '프로필 수정' : '회원가입'}</Title>
      <ProfileIcon icon={faCircleUser} />
      <Email>plinic@gmail.com</Email>
      <NicknameWrapper>
        <Text>{isEdit ? '변경할 닉네임을 입력하세요' : '사용할 닉네임을 입력하세요'}</Text>
        <Input
          value={nickname}
          ref={nicknameInput}
          usedFor={'nickname'}
          userInput={nickname}
          setUserInput={setNickname}
        />
        {true && <WarningText>중복된 닉네임입니다.</WarningText>}
      </NicknameWrapper>
      <GenreWrapper>
        <Text>
          선호하는 장르를 선택하세요 <GenreNum genreNum={genreNum}>{genreNum}</GenreNum> / {maxNum}
        </Text>
        <GenreList onClick={onClickGenreBtn} isClicked={chooseGenre} />
      </GenreWrapper>
      <HorizontalLine />
      {isEdit ? (
        <>
          <BtnWrapper isEdit={isEdit}>
            <TextBtn btnName={'탈퇴하기'} color={'disabled'} onClick={handleMembershipWithdrawalModal} />
            <TextBtn btnName={'수정하기'} color={'lightGreen'} onClick={editHandler} />
          </BtnWrapper>
          <ModalPortal>
            {isMembershipWithdrawalModal && (
              <Modal leftOnClick={clickedYesButton} rightOnClick={clickedNoButton} usedFor={'membershipWithdrawal'} />
            )}
          </ModalPortal>
        </>
      ) : (
        <BtnWrapper isEdit={isEdit}>
          <TextBtn btnName={'가입하기'} color={'lightGreen'} onClick={signUpHandler} />
        </BtnWrapper>
      )}
    </Wrapper>
  );
}

export default RegisterUserInfo;

const NAVY = ({ theme }) => theme.color.navy;
const GREEN = ({ theme }) => theme.color.green;
const MAX_NUM = 3;
const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: calc((100vh - 60px - 565px) / 2);
  ${FLEX_CENTER_COLUMN};
  justify-content: flex-start;
`;

const Title = styled.span`
  ${({ theme }) => theme.font.size[20]};
  ${({ theme }) => theme.font.weight.bold};
  color: ${NAVY};
  margin-bottom: 16px;
`;

const ProfileIcon = styled(FontAwesomeIcon)`
  font-size: 107px;
  color: ${NAVY};
`;

const Email = styled.span`
  ${({ theme }) => theme.font.size[14]};
  ${({ theme }) => theme.font.weight.thick};
  color: ${NAVY};
  margin-top: 12px;
  margin-bottom: 16px;
`;

const NicknameWrapper = styled.div`
  ${FLEX_CENTER_COLUMN}
`;

const Text = styled(Email)`
  ${({ theme }) => theme.font.weight.normal};
`;

const WarningText = styled.span`
  color: ${({ theme }) => theme.color.warning};
  ${({ theme }) => theme.font.weight.bold};
  ${({ theme }) => theme.font.size[14]};
`;

const GenreNum = styled.span`
  color: ${props => (props.genreNum < MAX_NUM ? NAVY : GREEN)};
`;

const GenreWrapper = styled(NicknameWrapper)``;

const MaxNum = styled.span`
  color: ${GREEN};
`;

const HorizontalLine = styled.div`
  width: calc(100% - 100px);
  height: 2px;
  background-color: ${NAVY};
  margin-top: 54px;
`;

const BtnWrapper = styled.div`
  width: calc(100% - 100px);
  padding-top: 20px;
  ${({ isEdit }) =>
    isEdit
      ? `
  display: flex;
  justify-content: space-between;
    
  `
      : `
    text-align: right;
  `}
`;
