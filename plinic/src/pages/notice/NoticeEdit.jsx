import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../../components/input/Input';
import TextBtn from '../../components/button/text/TextBtn';

function NoticeEdit() {
  const [titleInput, setTitleInput] = useState('');
  const [contentInput, setContentInput] = useState('');
  const [isWarning, setIsWarning] = useState(false);

  const handleUpload = () => {
    alert(`제목: ${titleInput}\n내용: ${contentInput}`);
  };

  useEffect(() => {
    if (titleInput.length >= 50) {
      setIsWarning(true);
    } else {
      setIsWarning(false);
    }
  }, [titleInput]);

  return (
    <Wrapper>
      <Title>공지글 작성하기</Title>
      <Input usedFor={'title'} userInput={titleInput} setUserInput={setTitleInput} maxLength={50} />
      {isWarning && <Warning>제목은 최대 50자까지 입력 가능합니다.</Warning>}
      <Input usedFor={'content'} userInput={contentInput} setUserInput={setContentInput} />
      <FlexRow>
        <TextBtn location={'/'} color={'lightGreen'} btnName={'취소하기'} />
        <TextBtn location={'/'} color={'navy'} btnName={'올리기'} onClick={handleUpload} />
      </FlexRow>
    </Wrapper>
  );
}

export default NoticeEdit;

const NAVY = ({ theme }) => theme.color.navy;

const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  ${({ theme }) => theme.align.flexCenterColumn}
  gap: 25px;
`;

const Title = styled.div`
  margin-bottom: 20px;
  color: ${NAVY};
  ${({ theme }) => theme.font.size['30']};
  ${({ theme }) => theme.font.weight['bold']};
`;

const FlexRow = styled.div`
  width: 900px;
  ${({ theme }) => theme.align.flexCenter}
  justify-content: flex-end;
  gap: 25px;
`;

const Warning = styled.div`
  color: ${({ theme }) => theme.color.warning};
`;
