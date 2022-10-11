import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

import Input from '../input/Input';

function RegisterUserInfo({ isEdit, originData }) {
  const [nickname, setNickname] = useState('');
  const [genreNum, setGenreNum] = useState(0);
  const nicknameInput = useRef(null);
  const maxNum = <MaxNum>{MAX_NUM}</MaxNum>;

  const genreNumUpHandler = () => {
    setGenreNum(genreNum + 1);
  };

  const genreNumDownHandler = () => {
    setGenreNum(genreNum - 1);
  };

  const editHandler = () => {
    alert(`닉네임: ${nickname}\n선택한 장르 개수: ${genreNum}으로 수정`);
  };

  const signUpHandler = () => {
    alert(`닉네임: ${nickname}\n선택한 장르 개수: ${genreNum}`);
  };

  const onClickNicknameInput = e => {
    console.log('e :>> ', e);
    if (isEdit && e.target.value === originData.nickname) {
      e.target.value = '';
    }
  };

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
        {genreNum > MAX_NUM && <WarningText>중복된 닉네임입니다.</WarningText>}
      </NicknameWrapper>
      <GenreWrapper>
        <Text>
          선호하는 장르를 선택하세요 <GenreNum genreNum={genreNum}>{genreNum}</GenreNum> / {maxNum}{' '}
          <button onClick={genreNumUpHandler}>up</button>
          <button onClick={genreNumDownHandler}>down</button>
        </Text>
        <Genre />
      </GenreWrapper>
      <HorizontalLine />
      {isEdit ? <Btn onClick={editHandler}>수정하기</Btn> : <Btn onClick={signUpHandler}>가입하기</Btn>}
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

const Genre = styled.div`
  width: 500px;
  height: 140px;
  background-color: ${NAVY};
`;

const HorizontalLine = styled.div`
  width: calc(100% - 100px);
  height: 2px;
  background-color: ${NAVY};
  margin-top: 54px;
`;

const Btn = styled.span`
  cursor: pointer;
  color: ${GREEN};
  ${({ theme }) => theme.font.weight.bold};
  position: relative;
  top: 20px;
  left: calc((100% - 100px) / 2 - 30px);
`;
