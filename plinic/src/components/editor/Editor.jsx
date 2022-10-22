import React from 'react';
import Input from '../input/Input';
import styled from 'styled-components';
import PlaylistSwipe from '../swipe/PlaylistSwipe';

function Editor({ type, data, titleInput, setTitleInput, contentInput, setContentInput, setPlaylistInput }) {
  const contentInputProps = { usedFor: 'content', userInput: contentInput, setUserInput: setContentInput };
  return (
    <Wrapper>
      <Input usedFor={'title'} userInput={titleInput} setUserInput={setTitleInput} maxLength={30} />
      <Input maxLength={type === 'post' ? 300 : undefined} {...contentInputProps} />
      {type === 'post' && <PlaylistSwipe data={data} setPlaylistInput={setPlaylistInput} />}
    </Wrapper>
  );
}

export default Editor;

const Wrapper = styled.div`
  ${({ theme }) => theme.align.flexCenterColumn}
  gap: 25px;
`;
