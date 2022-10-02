import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

import Input from '../../components/input/Input';

function SignUp() {
  const [nickname, setNickname] = useState('');
  const [genreNum, setGenreNum] = useState(0);

  const maxNum = <MaxNum>{MAX_NUM}</MaxNum>;

  const genreNumUpHandler = () => {
    setGenreNum(genreNum + 1);
  };

  const genreNumDownHandler = () => {
    setGenreNum(genreNum - 1);
  };

  const signUpHandler = () => {
    alert(`닉네임: ${nickname}\n선택한 장르 개수: ${genreNum}`);
  };

  useEffect(() => {
    console.log('nickname :>> ', nickname);
    console.log('genreNum :>> ', genreNum);
  });

  return (
    <Wrapper>
      <Title>회원가입</Title>
      <ProfileIcon icon={faCircleUser} />
      <Email>plinic@gmail.com</Email>
      <NicknameWrapper>
        <Text>사용할 닉네임을 입력하세요</Text>
        <Input usedFor={'nickname'} userInput={nickname} setUserInput={setNickname} />
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
      <SignUpBtn onClick={signUpHandler}>가입하기</SignUpBtn>
    </Wrapper>
  );
}

export default SignUp;

const NAVY = ({ theme }) => theme.color.navy;
const GREEN = ({ theme }) => theme.color.green;
const MAX_NUM = 3;
const FLEX_CENTER_COLUMN = ({ theme }) => theme.align.flexCenterColumn;

const Wrapper = styled.div`
  /* background-color: red; */
  width: 100%;
  margin-top: -50px;
  ${FLEX_CENTER_COLUMN}
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

const SignUpBtn = styled.span`
  cursor: pointer;
  color: ${GREEN};
  ${({ theme }) => theme.font.weight.bold};
  position: relative;
  top: 20px;
  left: calc((100% - 100px) / 2 - 30px);
`;
