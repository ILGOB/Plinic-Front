import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../../components/input/Input';

function TestInput() {
  const [nicknameInput, setNicknameInput] = useState('');
  const [nicknameSubmit, setNicknameSubmit] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [searchSubmit, setSearchSubmit] = useState('');
  const [titleInput, setTitleInput] = useState('');
  const [contentInput, setContentInput] = useState('');

  return (
    <FlexContainer>
      <Input
        usedFor={'nickname'}
        userInput={nicknameInput}
        setUserInput={setNicknameInput}
        userSubmit={nicknameSubmit}
        setUserSubmit={setNicknameSubmit}
      />
      <div>
        <div>{nicknameInput} 을 입력하였습니다.</div>
        <div>{nicknameSubmit} 을 제출하였습니다.</div>
      </div>

      <Input
        usedFor={'search'}
        userInput={searchInput}
        setUserInput={setSearchInput}
        userSubmit={searchSubmit}
        setUserSubmit={setSearchSubmit}
      />
      <div>
        <div>{searchInput} 을 입력하였습니다.</div>
        <div>{searchSubmit} 을 제출하였습니다.</div>
      </div>

      <Input usedFor={'title'} userInput={titleInput} setUserInput={setTitleInput} />
      <div>{titleInput} 을 입력하였습니다.</div>

      <Input usedFor={'content'} userInput={contentInput} setUserInput={setContentInput} />
      <div>{contentInput} 을 입력하였습니다.</div>
    </FlexContainer>
  );
}

export default TestInput;

const FlexContainer = styled.div`
  ${({ theme }) => theme.align.flexCenterColumn}
  gap: 20px;
`;
